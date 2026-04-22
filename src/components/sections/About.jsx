"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { aboutParagraphs, profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" number="01" label="About Me" title="A brief introduction.">
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
          <Reveal delay={0.2}>
            <p className="pt-2 mono text-[13px] text-[color:var(--muted-2)]">
              <span className="text-[color:var(--accent)]">→</span> Based in {profile.location}.
              Open to relocation.
            </p>
          </Reveal>
        </div>

        {/* Portrait / visual */}
        <Reveal delay={0.12} className="md:col-span-2">
          <div className="relative group max-w-[280px] mx-auto md:mx-0">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative panel p-1 overflow-hidden aspect-square">
              <div className="w-full h-full rounded-[11px] bg-[color:var(--bg-elev)] flex items-center justify-center overflow-hidden">
                <Avatar />
              </div>
              <div className="absolute inset-0 rounded-[12px] ring-1 ring-inset ring-[color:rgba(var(--accent-rgb),0.12)] pointer-events-none" />
            </div>
          </div>
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

// SVG-based abstract avatar so we don't require an image asset.
function Avatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      role="img"
      aria-label="Abstract portrait illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-3)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
        </linearGradient>
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="var(--accent)" opacity="0.22" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#dots)" />
      <circle cx="100" cy="110" r="78" fill="url(#g2)" />
      <circle cx="100" cy="90" r="28" fill="url(#g1)" />
      <path
        d="M38 175 C 55 140, 75 128, 100 128 C 125 128, 145 140, 162 175"
        fill="url(#g1)"
      />
      <text
        x="100"
        y="195"
        textAnchor="middle"
        fontFamily="var(--font-mono-var), monospace"
        fontSize="7"
        fill="var(--muted)"
        letterSpacing="3"
      >
        KS · FINTECH · BACKEND
      </text>
    </svg>
  );
}
