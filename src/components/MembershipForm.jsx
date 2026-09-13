import React, { useState } from "react";

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8 grid gap-4 sm:grid-cols-2">
      <input required type="text" placeholder="Full name" className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/55 focus:border-[#F5821F]" />
      <input required type="email" placeholder="Email address" className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/55 focus:border-[#F5821F]" />
      <select defaultValue="" required className="rounded-md border border-white/20 bg-[#0A2540] px-4 py-3 text-[14px] text-white outline-none focus:border-[#F5821F] sm:col-span-2">
        <option value="" disabled>Choose your area of interest</option>
        <option>Software and algorithms</option>
        <option>Cybersecurity</option>
        <option>Research and innovation</option>
        <option>Events and communication</option>
      </select>
      <button type="submit" className="rounded-md bg-[#F5821F] px-5 py-3 text-[14px] font-bold text-white hover:bg-[#D96E12] sm:col-span-2">{submitted ? "Request received" : "Request membership form"}</button>
      {submitted && <p className="text-[13px] text-[#BFE3EC] sm:col-span-2">Thank you. The chapter team will contact you at the email provided.</p>}
    </form>
  );
}
