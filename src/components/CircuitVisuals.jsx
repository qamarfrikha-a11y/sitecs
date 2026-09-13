import { githubImage } from "../data/imageUrls";

export function CircuitMark({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="#00B5E2" /><circle cx="32" cy="8" r="3" fill="#009CA6" /><circle cx="8" cy="32" r="3" fill="#009CA6" /><circle cx="32" cy="32" r="3" fill="#F5821F" /><circle cx="20" cy="20" r="3.5" fill="#0A2540" />
      <path d="M8 11V20H17" stroke="#00B5E2" strokeWidth="1.6" /><path d="M32 11V20H23" stroke="#009CA6" strokeWidth="1.6" /><path d="M8 29V20" stroke="#009CA6" strokeWidth="1.6" /><path d="M32 29V20" stroke="#F5821F" strokeWidth="1.6" />
    </svg>
  );
}

export function CircuitField() {
  return (
    <svg viewBox="0 0 900 620" className="absolute right-[-60px] top-0 h-full w-[64%] opacity-[0.55]" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <g stroke="#BFE3EC" strokeWidth="1.2" fill="none"><path d="M60 40 H340 V180 H620" /><path d="M120 40 V220 H480 V420" /><path d="M780 60 V260 H520" /><path d="M840 140 H600 V340 H340 V520" /><path d="M200 320 H500 V560" /><path d="M700 400 V560 H420" /><path d="M60 260 H240 V460" /></g>
      <g fill="#00B5E2"><circle cx="60" cy="40" r="4" /><circle cx="340" cy="40" r="4" /><circle cx="120" cy="40" r="4" /><circle cx="780" cy="60" r="4" /></g>
      <g fill="#009CA6"><circle cx="340" cy="180" r="4" /><circle cx="480" cy="220" r="4" /><circle cx="600" cy="340" r="4" /><circle cx="700" cy="400" r="4" /></g>
      <g fill="#0A2540"><circle cx="620" cy="180" r="5" /><circle cx="480" cy="420" r="5" /><circle cx="340" cy="520" r="5" /><circle cx="420" cy="560" r="5" /></g>
    </svg>
  );
}

export function ChapterHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-[14px] border-[#F5821F]/20" />
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0A2540] p-7 text-white shadow-[0_24px_60px_rgba(10,37,64,0.18)] md:p-9">
        <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full border border-[#00B5E2]/30" /><div className="absolute bottom-[-90px] left-[-50px] h-56 w-56 rounded-full border border-[#F5821F]/30" />
        <div className="relative"><div className="flex items-center justify-between border-b border-white/15 pb-6"><img src={githubImage("/images/logo/LOGO-02.png")} alt="IEEE Computer Society logo" className="h-12 w-12 object-contain" /><span className="rounded-full bg-[#F5821F] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">Sfax · Tunisia</span></div>
          <p className="mt-12 text-[12px] font-bold uppercase tracking-[0.2em] text-[#00B5E2]">IEEE Computer Society</p><h2 className="font-display mt-3 max-w-xs text-[32px] font-extrabold leading-tight md:text-[38px]">Build what comes next.</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 text-[12px] text-white/65"><div><strong className="block font-display text-[22px] text-white">340+</strong>student members</div><div><strong className="block font-display text-[22px] text-white">60</strong>sessions delivered</div></div>
        </div>
      </div><div className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full bg-[#F5821F] shadow-[0_10px_24px_rgba(245,130,31,0.35)]" />
    </div>
  );
}
