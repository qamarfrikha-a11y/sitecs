import React, { useCallback, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./src/index.css";
import { NAV_LINKS, SOCIAL_LINKS, UNITS, STATS, PROGRAMS, ACHIEVEMENTS, EVENTS, TEAM, CHAPTER_CONTACT } from "./src/data/siteData";
import { CircuitMark, CircuitField, ChapterHeroVisual } from "./src/components/CircuitVisuals";
import SiteNavigation from "./src/components/SiteNavigation";
import LoadingScreen from "./src/components/LoadingScreen";
import { EventDirectory, EventImage, BoardShowcase, CyberEventShowcase, GalleryShowcase } from "./src/components/EventComponents";
import { MembershipForm, ChairExperiences, ChapterImpact, ChapterFaq, ScrollToTop } from "./src/components/CommunityComponents";
import { githubImage } from "./src/data/imageUrls";

function SocialIcon({ label }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M5.2 8.4H2.8V21h2.4V8.4ZM4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8 8.4h2.3v1.7h.1c.3-.6 1.2-2 3.6-2 3 0 3.5 2 3.5 4.6V21h-2.4v-7.3c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V21H8V8.4Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.005 10.125 11.93v-8.437H7.078v-3.493h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.973H15.83c-1.491 0-1.956.93-1.956 1.885v2.252h3.328l-.532 3.493h-2.796v8.437C19.612 23.078 24 18.092 24 12.073Z" />
    </svg>
  );
}

