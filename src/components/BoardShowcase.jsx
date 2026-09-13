import React from "react";
import { TEAM } from "../data/team";

export default function BoardShowcase() {
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
