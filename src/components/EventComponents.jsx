import { useEffect, useState } from "react";
import { CYBER_EVENTS, EVENTS } from "../data/siteData";
import { TEAM } from "../data/team";
import { githubImage } from "../data/imageUrls";

export function EventImage({ event, onImageClick }) {
  const [activeImage, setActiveImage] = useState(0); const [isPaused, setIsPaused] = useState(false);
  useEffect(() => { if (isPaused || event.images.length < 2) return undefined; const rotation = window.setInterval(() => setActiveImage((current) => (current + 1) % event.images.length), 4200); return () => window.clearInterval(rotation); }, [event.images.length, isPaused]);
  return <div className="event-image-frame" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}><button type="button" className="event-image-open" onClick={() => onImageClick?.(activeImage)} aria-label={`Open ${event.title} image fullscreen`}><img key={event.images[activeImage]} src={githubImage(event.images[activeImage])} alt={`${event.title} event highlight ${activeImage + 1}`} className="event-image" /></button><div className="event-image-dots">{event.images.map((image, index) => <button key={image} type="button" onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1} of ${event.title}`} className={index === activeImage ? "event-image-dot event-image-dot-active" : "event-image-dot"} />)}</div></div>;
}

export function EventDirectory() {
  const [filter, setFilter] = useState("All"); const filters = ["All", "Competitive programming", "AI", "Junior", "Web development", "Entrepreneurship & Career"]; const filteredEvents = filter === "All" ? EVENTS : EVENTS.filter((event) => event.category === filter);
  return <div><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-[12px] font-bold transition-colors ${filter === item ? "bg-[#0A2540] text-white" : "bg-white text-[#3C5A73] hover:bg-[#FFF1E7] hover:text-[#B65300]"}`}>{item}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2">{filteredEvents.map((event) => <article key={event.title} className="event-card rounded-lg border border-[#E2EDF1] bg-white p-7 shadow-[0_10px_30px_rgba(10,37,64,0.04)]"><EventImage event={event} /><div className="flex items-start justify-between gap-4"><div><span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#F5821F]">{event.category}</span>{event.state === "upcoming" && <span className="event-status-badge">Open for announcements</span>}</div><span className="rounded-full bg-[#FFF1E7] px-3 py-1 text-[11px] font-bold text-[#B65300]">{event.date}</span></div><h2 className="font-display mt-4 text-[23px] font-bold">{event.title}</h2><p className="mt-3 text-[14px] leading-relaxed text-[#3C5A73]">{event.description}</p>{event.note && <p className="mt-3 text-[13px] font-bold text-[#F5821F]">{event.note}</p>}<div className="mt-6 flex items-center justify-between border-t border-[#E2EDF1] pt-4 text-[12px] text-[#5B7688]"><span>{event.organizer}</span><span>{event.where}</span>{event.website && <a href={event.website} target="_blank" rel="noreferrer" className="hello-world-event-link mt-0">Visit website <span aria-hidden="true">↗</span></a>}</div></article>)}</div></div>;
}

