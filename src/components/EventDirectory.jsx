import React, { useState } from "react";
import EventImage from "./EventImage";
import { EVENTS } from "../data/events";

export default function EventDirectory() {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const filters = ["All", "Competitive programming", "AI", "Junior", "Web development", "Entrepreneurship & Career"];
  const filteredEvents = filter === "All" ? EVENTS : EVENTS.filter((event) => event.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-[12px] font-bold transition-colors ${filter === item ? "bg-[#0A2540] text-white" : "bg-white text-[#3C5A73] hover:bg-[#FFF1E7] hover:text-[#B65300]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filteredEvents.map((event) => (
          <article key={event.title} className="rounded-lg border border-[#E2EDF1] bg-white p-7 shadow-[0_10px_30px_rgba(10,37,64,0.04)]">
            <EventImage event={event} />
            <div className="flex items-start justify-between gap-4"><span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#F5821F]">{event.category}</span><span className="rounded-full bg-[#FFF1E7] px-3 py-1 text-[11px] font-bold text-[#B65300]">{event.date}</span></div>
            <h2 className="font-display mt-4 text-[23px] font-bold">{event.title}</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[#3C5A73]">{event.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-[#E2EDF1] pt-4 text-[12px] text-[#5B7688]"><span>{event.organizer}</span><span>{event.where}</span></div>
            <button type="button" onClick={() => setSelectedEvent(selectedEvent?.title === event.title ? null : event)} className="mt-5 text-[13px] font-bold text-[#00629B] hover:text-[#F5821F]">
              {selectedEvent?.title === event.title ? "Hide details" : "View details"} <span aria-hidden="true">{selectedEvent?.title === event.title ? "↑" : "↓"}</span>
            </button>
            {selectedEvent?.title === event.title && (
              <div className="mt-4 rounded-md bg-[#F6F9FB] p-4 text-[13px] leading-relaxed text-[#3C5A73]">Registration details and the final schedule will be published by the organising unit soon.</div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
