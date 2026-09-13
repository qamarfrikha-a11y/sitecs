import { NAV_LINKS } from "../data/siteData";
import { githubImage } from "../data/imageUrls";

export default function SiteNavigation({ menuOpen, setMenuOpen }) {
  const currentPage = window.location.pathname.replace(/^\//, "").replace(/\/$/, "") || "about";

  return (
    <header className="sticky top-0 z-40 bg-[#F5821F] shadow-[0_1px_0_rgba(10,37,64,0.12)] backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-0">
        <a href="/" className="flex items-center gap-3" aria-label="Go to About page">
          <span className="nav-logo-frame"><img src={githubImage("/images/logo/LOGO-02.png")} alt="IEEE Computer Society logo" className="nav-logo" /></span>
        </a>
        <nav className="hidden flex-none items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => <a key={link.id} href={`/${link.id}`} className={`text-[14px] font-semibold transition-colors ${currentPage === link.id ? "text-[#0A2540]" : "text-white hover:text-[#0A2540]"}`}>{link.label}</a>)}
          <a href="/join" className="rounded-md bg-[#0A2540] px-4 py-2 text-[14px] font-bold text-white transition-colors hover:bg-[#00629B]">Join the chapter</a>
        </nav>
        <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-md border border-white/60 md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          <span className="text-xl leading-none text-white">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
      {menuOpen && <div className="bg-[#F5821F] px-6 py-4 md:hidden"><div className="flex flex-col gap-4">{NAV_LINKS.map((link) => <a key={link.id} href={`/${link.id}`} onClick={() => setMenuOpen(false)} className={`text-[15px] font-semibold ${currentPage === link.id ? "text-[#0A2540]" : "text-white"}`}>{link.label}</a>)}<a href="/join" onClick={() => setMenuOpen(false)} className="rounded-md bg-[#0A2540] px-4 py-2 text-center text-[14px] font-bold text-white">Join the chapter</a></div></div>}
    </header>
  );
}