export function BoardShowcase() {
  const [selectedMember, setSelectedMember] = useState(null);

  const SocialIcon = ({ type }) => {
    const isLinkedin = type === "linkedin";
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        {isLinkedin ? (
          <path d="M6.6 8.8A1.7 1.7 0 1 1 6.6 5.4a1.7 1.7 0 0 1 0 3.4ZM5.2 9.9h2.8v8.2H5.2V9.9Zm5.1 0h2.7v1.1h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4v4.2h-2.8v-3.9c0-1.1-.1-2.5-1.5-2.5-1.5 0-1.8 1.2-1.8 2.4v4h-2.8V9.9Z" />
        ) : (
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.005 10.125 11.93v-8.437H7.078v-3.493h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.973H15.83c-1.491 0-1.956.93-1.956 1.885v2.252h3.328l-.532 3.493h-2.796v8.437C19.612 23.078 24 18.092 24 12.073Z" />
        )}
      </svg>
    );
  };

  useEffect(() => {
    if (!selectedMember) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setSelectedMember(null); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedMember]);

  return <><div className="board-showcase">{TEAM.map((member, index) => <button key={member.name} type="button" onClick={() => setSelectedMember(member)} className={`board-member board-member-${index + 1}`}><div className="board-member-orbit" aria-hidden="true" />{member.photo ? <img src={member.photo} alt={member.name} className="board-avatar board-avatar-photo" /> : <div className="board-avatar">{member.initials}</div>}<div className="mt-4 text-[15px] font-bold text-[#0A2540]">{member.name}</div><div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#00629B]">{member.role}</div><div className="board-member-socials">{member.socials?.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`} className="board-social-link" onClick={(event) => event.stopPropagation()}><SocialIcon type="linkedin" /></a>}{member.socials?.facebook && <a href={member.socials.facebook} target="_blank" rel="noreferrer" aria-label={`${member.name} Facebook`} className="board-social-link" onClick={(event) => event.stopPropagation()}><SocialIcon type="facebook" /></a>}</div><span className="board-profile-hint">View profile</span></button>)}</div>{selectedMember && <div className="profile-modal-backdrop" role="presentation" onClick={() => setSelectedMember(null)}><article className="profile-modal" role="dialog" aria-modal="true" aria-label={`${selectedMember.name} profile`} onClick={(event) => event.stopPropagation()}><button type="button" className="profile-modal-close" onClick={() => setSelectedMember(null)} aria-label="Close profile">×</button>{selectedMember.photo ? <img src={selectedMember.photo} alt={selectedMember.name} className="profile-avatar profile-avatar-photo" /> : <div className="profile-avatar">{selectedMember.initials}</div>}<p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F5821F]">{selectedMember.role}</p><h2 className="font-display mt-2 text-[28px] font-bold text-[#0A2540]">{selectedMember.name}</h2><p className="mt-4 text-[14px] leading-relaxed text-[#5B7688]">{selectedMember.bio}</p><div className="mt-5 flex flex-wrap gap-2">{selectedMember.skills.map((skill) => <span key={skill} className="profile-skill">{skill}</span>)}</div><div className="mt-6 flex items-center gap-3">{selectedMember.socials?.linkedin && <a href={selectedMember.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${selectedMember.name} LinkedIn`} className="profile-social-link"><SocialIcon type="linkedin" /></a>}{selectedMember.socials?.facebook && <a href={selectedMember.socials.facebook} target="_blank" rel="noreferrer" aria-label={`${selectedMember.name} Facebook`} className="profile-social-link" ><SocialIcon type="facebook" /></a>}</div></article></div>}</>;
}

export function CyberEventShowcase() {
  return <section className="mt-12 border-t border-[#DCE8ED] pt-10"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#00B5E2]">Cyber Unit archive</p><h2 className="font-display mt-2 text-[27px] font-bold text-[#0A2540]">Three ways to learn security.</h2></div><span className="text-[13px] font-semibold text-[#5B7688]">CTF · Congress · Bootcamp</span></div><div className="mt-7 grid gap-5 md:grid-cols-3">{CYBER_EVENTS.map((event) => <article key={event.title} className="rounded-lg border border-[#DCE8ED] bg-white p-4 shadow-[0_12px_30px_rgba(10,37,64,0.06)] transition-transform hover:-translate-y-1"><EventImage event={event} /><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00629B]">{event.category}</p><h3 className="font-display mt-2 text-[19px] font-bold text-[#0A2540]">{event.title}</h3><p className="mt-2 text-[13px] leading-relaxed text-[#5B7688]">{event.description}</p></article>)}</div></section>;
}

const VIDEO_GALLERY_ITEMS = [
  { title: "CS Talk #1", category: "Former chairs", description: "Leadership moments and memories from the chapter's former chairs.", video: "https://www.youtube.com/embed/qqpXVW3lMaY" },
  { title: "CS Talk #2", category: "Former chairs", description: "A chapter story told through former leadership experiences.", video: "https://www.youtube.com/embed/SlaTcob_4S0" },
  { title: "CS Talk #3", category: "Former chairs", description: "Former chair reflections and chapter impact moments.", video: "https://www.youtube.com/embed/M_UodcEEOBs" },
  { title: "CS Talk #4", category: "Engineer", description: "Insights from an engineer shaping the chapter's vision.", video: "https://www.youtube.com/embed/d_wMlf_hc8g" },
  { title: "CS Talk #5", category: "Engineer", description: "Technical guidance and inspiration from an experienced engineer.", video: "https://www.youtube.com/embed/QIuGTW7zvRg" },
  { title: "CS Talk #6", category: "Engineer", description: "Tech discussions and professional experience from an engineer.", video: "https://www.youtube.com/embed/6SAWyGa0QMM" },
  { title: "CS Talk #7", category: "Professor", description: "A closer look at one professor's academic mentorship within the IEEE community.", video: "https://www.youtube.com/embed/iK6qY6AzCck" },
  { title: "CS Talk #8", category: "Professor", description: "One professor's perspective and chapter highlights from the IEEE community.", video: "https://www.youtube.com/embed/n7pJqCsgW7A" },
  { title: "CS Talk #9", category: "Former chairs", description: "A visual recap of former chair memories and chapter initiatives.", video: "https://www.youtube.com/embed/N_8erVp4E8o" },
  { title: "CS Talk #10", category: "Former chairs", description: "Community energy, collaborations and former chair experiences.", video: "https://www.youtube.com/embed/7_VikQPJw-U" },
  { title: "CS Talk #11", category: "Former chairs", description: "Final highlights from the CS Talk series and former chair memories.", video: "https://www.youtube.com/embed/-eS0JC4dDPc" },
];

export function GalleryShowcase() {
  return (
    <>
      <div className="gallery-grid">
        {VIDEO_GALLERY_ITEMS.map((item) => (
          <article key={item.title} className="gallery-card">
            <div className="overflow-hidden rounded-lg border border-[#E2EDF1] bg-[#0A2540]">
              <iframe
                src={item.video}
                title={item.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-64 w-full border-0"
              />
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5821F]">{item.category}</p>
              <h2 className="font-display mt-2 text-[21px] font-bold text-[#0A2540]">{item.title}</h2>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-[#5B7688]">{item.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