function AnimatedStat({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = Number.parseInt(value, 10);

  useEffect(() => {
    let frameId;
    const startTime = window.performance.now();
    const duration = 1100;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(numericValue * easedProgress));
      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [numericValue]);

  return <>{displayValue}{value.includes("+") ? "+" : ""}</>;
}

/* data moved to src/data/siteData.js */
/*
  {
    date: "TBA",
    title: "HelloWorld CP Competition",
    organizer: "HelloWorld",
    category: "Competitive programming",
    where: "ENIS · Sfax",
    description: "A timed problem-solving challenge for programmers who enjoy algorithms, teamwork, and a little pressure.",
    images: ["/images/events/hw1.png", "/images/events/hw2.png", "/images/events/hw3.png", "/images/events/hw4.png"],
    state: "upcoming",
  },
  {
    date: "TBA",
    title: "SEIS Summit",
    organizer: "SEIS",
    category: "Summit",
    where: "ENIS · Sfax",
    description: "A meeting point for students, speakers, and builders around engineering, innovation, and the future of technology.",
    images: ["/images/events/seis1.jpg", "/images/events/seis2.jpg", "/images/events/seis3.jpg", "/images/events/seis4.jpg"],
    state: "upcoming",
  },
  {
    date: "TBA",
    title: "TechX Hackathon",
    organizer: "TechX",
    category: "Hackathon",
    where: "ENIS · Sfax",
    description: "Teams turn an open-ended idea into a working prototype during an intense build sprint supported by mentors.",
    images: ["/images/events/techx1.png", "/images/events/techx2.png", "/images/events/techx3.png", "/images/events/techx4.png", "/images/events/techx5.png"],
    state: "upcoming",
  },
  {
    date: "TBA",
    title: "Xtreme CP Competition",
    organizer: "Computer Society",
    category: "Competitive programming",
    where: "ENIS · Sfax",
    description: "An advanced contest for students who want to test their speed, accuracy, and algorithmic thinking.",
    images: ["/images/events/xtreem.png", "/images/events/xtreem2.png", "/images/events/xtreem3.png"],
    state: "upcoming",
  },
  {
    date: "TBA",
    title: "Web Development Workshop",
    organizer: "Computer Society",
    category: "Development",
    where: "ENIS · Sfax",
    description: "A practical session on building polished web experiences, from the first component to a responsive interface ready to share.",
    images: ["/images/events/web.jpeg", "/images/events/web2.jpeg", "/images/events/web3.jpeg", "/images/events/web4.jpeg"],
    state: "upcoming",
  },
  {
    date: "TBA",
    title: "AI × NVIDIA Tech Session",
    organizer: "Computer Society",
    category: "AI & NVIDIA",
    where: "ENIS · Sfax",
    description: "Discover the foundations of modern AI and the tools that turn machine learning ideas into useful prototypes.",
    images: ["/images/events/nvidia.png", "/images/events/nvidia2.jpg", "/images/events/nvidia7.png"],
    state: "upcoming",
  },
];

const CYBER_EVENTS = [
  {
    title: "CTF Zero Trace",
    category: "Capture the Flag",
    description: "A hands-on security challenge where teams investigate clues, exploit weaknesses responsibly, and learn to think like defenders.",
    images: ["/images/images/cyber.png", "/images/images/cyber2.png", "/images/images/cyber3.png", "/images/images/cyber4.png", "/images/images/cyber5.png", "/images/images/cyber6.png", "/images/images/cyber7.png"],
  },
  {
    title: "iProtect Congress",
    category: "Cybersecurity congress",
    description: "A meeting around digital protection, privacy, and the people building safer systems for tomorrow.",
    images: ["/images/images/protect.png", "/images/images/protect2.png", "/images/images/protect3.png", "/images/images/protect4.png", "/images/images/protect5.png", "/images/images/protect6.png", "/images/images/protect7.png", "/images/images/protect8.png", "/images/images/protect9.png"],
  },
  {
    title: "TechCamp Bootcamp",
    category: "Security bootcamp",
    description: "An intensive learning track that turns curiosity into practical security habits, tools, and responsible testing skills.",
    images: ["/images/images/tech.png", "/images/images/tech2.png", "/images/images/tech3.png", "/images/images/tech4.png", "/images/images/tech5.png", "/images/images/tech6.png"],
  },
];

const TEAM = [
  { name: "Yassine Hammami", role: "Chapter Chair", initials: "YH" },
  { name: "Nour Ben Salah", role: "Vice Chair", initials: "NB" },
  { name: "Aymen Trabelsi", role: "Technical Lead", initials: "AT" },
  { name: "Rym Guesmi", role: "Events Lead", initials: "RG" },
  { name: "Firas Cherni", role: "Sponsorship Lead", initials: "FC" },
  { name: "Salma Jendoubi", role: "Communications", initials: "SJ" },
];

const EXPERIENCES = [
  {
    quote: "Leading the chapter taught me that the best projects are built by people who make room for one another to learn, try, and improve.",
    name: "Former Chair 01",
    role: "Chapter Chair · 2024–2025",
    initials: "FC",
    photo: "",
  },
  {
    quote: "The chapter gave me the confidence to move from attending workshops to creating them. That shift changed the way I approach engineering.",
    name: "Former Chair 02",
    role: "Chapter Chair · 2023–2024",
    initials: "FC",
    photo: "",
  },
  {
    quote: "What stays with you is not one event, but the network of students and mentors you meet while building something together.",
    name: "Former Chair 03",
    role: "Chapter Chair · 2022–2023",
    initials: "FC",
    photo: "",
  },
  {
    quote: "Every committee leaves the chapter with something new: a stronger community, a better event, or a student who discovers what they can do.",
    name: "Former Chair 04",
    role: "Chapter Chair · 2021–2022",
    initials: "FC",
    photo: "",
  },
]; */

/*
function EventDirectory() {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const filters = ["All", "Competitive programming", "Summit", "Hackathon", "Development", "AI & NVIDIA"];
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

function EventImage({ event }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || event.images.length < 2) return undefined;
    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % event.images.length);
    }, 4200);
    return () => window.clearInterval(rotation);
  }, [event.images.length, isPaused]);

  return (
    <div className="event-image-frame" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <img key={event.images[activeImage]} src={event.images[activeImage]} alt={`${event.title} event highlight`} className="event-image" />
      <div className="event-image-dots" aria-hidden="true">
        {event.images.map((image, index) => (
          <span key={image} className={index === activeImage ? "event-image-dot event-image-dot-active" : "event-image-dot"} />
        ))}
      </div>
    </div>
  );
}

function BoardShowcase() {
  return (
    <div className="board-showcase">
      {TEAM.map((member, index) => (
        <article key={member.name} className={`board-member board-member-${index + 1}`}>
          <div className="board-member-orbit" aria-hidden="true" />
          <div className="board-avatar">{member.initials}</div>
          <div className="mt-4 text-[15px] font-bold text-[#0A2540]">{member.name}</div>
          <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#00629B]">{member.role}</div>
        </article>
      ))}
    </div>
  );
}

function CyberEventShowcase() {
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

function MembershipForm() {
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

function ChairExperiences() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const experience = EXPERIENCES[activeExperience];

  useEffect(() => {
    if (isPaused) return undefined;
    const rotation = window.setInterval(() => {
      setActiveExperience((current) => (current + 1) % EXPERIENCES.length);
    }, 6000);
    return () => window.clearInterval(rotation);
  }, [isPaused]);

  return (
    <div className="mt-12 border-t border-[#E2EDF1] pt-8 text-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5821F]">Previous experiences</p>
      <div className="mx-auto mt-6 max-w-3xl border-t-4 border-[#00629B] bg-white p-6 shadow-[0_10px_30px_rgba(10,37,64,0.05)] sm:p-8">
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#BFE3EC] bg-[#EAF6F8] text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#00629B]">
          {experience.photo ? <img src={experience.photo} alt={experience.name} className="h-full w-full object-cover" /> : <span>Photo<br />à ajouter</span>}
        </div>
        <blockquote className="mt-6">
          <p className="font-display text-[20px] font-semibold leading-relaxed text-[#0A2540]">“{experience.quote}”</p>
          <footer className="mt-5 text-[13px] text-[#5B7688]"><strong className="block text-[#00629B]">{experience.name}</strong>{experience.role}</footer>
        </blockquote>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" onClick={() => setActiveExperience((activeExperience - 1 + EXPERIENCES.length) % EXPERIENCES.length)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE8ED] text-[#00629B] hover:border-[#F5821F] hover:text-[#F5821F]" aria-label="Previous chair">←</button>
        {EXPERIENCES.map((item, index) => (
          <button key={item.name} type="button" onClick={() => setActiveExperience(index)} aria-label={`Show ${item.name} experience`} className={`h-2 rounded-full transition-all ${activeExperience === index ? "w-10 bg-[#F5821F]" : "w-2 bg-[#BFE3EC]"}`} />
        ))}
        <button type="button" onClick={() => setActiveExperience((activeExperience + 1) % EXPERIENCES.length)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE8ED] text-[#00629B] hover:border-[#F5821F] hover:text-[#F5821F]" aria-label="Next chair">→</button>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5821F] text-white shadow-[0_8px_20px_rgba(245,130,31,0.4)] transition-all duration-300 hover:bg-[#D96E12] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}

*/

function AboutMiniGallery() {
  const photos = [
    { src: "/images/events/boot1.png", label: "Bootcamp" },
    { src: "/images/events/techx5.png", label: "TechX event" },
    { src: "/images/events/nvidia2.jpg", label: "NVIDIA event" },
    { src: "/images/events/hw1.png", label: "HelloWorld event" },
  ];
  const [activePhoto, setActivePhoto] = useState(0);
  const sidePhotos = photos.filter((_, index) => index !== activePhoto);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 4500);
    return () => window.clearInterval(rotation);
  }, [photos.length]);

  return (
    <section className="about-full-gallery" aria-label="Chapter moments">
      <div className="about-full-gallery-grid">
        <figure className="about-full-gallery-main">
          <img src={githubImage(photos[activePhoto].src)} alt={photos[activePhoto].label} />
          <figcaption>{photos[activePhoto].label}</figcaption>
        </figure>
        <div className="about-full-gallery-side">
          {sidePhotos.map((photo) => {
            const photoIndex = photos.findIndex((item) => item.src === photo.src);
            return (
              <button key={photo.src} type="button" className="about-full-gallery-item" onClick={() => setActivePhoto(photoIndex)} aria-label={`Show ${photo.label}`}>
                <img src={githubImage(photo.src)} alt={photo.label} />
                <span>{photo.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DedicatedPage({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cyberActivities = [
    { title: "Security labs", body: "Practice with real tools and responsible testing scenarios." },
    { title: "Capture the Flag", body: "Solve challenges that sharpen your defensive and investigative skills." },
    { title: "Awareness sessions", body: "Build safer habits for the systems and data we use every day." },
  ];
  const titles = {
    about: "IEEE Computer Society Chapter ENIS Student Branch",
    programs: "Our achievements",
    units: "ENIS student units",
    cyber: "Cyber Unit",
    events: "Events",
    gallery: "Gallery",
    team: "The board",
    join: "Join the chapter",
  };

  return (
    <div className="min-h-screen bg-[#F6F9FB] text-[#0A2540] antialiased" style={{ fontFamily: "'Open Sans', ui-sans-serif, system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap');
        .font-display { font-family: 'Montserrat', ui-sans-serif, system-ui; }
      `}</style>
      <SiteNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={`mx-auto max-w-[1400px] px-6 ${page === "team" ? "pt-0 pb-16 md:pb-24" : "py-16 md:py-24"}`}>
        {page !== "team" && <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F5821F]">IEEE Computer Society</p>}
        {page !== "team" && <h1 className="font-display mt-3 text-[40px] font-extrabold leading-tight text-[#0A2540] md:text-[56px]">{titles[page] || "Page not found"}</h1>}
        <div className={page === "team" ? "mt-0" : "mt-12"}>
          {page === "about" && (
            <>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-display text-[28px] font-bold">Who We Are</h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[#3C5A73]">The IEEE Computer Society is renowned for promoting computer science and engineering. The Enis Student Branch Chapter, established on January 27, 2010, at the National School of Engineering of Sfax, focuses on providing its members with essential Information Technology knowledge to boost their careers and improve their skills. Through engaging programs and networking opportunities, the chapter empowers aspiring professionals to excel in the ever-evolving technology landscape.</p>
              </div>
              <div className="rounded-lg border border-[#E2EDF1] bg-white p-7">
                <div className="flex min-h-[220px] items-center justify-center">
                  <img src={githubImage("/images/logo/LOGO-02.png")} alt="IEEE ENIS Computer Society" className="w-full max-w-[330px] object-contain" />
                </div>
              </div>
            </div>
            <ChapterImpact />
            <AboutMiniGallery />
            <ChairExperiences />
            <ChapterFaq />
            </>
          )}
          {page === "programs" && (
            <div>
              <p className="max-w-2xl text-[16px] leading-relaxed text-[#3C5A73]">A record of the moments that made our chapter proud, from national awards to international recognition.</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {ACHIEVEMENTS.map((achievement) => (
                  <article key={achievement.title} className="overflow-hidden rounded-lg border border-[#E2EDF1] bg-white shadow-[0_10px_30px_rgba(10,37,64,0.05)]">
                    <div className="aspect-[16/10] overflow-hidden bg-[#EAF6F8]">
                      <img src={githubImage(achievement.image)} alt={achievement.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                    </div>
                    <div className="p-7">
                      <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#F5821F]">{achievement.tag}</span>
                      <h2 className="font-display mt-3 text-[21px] font-bold text-[#0A2540]">{achievement.title}</h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#3C5A73]">{achievement.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
          {page === "units" && (
            <div>
              <p className="max-w-2xl text-[16px] leading-relaxed text-[#3C5A73]">Different paths, one student branch. Discover the communities that make ENIS a place to learn, build, and lead.</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {UNITS.map((unit) => (
                  <article key={unit.name} className="rounded-lg border border-[#E2EDF1] bg-white p-7 shadow-[0_10px_30px_rgba(10,37,64,0.04)]">
                    <div className="flex items-start justify-between gap-4">
                      <div><span className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: unit.accent }}>{unit.kind}</span><h2 className="font-display mt-2 text-[25px] font-bold">{unit.name}</h2></div>
                      <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: unit.accent }} />
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#3C5A73]">{unit.description}</p>
                    <ul className="mt-5 space-y-2 text-[13px] text-[#5B7688]">{unit.activities.map((activity) => <li key={activity}>+ {activity}</li>)}</ul>
                    <a href={unit.path || unit.website} {...(unit.path ? {} : { target: "_blank", rel: "noreferrer" })} className="mt-7 inline-flex text-[14px] font-bold text-[#00629B] hover:text-[#F5821F]">{unit.path ? `Explore ${unit.name}` : `Visit ${unit.name} website`} <span className="ml-2" aria-hidden="true">{unit.path ? "→" : "↗"}</span></a>
                  </article>
                ))}
              </div>
            </div>
          )}
          {page === "cyber" && (
            <div>
              <div className="grid gap-10 md:grid-cols-[1fr_0.75fr]">
                <div>
                  <p className="max-w-2xl text-[17px] leading-relaxed text-[#3C5A73]">The Cyber Unit is the cybersecurity community of the IEEE Computer Society chapter. It gives students a practical and responsible way to understand how digital systems are protected.</p>
                  <div className="cyber-activity-grid mt-8">
                    {cyberActivities.map((activity, index) => (
                      <article key={activity.title} className="cyber-activity-card">
                        <span className="cyber-activity-number">0{index + 1}</span>
                        <h3>{activity.title}</h3>
                        <p>{activity.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-[#0A2540] p-8 text-white">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#00B5E2]">Part of Computer Society</p>
                  <h2 className="font-display mt-3 text-[26px] font-bold">Learn security by building responsibly.</h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/75">Join the technical sessions, meet students interested in security, and build a stronger understanding of the systems around you.</p>
                  <a href={UNITS[0].website} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-md bg-[#F5821F] px-5 py-3 text-[13px] font-bold hover:bg-[#D96E12]">Visit Cyber Unit website ↗</a>
                </div>
              </div>
              <CyberEventShowcase />
            </div>
          )}
          {page === "events" && (
            <div>
              <p className="max-w-2xl text-[16px] leading-relaxed text-[#3C5A73]">Competitions, summits, and build sprints created by the student communities at ENIS.</p>
              <div className="mt-10"><EventDirectory /></div>
            </div>
          )}
          {page === "gallery" && (
            <div>
              <p className="max-w-2xl text-[16px] leading-relaxed text-[#3C5A73]">Conversations and testimonials from former chairs, professors, and engineers who have shaped the IEEE Computer Society ENIS community.</p>
              <div className="mt-10"><GalleryShowcase /></div>
            </div>
          )}
          {page === "team" && (
            <div className="space-y-8">
              <section className="cs-who-we-are">
                <div className="cs-who-copy">
                  <p className="cs-section-kicker">IEEE CS ENIS SBC TEAM</p>
                  <h2 className="font-display text-[28px] font-bold md:text-[34px]">Different skills. One team. A bigger future for ENIS.</h2>
                  <p>IEEE Computer Society ENIS brings students together around software, systems, AI, cybersecurity, research, and the technologies shaping tomorrow.</p>
                  <p>Our workshops, conferences, competitions, team activities, and collaborations help members build skills, discover opportunities, and grow into future leaders.</p>
                </div>
              </section>
              <BoardShowcase />
            </div>
          )}
          {page === "join" && (
            <div className="max-w-2xl rounded-lg bg-[#0A2540] p-8 text-white md:p-12">
              <h2 className="font-display text-[30px] font-bold">Membership is open year-round.</h2>
              <p className="mt-4 leading-relaxed text-white/80">Join our workshops, build nights, speaker events, and student community in Sfax.</p>
              <MembershipForm />
            </div>
          )}
        </div>
      </main>
      <footer className="border-t-4 border-[#F5821F] bg-[#0A2540] px-6 py-10 text-[13px] text-white/75">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-[28px] font-bold text-white">Get In Touch</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#F5821F]">●</span>
                <span className="leading-relaxed text-white/80">Route Soukra 3 B.P. 1173. Sfax. 3038, Tunisia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#F5821F]">☎</span>
                <span className="text-white/80">26 166 408</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#F5821F]">✉</span>
                <a href={`mailto:${CHAPTER_CONTACT.email}`} className="text-white/80 hover:text-[#F5821F]">{CHAPTER_CONTACT.email}</a>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-[28px] font-bold text-white">Links</h3>
            <nav className="mt-6 space-y-3 text-white/80" aria-label="Quick Links navigation">
              <a href="/about" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Home</span></a>
              <a href="/team" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Team</span></a>
              <a href="/events" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Events</span></a>
              <a href="/cyber" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Cyber Unit</span></a>
              <a href="/gallery" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Gallery</span></a>
              <a href="/programs" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Achievements</span></a>
            </nav>
          </div>

          <div>
            <h3 className="text-[28px] font-bold text-white">Follow Us</h3>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg font-bold text-white transition-colors hover:border-[#F5821F] hover:text-[#F5821F]" aria-label={social.label}>
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function IEEECSChapterSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const completeLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    const revealElements = document.querySelectorAll("main section, main footer");
    revealElements.forEach((element) => {
      element.classList.add("scroll-reveal");
      revealObserver.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const currentPage = window.location.pathname.replace(/^\//, "").replace(/\/$/, "") || "about";
  if (NAV_LINKS.some((link) => link.id === currentPage) || currentPage === "cyber" || currentPage === "units" || currentPage === "join") {
    return (
      <>
        <DedicatedPage page={currentPage === "units" ? "cyber" : currentPage} />
        <AnimatePresence>{isLoading && <LoadingScreen onComplete={completeLoading} />}</AnimatePresence>
      </>
    );
  }

  if (!currentPage) {
    return (
      <>
        <div className="min-h-screen bg-[#F6F9FB] text-[#0A2540] antialiased" style={{ fontFamily: "'Open Sans', ui-sans-serif, system-ui" }}>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap');
            .font-display { font-family: 'Montserrat', ui-sans-serif, system-ui; }
          `}</style>
          <SiteNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main>
            <section className="relative flex min-h-[calc(100vh-5.25rem)] items-center overflow-hidden bg-[#EAF6F8]">
              <CircuitField />
              <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-14 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:py-24">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#00629B]"><span className="h-2 w-2 rounded-full bg-[#F5821F]" /> Sfax · Tunisia</div>
                  <h1 className="font-display mt-5 text-[42px] font-extrabold leading-[1.04] text-[#0A2540] md:text-[62px]">Engineering the future, one project at a time.</h1>
                  <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#3C5A73]">The IEEE Computer Society chapter turns coursework into practical skills through workshops, talks, research circles, and build nights for students in Sfax.</p>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a href="/cyber" className="rounded-md bg-[#F5821F] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#D96E12]">Explore Cyber Unit</a>
                    <a href="/events" className="text-[14px] font-bold text-[#0A2540] transition-colors hover:text-[#00629B]">View events <span aria-hidden="true">→</span></a>
                  </div>
                </div>
                <ChapterHeroVisual />
              </div>
            </section>
          </main>
          <footer className="bg-[#0A2540] px-6 py-8 text-center text-[13px] text-white/70">IEEE Computer Society Student Chapter · Sfax, Tunisia</footer>
        </div>
        <AnimatePresence>{isLoading && <LoadingScreen onComplete={completeLoading} />}</AnimatePresence>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#F6F9FB] text-[#0A2540] antialiased" style={{ fontFamily: "'Open Sans', ui-sans-serif, system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap');
        .font-display { font-family: 'Montserrat', ui-sans-serif, system-ui; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <header
        className={`sticky top-0 z-40 transition-all ${
          scrolled ? "bg-white/90 backdrop-blur border-b border-[#E2EDF1] shadow-[0_1px_0_rgba(10,37,64,0.04)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={githubImage("/images/logo/LOGO-02.png")} alt="IEEE Computer Society logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-[15px] font-bold tracking-tight text-[#0A2540]">
              IEEE Computer Society <span className="text-[#00629B]">· Student Chapter</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`/${l.id}`}
                className="text-[14px] font-semibold text-[#3C5A73] transition-colors hover:text-[#00629B]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/join"
              className="rounded-md bg-[#F5821F] px-4 py-2 text-[14px] font-bold text-white transition-colors hover:bg-[#D96E12]"
            >
              Join the chapter
            </a>
          </nav>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#DCE8ED] md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-[2px] w-4 bg-[#0A2540] transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[5px] h-[2px] w-4 bg-[#0A2540] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[10px] h-[2px] w-4 bg-[#0A2540] transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#E2EDF1] bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a key={l.id} href={`/${l.id}`} onClick={() => setMenuOpen(false)} className="text-[15px] font-semibold text-[#3C5A73]">
                  {l.label}
                </a>
              ))}
              <a
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-[#F5821F] px-4 py-2 text-center text-[14px] font-bold text-white"
              >
                Join the chapter
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="hero-glow relative overflow-hidden bg-[#EAF6F8]">
        <div className="floating-orb floating-orb-one" aria-hidden="true" />
        <div className="floating-orb floating-orb-two" aria-hidden="true" />
        <div className="floating-orb floating-orb-three" aria-hidden="true" />
        <CircuitField />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1fr_0.85fr] md:pb-24 md:pt-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#00629B]">
              <span className="pulse-dot" /> Sfax · Tunisia
            </div>
            <h1 className="font-display mt-5 text-[42px] font-extrabold leading-[1.04] text-[#0A2540] md:text-[62px]">
              Engineering the future, one project at a time.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#3C5A73]">
              The IEEE Computer Society chapter turns coursework into practical skills through
              workshops, talks, research circles, and build nights for students in Sfax.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="/join" className="rounded-md bg-[#F5821F] px-6 py-3 text-[14px] font-bold text-white shadow-[0_16px_30px_rgba(245,130,31,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#D96E12]">
                Become a member
              </a>
              <a href="/about" className="text-[14px] font-bold text-[#0A2540] transition-colors hover:text-[#00629B]">
                Discover the chapter <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <ChapterHeroVisual />
        </div>

        <div className="border-y border-[#E2EDF1] bg-white/80">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className={`stat-pod rounded-xl p-4 ${s.label === "student members" || s.label === "industry partners" ? "border-l-4 border-[#F5821F]" : "border-l-4 border-[#00629B]"}`}>
                <div className={`font-display text-[28px] font-extrabold md:text-[32px] ${s.label === "student members" || s.label === "industry partners" ? "text-[#F5821F]" : "text-[#00629B]"}`}><AnimatedStat value={s.value} /></div>
                <div className="mt-1 text-[13px] leading-snug text-[#5B7688]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1400px] border-l-4 border-[#00629B] bg-[#F6F9FB] px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5821F]">01 · About us</p>
            <h2 className="font-display text-[28px] font-bold text-[#0A2540] md:text-[32px]">
              A chapter built around one idea: theory is only real once you've built something with it.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#3C5A73]">
              We're the local branch of the world's largest professional community for computing —
              open to any student curious about software, systems, or research, regardless of major
              or year. Membership gets you into every workshop, first access to speaker events, and
              a standing invitation to whatever the board is currently prototyping.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3C5A73]">
              We keep sessions small and hands-on. If a workshop can't end with something running on
              your machine, we don't run it.
            </p>
          </div>

          <div className="rounded-lg border border-[#E2EDF1] bg-white p-7">
            <h3 className="font-display text-[16px] font-bold text-[#0A2540]">What membership includes</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {[
                "Priority seats at workshops and the annual hackathon",
                "IEEE Xplore digital library access",
                "A reference letter path for standout contributors",
                "Direct line to our industry partners for internships",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-snug text-[#3C5A73]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B5E2]" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/cyber" className="mt-7 inline-flex text-[14px] font-bold text-[#00629B] hover:text-[#F5821F]">Explore our Cyber Unit <span className="ml-2" aria-hidden="true">→</span></a>
          </div>
        </div>
        <AboutMiniGallery />
        <ChairExperiences />
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="border-t border-[#E2EDF1] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-lg">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5821F]">02 · Learn by doing</p>
            <h2 className="font-display text-[28px] font-bold text-[#0A2540] md:text-[32px]">
              Four ways to spend an evening well.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3C5A73]">
              Every program runs on its own rhythm, so you can drop in around exams or go deep for a
              whole semester.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {PROGRAMS.map((p, index) => (
              <div key={p.title} className={`program-card border-t-4 rounded-xl p-8 ${index % 2 === 0 ? "border-[#00629B] bg-[#EAF6F8]" : "border-[#F5821F] bg-[#FFF7EF]"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[18px] font-bold text-[#0A2540]">{p.title}</h3>
                  <span className="rounded-full bg-[#EAF6F8] px-3 py-1 text-[12px] font-semibold text-[#009CA6]">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#3C5A73]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNITS */}
      <section id="units" className="mx-auto max-w-[1400px] bg-[#F6F9FB] px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5821F]">03 · One branch, many paths</p>
            <h2 className="font-display mt-2 text-[28px] font-bold text-[#0A2540] md:text-[32px]">Meet our Cyber Unit.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3C5A73]">Explore the communities that connect technical curiosity with real projects, new friendships, and the wider IEEE network.</p>
          </div>
          <a href="/cyber" className="text-[14px] font-bold text-[#00629B] hover:text-[#F5821F]">Explore Cyber Unit <span aria-hidden="true">→</span></a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {UNITS.map((unit) => (
            <article key={unit.name} className="unit-card group border-t-4 rounded-xl bg-white p-6 shadow-[0_10px_30px_rgba(10,37,64,0.06)]" style={{ borderColor: unit.accent }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: unit.accent }}>{unit.kind}</p>
              <h3 className="font-display mt-3 text-[21px] font-bold text-[#0A2540]">{unit.name}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5B7688]">{unit.description}</p>
              <a href={unit.path || unit.website} {...(unit.path ? {} : { target: "_blank", rel: "noreferrer" })} className="mt-6 inline-flex text-[13px] font-bold text-[#00629B] group-hover:text-[#F5821F]">{unit.path ? "Explore unit" : "Explore website"} <span className="ml-2" aria-hidden="true">{unit.path ? "→" : "↗"}</span></a>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="mx-auto max-w-[1400px] bg-[#EAF6F8] px-6 py-20 md:py-28">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5821F]">04 · On the calendar</p>
        <h2 className="font-display text-[28px] font-bold text-[#0A2540] md:text-[32px]">Events</h2>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#3C5A73]">
          Competitions, summits, and hackathons that bring the ENIS community together.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="event-card rounded-lg border border-[#E2EDF1] bg-white p-6"
            >
              <EventImage event={e} />
              <div className="flex items-start justify-between gap-3"><span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5821F]">{e.category}</span><span className="rounded-full bg-[#FFF1E7] px-2.5 py-1 text-[11px] font-bold text-[#B65300]">{e.date}</span></div>
              <div className="mt-4">
                <div className="font-display text-[18px] font-bold text-[#0A2540]">{e.title}</div>
                <div className="mt-2 text-[13px] leading-relaxed text-[#5B7688]">{e.description}</div>
              </div>
              <div className="mt-5 flex justify-between border-t border-[#E2EDF1] pt-4 text-[12px] text-[#5B7688]"><span>{e.organizer}</span><span>{e.where}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-[#FFF7EF] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="rounded-lg border border-[#E2EDF1] bg-white p-7 shadow-[0_10px_30px_rgba(10,37,64,0.04)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5821F]">About us</p>
              <h2 className="font-display mt-3 text-[28px] font-bold text-[#0A2540]">The people building the chapter.</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3C5A73]">Our board brings together students who care about workshops, events, and real opportunities for the community. We coordinate learning experiences, partnerships, and student projects around a single goal: helping more people build useful skills.</p>
            </div>
            <div>
            <ChapterImpact />
              <h2 className="font-display mt-2 text-[28px] font-bold text-[#0A2540] md:text-[32px]">The board</h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#3C5A73]">
              </p>
            </div>
          </div>

          <div className="mt-12"><BoardShowcase /></div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="relative overflow-hidden" style={{ background: "linear-gradient(120deg, #0A2540, #00629B 65%, #009CA6)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-[28px] font-bold text-white md:text-[34px]">
              Membership is open year-round.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Fill out the form, and you'll be on the mailing list before the next event. Fees go
              straight back into workshops, hardware, and hackathon prizes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:cs-chapter@ieee.tn"
                className="rounded-md bg-white px-6 py-3 text-[14px] font-bold text-[#0A2540] transition-opacity hover:opacity-90"
              >
                Request the membership form
              </a>
              <a
                href="#about"
                className="rounded-md border border-white/40 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:border-white"
              >
                Read more about the chapter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2540] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-[1400px] gap-6 border-t border-white/20 pt-8 md:grid-cols-[1.2fr_1fr_0.7fr]">
          <div>
            <h3 className="text-[18px] font-bold text-white">Get In Touch</h3>
            <div className="mt-4 space-y-2 text-[13px] text-white/75">
              <div className="flex items-start gap-2">
                <span className="mt-1 text-[#F5821F]">•</span>
                <span>Route Soukra 3 B.P. 1173. Sfax. 3038, Tunisia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F5821F]">☎</span>
                <span>26 166 408</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F5821F]">✉</span>
                <a href={`mailto:${CHAPTER_CONTACT.email}`} className="hover:text-[#F5821F]">{CHAPTER_CONTACT.email}</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-bold text-white">Quick Links</h3>
            <nav className="mt-4 grid gap-2 text-[13px] text-white/75" aria-label="Navigation">
              <a href="/about" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>About</span></a>
              <a href="/programs" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Achievements</span></a>
              <a href="/events" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Events</span></a>
              <a href="/cyber" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Cyber Unit</span></a>
              <a href="/gallery" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Gallery</span></a>
              <a href="/team" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Team</span></a>
              <a href="/join" className="flex items-center gap-2 hover:text-[#F5821F]"><span>›</span><span>Join the chapter</span></a>
            </nav>
          </div>

          <div>
            <h3 className="text-[18px] font-bold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[14px] font-bold text-white transition-colors hover:border-[#F5821F] hover:text-[#F5821F]" aria-label={social.label}>
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-7 max-w-[1400px] text-[11px] text-white/45">
          © {new Date().getFullYear()} IEEE Computer Society Student Branch Chapter. Not an official IEEE web property.
        </p>
      </footer>

      <ScrollToTop />
      </div>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={completeLoading} />}</AnimatePresence>
    </>
  );
}
