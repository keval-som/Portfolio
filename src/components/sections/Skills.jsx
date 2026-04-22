"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillGroups, activity } from "@/lib/data";
import {
  IconBrain,
  IconCloud,
  IconCode,
  IconDatabase,
  IconLayers,
  IconWrench,
} from "@/components/Icons";

const ICONS = {
  code: IconCode,
  layers: IconLayers,
  cloud: IconCloud,
  database: IconDatabase,
  wrench: IconWrench,
  brain: IconBrain,
};

// Map desktop 12-col spans → Tailwind classes (needs literals for JIT).
const COL_SPAN = {
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
};

function SkillTag({ label, primary }) {
  return (
    <span
      className={`pill ${
        primary
          ? "!border-[color:rgba(var(--accent-rgb),0.45)] !bg-[color:rgba(var(--accent-rgb),0.12)] !text-[color:var(--accent)]"
          : ""
      }`}
    >
      {label}
    </span>
  );
}

function SkillCard({ group, delay }) {
  const Icon = ICONS[group.icon] || IconCode;
  const span = COL_SPAN[group.size] || "md:col-span-6";
  return (
    <Reveal
      delay={delay}
      className={`panel panel-hover p-4 md:p-6 flex flex-col col-span-1 ${span}`}
    >
      <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
        <span className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-lg bg-[color:rgba(var(--accent-rgb),0.12)] text-[color:var(--accent)] shrink-0">
          <Icon width={15} height={15} />
        </span>
        <h4 className="mono text-[10.5px] md:text-[11px] text-[color:var(--muted)] uppercase tracking-[0.15em] md:tracking-[0.18em] truncate">
          {group.title}
        </h4>
        <span className="mono text-[10px] text-[color:var(--muted-2)] ml-auto shrink-0">
          {group.items.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {group.items.map((item) => (
          <SkillTag key={item.label} label={item.label} primary={item.primary} />
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      label="Toolkit"
      title="Skills & current activity."
      tagline="Categorized by layer. Highlighted tags are the tools I reach for most often."
    >
      {/* 2-col on mobile, 12-col bento on desktop. */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
        {skillGroups.map((g, i) => (
          <SkillCard key={g.key} group={g} delay={i * 0.05} />
        ))}
      </div>

      {/* Current Activity */}
      <Reveal delay={0.15} className="mt-6 panel p-6 md:p-7">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="dot-live" />
          <span className="mono text-[11px] text-[color:var(--accent)] uppercase tracking-[0.18em]">
            Currently building &amp; learning
          </span>
        </div>
        <ul className="divide-y divide-[color:var(--border)]">
          {activity.map((item, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <span className="mono text-[10.5px] text-[color:var(--accent)] uppercase tracking-[0.15em] min-w-[80px] mt-0.5">
                {item.type}
              </span>
              <span className="text-sm text-[color:var(--muted)] flex-1 leading-relaxed">
                {item.text}
              </span>
              <span className="mono text-[10.5px] text-[color:var(--muted-2)] whitespace-nowrap mt-0.5 sm:ml-auto">
                {item.time}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
