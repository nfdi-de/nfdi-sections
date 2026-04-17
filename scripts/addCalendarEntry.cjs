#!/usr/bin/env node
/*
  Append a calendar entry to static/calendar.json based on an Issue Form body.
  Expects env (one of):
    ISSUE_BODY_FILE - path to a file containing the full issue markdown body (preferred)
    ISSUE_BODY      - full issue markdown body as a string (fallback)
    ISSUE_USER      - issue author login (optional)
*/
const fs = require('fs');
const path = require('path');

function parseIssueBody(body) {
  // Simple parser for GitHub Issue Forms: sections rendered as
  // "### <Label>" followed by user content lines until next heading.
  const lines = body.split(/\r?\n/);
  const fields = {};
  let current = null;
  for (let i = 0; i < lines.length; i++) {
    const m = /^###\s+(.+?)\s*$/.exec(lines[i]);
    if (m) {
      current = m[1].trim().toLowerCase();
      fields[current] = '';
      continue;
    }
    if (current) {
      // Skip template helper hints like "_No response_"
      const line = lines[i];
      if (line.trim() === '') continue;
      if (line.trim() === '_No response_') continue;
      // Collect content
      fields[current] += (fields[current] ? '\n' : '') + line;
    }
  }
  return fields;
}

function getField(fields, ...keys) {
  for (const k of keys) {
    const key = k.toLowerCase();
    if (fields[key]) return fields[key];
    // try to strip anything in parentheses
    const stripped = key.replace(/\s*\(.*?\)\s*/g, '').trim();
    if (fields[stripped]) return fields[stripped];
  }
  return undefined;
}

function truthy(v) {
  if (!v) return false;
  const s = String(v).trim().toLowerCase();
  return s === 'true' || s === 'yes' || s === '1';
}

function tzOffsetMinutes(date, timeZone) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone, hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const parts = dtf.formatToParts(date);
  const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
  const asUTC = Date.UTC(+map.year, +map.month - 1, +map.day, +map.hour, +map.minute, +map.second);
  const utcTs = date.getTime();
  return (asUTC - utcTs) / 60000; // minutes ahead of UTC
}

function offsetStringFor(date, timeZone) {
  const m = tzOffsetMinutes(date, timeZone);
  const sign = m >= 0 ? '+' : '-';
  const abs = Math.abs(m);
  const hh = String(Math.floor(abs / 60)).padStart(2, '0');
  const mm = String(abs % 60).padStart(2, '0');
  return `${sign}${hh}:${mm}`;
}

function buildBerlinISO(dateStr, timeStr = '00:00') {
  const tz = 'Europe/Berlin';
  const [y, m, d] = (dateStr || '').split('-').map(Number);
  if (!y || !m || !d) throw new Error('Invalid date, expected YYYY-MM-DD');
  const [hh, mm] = (timeStr || '00:00').split(':').map((n) => Number(n || 0));
  const guessUTC = Date.UTC(y, m - 1, d, hh, mm, 0);
  // First pass
  const off1 = tzOffsetMinutes(new Date(guessUTC), tz);
  const utcMillis = guessUTC - off1 * 60000;
  // Second pass, in case of DST boundaries
  const off2 = tzOffsetMinutes(new Date(utcMillis), tz);
  const utcFinal = guessUTC - off2 * 60000;
  const offsetStr = offsetStringFor(new Date(utcFinal), tz);
  const hhStr = String(hh).padStart(2, '0');
  const mmStr = String(mm).padStart(2, '0');
  return `${dateStr}T${hhStr}:${mmStr}:00${offsetStr}`;
}

function main() {
  const bodyFile = process.env.ISSUE_BODY_FILE;
  const body = bodyFile
    ? fs.readFileSync(bodyFile, 'utf8')
    : (process.env.ISSUE_BODY || '');
  if (!body) {
    console.error('No issue body: set ISSUE_BODY_FILE or ISSUE_BODY env var');
    process.exit(1);
  }
  const f = parseIssueBody(body);
  const organisersFile = path.join(process.cwd(), 'static', 'calendar-organisers.json');
  let organisersData = {categories: {}, organisers: []};
  if (fs.existsSync(organisersFile)) {
    try {
      organisersData = JSON.parse(fs.readFileSync(organisersFile, 'utf8'));
    } catch (e) {
      console.error(`Failed to parse ${organisersFile}:`, e.message);
      process.exit(1);
    }
  }

  const title = getField(f, 'title')?.trim();
  const date = getField(f, 'date', 'date (yyyy-mm-dd)')?.trim();
  const startTime = getField(f, 'start time (hh:mm)', 'start time')?.trim();
  const endTime = getField(f, 'end time (hh:mm)', 'end time')?.trim();
  const organiser = getField(f, 'organiser')?.trim();
  if (!title || !date) {
    console.error('Missing required fields: title/date');
    process.exit(1);
  }
  const allDay = truthy(getField(f, 'all day event?')) || false;
  const startISO = buildBerlinISO(date, startTime || (allDay ? '00:00' : '00:00'));
  const endISO = buildBerlinISO(date, endTime || (allDay ? '23:59' : startTime || '00:00'));
  const organiserEntry = (organisersData.organisers || []).find(
    (entry) => entry.label === organiser
  );
  const category = organiserEntry?.category;
  const categoryColor = category ? organisersData.categories?.[category]?.color : undefined;
  if (organiser && !organiserEntry) {
    console.error(`Unknown organiser: "${organiser}"`);
    process.exit(1);
  }
  if (organiserEntry && !categoryColor) {
    console.error(`Missing color for category: "${category}"`);
    process.exit(1);
  }

  const event = {
    title,
    start: startISO,
    end: endISO,
    allDay,
    location: getField(f, 'location')?.trim() || undefined,
    url: getField(f, 'link (optional)', 'url')?.trim() || undefined,
    website: getField(f, 'event.website (optional)', 'event.website', 'website')?.trim() || undefined,
    type: getField(f, 'type')?.trim() || 'Event',
    organiser: organiser || undefined,
    category,
    color: categoryColor || undefined,
    description: getField(f, 'description')?.trim() || undefined,
    createdBy: process.env.ISSUE_USER || undefined,
  };

  // Basic validation
  if (isNaN(Date.parse(event.start)) || isNaN(Date.parse(event.end))) {
    console.error('Invalid composed datetime. Check date/time values.');
    process.exit(1);
  }

  const file = path.join(process.cwd(), 'static', 'calendar.json');
  let arr = [];
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, 'utf8') || '[]';
    try { arr = JSON.parse(raw); } catch { arr = []; }
  }
  arr.push(event);
  // Sort by start date ascending
  arr.sort((a, b) => new Date(a.start) - new Date(b.start));
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + '\n');
  console.log('Appended calendar event:', event.title);
}

main();
