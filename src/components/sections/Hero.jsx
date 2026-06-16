"use client";

import { motion } from "framer-motion";
import { profile, highlights } from "@/lib/data";
import { IconArrowRight, IconDownload } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 w-full pt-32 md:pt-36 pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono text-[13px] text-[color:var(--accent)] mb-5 inline-flex items-center gap-2"
        >
          <span className="dot-live" aria-hidden="true" />
          Available for software engineering roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.02] text-[color:var(--fg-strong)]"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-4 text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold tracking-[-0.02em] leading-[1.15] text-[color:var(--fg-strong)] max-w-2xl"
        >
          {profile.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 max-w-xl text-[color:var(--muted)] leading-relaxed text-[15px]"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
            <IconArrowRight width={16} height={16} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <IconDownload width={15} height={15} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {highlights.map((h) => (
            <div key={h.label} className="panel px-4 py-4 md:py-5 text-center">
              <div className="gradient-text text-2xl md:text-3xl font-bold tracking-tight">
                {h.value}
              </div>
              <div className="mt-1 text-[11.5px] md:text-xs text-[color:var(--muted)]">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
