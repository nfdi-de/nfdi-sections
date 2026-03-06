import React, {useMemo, useEffect, useState, useCallback} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Calendar as RBCalendar, Views, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import {enUS} from 'date-fns/locale';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({format, parse, startOfWeek, getDay, locales});

function useCalendarData() {
  const eventsUrl = useBaseUrl('/calendar.json');
  const organisersUrl = useBaseUrl('/calendar-organisers.json');
  const [events, setEvents] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const [evRes, orgRes] = await Promise.all([
          fetch(eventsUrl, {cache: 'no-cache'}),
          fetch(organisersUrl, {cache: 'no-cache'}),
        ]);
        if (!evRes.ok) throw new Error(`Failed to load calendar: ${evRes.status}`);
        const [data, organisersData] = await Promise.all([
          evRes.json(),
          orgRes.ok ? orgRes.json() : {},
        ]);
        if (cancelled) return;
        setCategoryMap(organisersData?.categories || {});
        const mapped = (data || []).map(ev => ({
          title: ev.title,
          start: new Date(ev.start),
          end: new Date(ev.end),
          allDay: !!ev.allDay,
          url: ev.url,
          website: ev.website,
          location: ev.location,
          description: ev.description,
          type: ev.type,
          category: ev.category,
          color: ev.color,
        }));
        setEvents(mapped);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true };
  }, [eventsUrl, organisersUrl]);

  return {events, categoryMap, loading, error};
}

function Legend({events, categoryMap, enabledCategories, onToggleCategory, onShowAll}) {
  const items = useMemo(() => {
    return Object.entries(categoryMap).map(([key, cat]) => ({
      key,
      label: cat.label || key,
      color: cat.color || 'var(--ifm-color-primary)',
    }));
  }, [categoryMap]);

  if (!items.length) return null;
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.75rem', alignItems:'center'}}>
      <strong style={{marginRight:'0.25rem'}}>Filter:</strong>
      {items.map((it) => {
        const active = enabledCategories.has(it.key);
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => onToggleCategory(it.key)}
            title={active ? 'Click to hide this category' : 'Click to show this category'}
            style={{
              display:'inline-flex', alignItems:'center', gap:'0.4rem',
              fontSize:'0.9rem', padding:'0.25rem 0.5rem', cursor:'pointer',
              borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)',
              background: active ? 'var(--ifm-background-surface-color)' : 'var(--ifm-background-color)',
              opacity: active ? 1 : 0.5,
            }}
          >
            <span style={{width:12, height:12, background:it.color, border:'1px solid var(--ifm-color-emphasis-300)'}} />
            <span>{it.label}</span>
          </button>
        );
      })}
      <button type="button" onClick={onShowAll} style={{marginLeft:'0.25rem'}} className="button button--sm button--secondary">
        Reset
      </button>
    </div>
  );
}

export default function Calendar() {
  const {events, categoryMap, loading, error} = useCalendarData();
  const [enabledCategories, setEnabledCategories] = useState(new Set());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setEnabledCategories(new Set(Object.keys(categoryMap)));
  }, [categoryMap]);

  const eventPropGetter = useCallback((event) => {
    const style = {
      backgroundColor: event.color || 'var(--ifm-color-primary)',
      borderRadius: '4px',
      border: '1px solid var(--ifm-color-emphasis-300)',
      color: '#ffffff',
      opacity: 0.95,
    };
    return {style};
  }, []);

  const onSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const filtered = useMemo(() => {
    return events.filter(ev => enabledCategories.has(ev.category || 'other'));
  }, [events, enabledCategories]);

  const tooltipAccessor = useCallback((event) => {
    const parts = [];
    if (event.description) parts.push(event.description);
    if (event.location) parts.push(event.location);
    return parts.join(' • ');
  }, []);

  const handleToggleCategory = useCallback((key) => {
    setEnabledCategories(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, []);

  const handleShowAll = useCallback(() => {
    setEnabledCategories(new Set(Object.keys(categoryMap)));
  }, [categoryMap]);

  if (error) {
    return <div className="alert alert--danger">{String(error)}</div>;
  }

  return (
    <div>
      {loading && <div className="alert alert--info">Loading calendar…</div>}
      <Legend
        events={events}
        categoryMap={categoryMap}
        enabledCategories={enabledCategories}
        onToggleCategory={handleToggleCategory}
        onShowAll={handleShowAll}
      />
      <div className="calendarWrapper">
        <RBCalendar
          localizer={localizer}
          events={filtered}
          startAccessor="start"
          endAccessor="end"
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          defaultView={Views.MONTH}
          style={{height: '70vh'}}
          popup
          eventPropGetter={eventPropGetter}
          onSelectEvent={onSelectEvent}
          tooltipAccessor={tooltipAccessor}
        />
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />)
      }
      <p style={{marginTop:'0.5rem', fontSize:'0.9rem'}}>
        Times are displayed in your browser timezone.
      </p>
    </div>
  );
}

function EventModal({event, onClose}) {
  useEffect(() => {
    function onKey(e){ if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const meta = useMemo(() => {
    const fmt = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', dateStyle: 'medium', timeStyle: 'short' });
    const startStr = fmt.format(event.start);
    const endStr = fmt.format(event.end);
    const tzNameFmt = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', timeZoneName: 'short' });
    const tzName = tzNameFmt.format(event.start).split(' ').pop();
    return {startStr, endStr, tzName};
  }, [event.start, event.end]);

  return (
    <div className="calendarModalOverlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="calendarModal" onClick={e => e.stopPropagation()}>
        <div className="calendarModalHeader">
          <h3 style={{margin:0}}>{event.title}</h3>
          <button className="button button--sm button--secondary" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="calendarModalBody">
          <p><strong>Wann (Berlin):</strong> {meta.startStr} – {meta.endStr} <em>({meta.tzName})</em></p>
          {event.location && <p><strong>Where:</strong> {event.location}</p>}
          {event.type && <p><strong>Type:</strong> {event.type}</p>}
          {event.description && (
            <div>
              <strong>Description:</strong>
              <p style={{marginTop:'0.25rem'}}>{event.description}</p>
            </div>
          )}
        </div>
        <div className="calendarModalFooter">
          {event.url && (
            <a className="button button--primary" href={event.url} target="_blank" rel="noopener noreferrer">Open link</a>
          )}
          {event.website && (
            <a className="button button--secondary" href={event.website} target="_blank" rel="noopener noreferrer">Website</a>
          )}
          <button className="button button--secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
