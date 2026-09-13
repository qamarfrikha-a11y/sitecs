import { useEffect, useState } from "react";
import { EXPERIENCES } from "../data/siteData";

const FAQ_ITEMS = [
  { question: "How can I join the chapter?", answer: "Open the Join page, send your details through the membership form, and the chapter team will contact you with the next steps." },
  { question: "Who can participate?", answer: "Any ENIS student interested in computing, engineering, cybersecurity, research, or technology can participate, regardless of experience level." },
  { question: "What are the benefits?", answer: "Members get access to workshops, events, technical communities, networking opportunities, and practical projects built with other students." },
  { question: "How can I participate in events?", answer: "Follow our social channels and check the Events page for announcements, registration details, schedules, and available places." },
];

export function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);
  return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8 grid gap-4 sm:grid-cols-2"><input required type="text" placeholder="Full name" className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/55 focus:border-[#F5821F]" /><input required type="email" placeholder="Email address" className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/55 focus:border-[#F5821F]" /><select defaultValue="" required className="rounded-md border border-white/20 bg-[#0A2540] px-4 py-3 text-[14px] text-white outline-none focus:border-[#F5821F] sm:col-span-2"><option value="" disabled>Choose your area of interest</option><option>Software and algorithms</option><option>Cybersecurity</option><option>Research and innovation</option><option>Events and communication</option></select><button type="submit" className="rounded-md bg-[#F5821F] px-5 py-3 text-[14px] font-bold text-white hover:bg-[#D96E12] sm:col-span-2">{submitted ? "Request received" : "Request membership form"}</button>{submitted && <p className="text-[13px] text-[#BFE3EC] sm:col-span-2">Thank you. The chapter team will contact you at the email provided.</p>}</form>;
}

export function ChairExperiences() {
  const [activeExperience, setActiveExperience] = useState(0); const [isPaused, setIsPaused] = useState(false); const experience = EXPERIENCES[activeExperience];
  useEffect(() => { if (isPaused) return undefined; const rotation = window.setInterval(() => setActiveExperience((current) => (current + 1) % EXPERIENCES.length), 6000); return () => window.clearInterval(rotation); }, [isPaused]);
  return <div className="mt-12 border-t border-[#E2EDF1] pt-8 text-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}><p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5821F]">Previous experiences</p><div className="mx-auto mt-6 max-w-3xl border-t-4 border-[#00629B] bg-white p-6 shadow-[0_10px_30px_rgba(10,37,64,0.05)] sm:p-8"><div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#BFE3EC] bg-[#EAF6F8] text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#00629B]">{experience.photo ? <img src={experience.photo} alt={experience.name} className="h-full w-full object-cover" /> : <span className="text-[14px] font-bold">{experience.initials || "ENIS"}</span>}</div><blockquote className="mt-6"><p className="font-display text-[20px] font-semibold leading-relaxed text-[#0A2540]">“{experience.quote}”</p><footer className="mt-5 text-[13px] text-[#5B7688]"><strong className="block text-[#00629B]">{experience.name}</strong>{experience.role}</footer></blockquote></div><div className="mt-6 flex items-center justify-center gap-3"><button type="button" onClick={() => setActiveExperience((activeExperience - 1 + EXPERIENCES.length) % EXPERIENCES.length)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE8ED] text-[#00629B] hover:border-[#F5821F] hover:text-[#F5821F]" aria-label="Previous chair">←</button>{EXPERIENCES.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveExperience(index)} aria-label={`Show ${item.name} experience`} className={`h-2 rounded-full transition-all ${activeExperience === index ? "w-10 bg-[#F5821F]" : "w-2 bg-[#BFE3EC]"}`} />)}<button type="button" onClick={() => setActiveExperience((activeExperience + 1) % EXPERIENCES.length)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE8ED] text-[#00629B] hover:border-[#F5821F] hover:text-[#F5821F]" aria-label="Next chair">→</button></div></div>;
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 480); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className={`fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5821F] text-white shadow-[0_8px_20px_rgba(245,130,31,0.4)] transition-all duration-300 hover:bg-[#D96E12] ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></svg></button>;
}

const IMPACT_STATS = [
  { value: "13", label: "years old", tone: "blue" },
  { value: "125", label: "members", tone: "orange" },
  { value: "50", label: "meetings", tone: "teal" },
  { value: "60", label: "events and conferences", tone: "blue" },
];

export function ChapterImpact() {
  return <section className="impact-section"><div><p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5821F]">Chapter impact</p><h2 className="font-display mt-2 text-[28px] font-bold text-[#0A2540]">A community that turns curiosity into momentum.</h2></div><div className="impact-grid">{IMPACT_STATS.map((stat) => <article key={stat.label} className={`impact-stat impact-stat-${stat.tone}`}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div></section>;
}

export function ChapterFaq() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return (
    <section className="faq-section">
      <div className="max-w-xl">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5821F]">FAQ</p>
        <h2 className="font-display mt-2 text-[28px] font-bold text-[#0A2540]">Everything you need to know before joining the chapter.</h2>
      </div>
      <div className="faq-list">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openQuestion === index;
          return (
            <article key={item.question} className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
              <button type="button" className="faq-trigger" onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen}>
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
