import React from "react";
import EventImage from "./EventImage";
import { CYBER_EVENTS } from "../data/events";

export default function CyberEventShowcase() {
  return (
    <section className="mt-12 border-t border-[#DCE8ED] pt-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#00B5E2]">Cyber Unit archive</p>
          <h2 className="font-display mt-2 text-[27px] font-bold text-[#0A2540]">Three ways to learn security.</h2>
        </div>
        <span className="text-[13px] font-semibold text-[#5B7688]">CTF · Congress · Bootcamp</span>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {CYBER_EVENTS.map((event) => (
          <article key={event.title} className="rounded-lg border border-[#DCE8ED] bg-white p-4 shadow-[0_12px_30px_rgba(10,37,64,0.06)] transition-transform hover:-translate-y-1">
            <EventImage event={event} />
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00629B]">{event.category}</p>
            <h3 className="font-display mt-2 text-[19px] font-bold text-[#0A2540]">{event.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#5B7688]">{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
