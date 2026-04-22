"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";
import {
  IconArrowUpRight,
  IconFolder,
  IconGitHub,
} from "@/components/Icons";

export default function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      label="Things I've Built"
      title="Selected projects."
      tagline="Hover a card to peek inside the architecture."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <Reveal
            key={p.title}
            delay={idx * 0.06}
            as="article"
            className={`panel panel-hover group relative overflow-hidden ${
              p.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className="p-6 relative z-10 h-full flex flex-col">
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[color:rgba(var(--accent-rgb),0.1)] text-[color:var(--accent)]">
                  <IconFolder width={20} height={20} />
                </span>
                <div className="flex items-center gap-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source on GitHub`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[color:var(--muted)] hover:text-[color:var(--accent)] hover:bg-[color:rgba(var(--accent-rgb),0.08)] transition-colors"
                    >
                      <IconGitHub width={17} height={17} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[color:var(--muted)] hover:text-[color:var(--accent)] hover:bg-[color:rgba(var(--accent-rgb),0.08)] transition-colors"
                    >
                      <IconArrowUpRight width={17} height={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[color:var(--fg-strong)] group-hover:text-[color:var(--accent)] transition-colors">
                {p.title}
                {p.featured && (
                  <span className="ml-2 mono text-[10px] px-2 py-0.5 rounded-full border border-[color:var(--accent)]/40 text-[color:var(--accent)] align-middle">
                    FEATURED
                  </span>
                )}
              </h3>

              <p className="mt-3 text-[13.5px] text-[color:var(--muted)] leading-relaxed flex-1">
                {p.desc}
              </p>

              {/* Flow accordion — always visible on mobile, hover-reveal on desktop */}
              <div className="mt-4 overflow-hidden">
                <div className="max-h-60 md:max-h-0 md:group-hover:max-h-60 md:group-focus-within:max-h-60 transition-[max-height] duration-500 ease-out">
                  <div className="pt-3 border-t border-[color:var(--border)] mono text-[11px] text-[color:var(--muted-2)] leading-5">
                    <div className="text-[color:var(--accent)] text-[10px] uppercase tracking-widest mb-1.5">
                      ▸ System Flow
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-1">
                      {p.flow.split(" → ").map((step, i, arr) => (
                        <span key={i} className="whitespace-nowrap">
                          <span className="text-[color:var(--fg)]">{step}</span>
                          {i < arr.length - 1 && (
                            <span className="text-[color:var(--accent)] mx-1">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative gradient on hover */}
            <div className="absolute -inset-px rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-[color:rgba(var(--accent-rgb),0.08)] via-transparent to-transparent" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
