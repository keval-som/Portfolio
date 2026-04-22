"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      label="Where I've Worked"
      title="Experience building production systems."
      tagline="Shipping real infrastructure — not just code on GitHub."
    >
      <ol className="relative ml-3 md:ml-4 pl-6 md:pl-8 border-l border-[color:var(--border)] space-y-12">
        {experiences.map((exp, idx) => (
          <Reveal key={`${exp.company}-${exp.period}`} delay={idx * 0.08} as="li" className="relative">
            {/* Dot */}
            <span
              className={`absolute -left-[29px] md:-left-[37px] top-1.5 h-3 w-3 rounded-full z-10 ring-4 ring-[color:var(--bg)] ${
                exp.live ? "bg-[color:var(--success)]" : "bg-[color:var(--accent)]"
              }`}
              aria-hidden="true"
            />
            {exp.live && (
              <span
                className="absolute -left-[34px] md:-left-[42px] -top-[3px] h-[22px] w-[22px] rounded-full bg-[color:var(--success)]/20 animate-ping z-0"
                aria-hidden="true"
              />
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg md:text-xl font-semibold text-[color:var(--fg-strong)]">
                  {exp.title}
                  <span className="text-[color:var(--muted)]"> · </span>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] underline-anim"
                  >
                    {exp.company}
                  </a>
                </h3>
                {exp.live && (
                  <span className="mono inline-flex items-center gap-1.5 text-[10.5px] text-[color:var(--success)] bg-[color:var(--success)]/10 border border-[color:var(--success)]/25 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <span className="dot-live" />
                    Production
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 mono text-xs text-[color:var(--muted-2)] whitespace-nowrap">
                {exp.location && <span>{exp.location}</span>}
                {exp.location && <span aria-hidden>·</span>}
                <time>{exp.period}</time>
              </div>
            </div>

            {exp.tag && (
              <p className="mono text-[11.5px] text-[color:var(--muted-2)] mt-1.5">
                {"// "} {exp.tag}
              </p>
            )}

            <ul className="mt-4 space-y-2.5 text-sm md:text-[14.5px] text-[color:var(--muted)] leading-relaxed">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="text-[color:var(--accent)] mt-[7px] flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5l3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
