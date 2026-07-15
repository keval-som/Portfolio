"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="A brief introduction.">
      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        {/* Bio */}
        <div className="md:col-span-3 space-y-5 text-[color:var(--muted)] leading-relaxed text-[15px]">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p>
                {p.includes("Lentra") ? (
                  <SplitWithLink
                    text={p}
                    word="Lentra"
                    href="https://www.lentra.ai/"
                  />
                ) : (
                  p
                )}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Service status card — the engineer, as a unit file */}
        <Reveal delay={0.12} className="md:col-span-2">
          <ServiceCard />
        </Reveal>
      </div>
    </Section>
  );
}

function SplitWithLink({ text, word, href }) {
  const [before, after] = text.split(word);
  return (
    <>
      {before}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--accent)] underline-anim"
      >
        {word}
      </a>
      {after}
    </>
  );
}

function Line({ label, children }) {
  return (
    <div className="flex gap-2">
      <span className="text-[color:var(--muted-2)] w-[72px] text-right shrink-0">{label}:</span>
      <span className="text-[color:var(--muted)]">{children}</span>
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="relative group">
      <div className="absolute -inset-2 rounded-2xl bg-[color:rgba(var(--accent-rgb),0.14)] opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
      <div className="relative panel overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[color:var(--border)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--danger)] opacity-70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] opacity-70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--success)] opacity-70" />
          <span className="mono text-[10px] text-[color:var(--muted-2)] ml-2">
            keval@jersey-city:~
          </span>
        </div>

        {/* body */}
        <div className="p-4 md:p-5 mono text-[11px] md:text-[11.5px] leading-[1.9]">
          <div>
            <span className="text-[color:var(--accent)]">$</span>{" "}
            <span className="text-[color:var(--fg)]">systemctl status keval</span>
          </div>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="dot-live !w-2 !h-2" aria-hidden="true" />
            <span className="text-[color:var(--fg-strong)]">keval.service</span>
            <span className="text-[color:var(--muted-2)]">— software engineer</span>
          </div>

          <div className="mt-1 space-y-0.5">
            <Line label="Active">
              <span className="text-[color:var(--success)]">active (open to work)</span>
            </Line>
            <Line label="Loaded">jersey-city.nj · remote-ok</Line>
            <Line label="Docs">m.s. cs — stevens institute</Line>
            <Line label="Uptime">1.5y fintech production</Line>
          </div>

          <div className="mt-2 space-y-0.5">
            <div className="flex gap-2">
              <span className="text-[color:var(--muted-2)] w-[72px] text-right shrink-0">
                CGroup:
              </span>
              <span className="text-[color:var(--muted)]">/keval.service</span>
            </div>
            <div className="pl-[88px] text-[color:var(--muted)]">
              ├─ backend · <span className="text-[color:var(--accent)]">java · spring</span>
            </div>
            <div className="pl-[88px] text-[color:var(--muted)]">
              ├─ cloud · <span className="text-[color:var(--accent)]">aws · docker</span>
            </div>
            <div className="pl-[88px] text-[color:var(--muted)]">
              └─ ai · <span className="text-[color:var(--accent)]">langgraph · rag</span>
            </div>
          </div>

          <div className="mt-2.5">
            <span className="text-[color:var(--accent)]">$</span>{" "}
            <span className="cursor-blink" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
