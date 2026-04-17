import React, {useMemo, useEffect, useState, useCallback, useRef} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Calendar as RBCalendar, Views, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import {enUS} from 'date-fns/locale';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({format, parse, startOfWeek, getDay, locales});

function useCalendarData() {
  const eventsUrl = useBaseUrl('/calendar.json');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(eventsUrl, {cache: 'no-cache'});
        if (!res.ok) throw new Error(`Failed to load calendar: ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
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
          organiser: ev.organiser,
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
  }, [eventsUrl]);

  return {events, loading, error};
}

function OrganiserFilter({allOrganisers, selectedOrganisers, onToggle, onSelectAll, onClearAll}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const allSelected = selectedOrganisers.size === allOrganisers.length;
  const label = allSelected
    ? 'All organisers'
    : `${selectedOrganisers.size} of ${allOrganisers.length} selected`;

  return (
    <div style={{position: 'relative', display: 'inline-block', marginBottom: '0.75rem'}} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.3rem 0.75rem',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '4px',
          background: 'var(--ifm-background-surface-color)',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
      >
        <strong>Organiser:</strong> {label} {open ? '▴' : '▾'}
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 200,
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '4px',
          padding: '0.5rem',
          minWidth: '280px',
          maxHeight: '340px',
          overflowY: 'auto',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}>
          <div style={{
            display: 'flex', gap: '0.5rem',
            marginBottom: '0.5rem', paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <button type="button" className="button button--sm button--secondary" onClick={onSelectAll}>Select all</button>
            <button type="button" className="button button--sm button--secondary" onClick={onClearAll}>Clear all</button>
          </div>
          {allOrganisers.map(org => (
            <label
              key={org}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.2rem 0.25rem', cursor: 'pointer', borderRadius: '3px',
              }}
            >
              <input
                type="checkbox"
                checked={selectedOrganisers.has(org)}
                onChange={() => onToggle(org)}
              />
              <span style={{fontSize: '0.9rem'}}>{org}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Calendar() {
  const {events, loading, error} = useCalendarData();
  const [selectedOrganisers, setSelectedOrganisers] = useState(new Set());

  const allOrganisers = useMemo(() => {
    const labels = new Set(events.map(ev => ev.organiser).filter(Boolean));
    return Array.from(labels).sort();
  }, [events]);

  useEffect(() => {
    setSelectedOrganisers(new Set(allOrganisers));
  }, [allOrganisers.join(',')]);

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

  const [selectedEvent, setSelectedEvent] = useState(null);
  const onSelectEvent = useCallback((event) => setSelectedEvent(event), []);

  const allSelected = selectedOrganisers.size === allOrganisers.length;

  const filtered = useMemo(() => {
    if (allSelected) return events;
    return events.filter(ev => !ev.organiser || selectedOrganisers.has(ev.organiser));
  }, [events, selectedOrganisers, allSelected]);

  const tooltipAccessor = useCallback((event) => {
    const parts = [];
    if (event.organiser) parts.push(event.organiser);
    if (event.location) parts.push(event.location);
    return parts.join(' • ');
  }, []);

  const handleToggle = useCallback((org) => {
    setSelectedOrganisers(prev => {
      const next = new Set(prev);
      if (next.has(org)) next.delete(org); else next.add(org);
      return next;
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedOrganisers(new Set(allOrganisers));
  }, [allOrganisers]);

  const handleClearAll = useCallback(() => {
    setSelectedOrganisers(new Set());
  }, []);

  if (error) {
    return <div className="alert alert--danger">{String(error)}</div>;
  }

  return (
    <div>
      {loading && <div className="alert alert--info">Loading calendar…</div>}
      {allOrganisers.length > 0 && (
        <OrganiserFilter
          allOrganisers={allOrganisers}
          selectedOrganisers={selectedOrganisers}
          onToggle={handleToggle}
          onSelectAll={handleSelectAll}
          onClearAll={handleClearAll}
        />
      )}
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
      <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>
        Times are displayed in your browser timezone.
      </p>
    </div>
  );
}

function EventModal({event, onClose}) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const meta = useMemo(() => {
    const fmt = new Intl.DateTimeFormat('de-DE', {timeZone: 'Europe/Berlin', dateStyle: 'medium', timeStyle: 'short'});
    const startStr = fmt.format(event.start);
    const endStr = fmt.format(event.end);
    const tzNameFmt = new Intl.DateTimeFormat('de-DE', {timeZone: 'Europe/Berlin', timeZoneName: 'short'});
    const tzName = tzNameFmt.format(event.start).split(' ').pop();
    return {startStr, endStr, tzName};
  }, [event.start, event.end]);

  return (
    <div className="calendarModalOverlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="calendarModal" onClick={e => e.stopPropagation()}>
        <div className="calendarModalHeader">
          <h3 style={{margin: 0}}>{event.title}</h3>
          <button className="button button--sm button--secondary" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="calendarModalBody">
          <p><strong>When (Berlin):</strong> {meta.startStr} – {meta.endStr} <em>({meta.tzName})</em></p>
          {event.organiser && <p><strong>Organiser:</strong> {event.organiser}</p>}
          {event.location && <p><strong>Where:</strong> {event.location}</p>}
          {event.type && <p><strong>Type:</strong> {event.type}</p>}
          {event.description && (
            <div>
              <strong>Description:</strong>
              <p style={{marginTop: '0.25rem'}}>{event.description}</p>
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
