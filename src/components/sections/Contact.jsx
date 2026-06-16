"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import {
  IconCheck,
  IconCopy,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  };

  return (
    <Section
      id="contact"
      number="05"
      label="Get in Touch"
      title="Open to the right opportunity."
      tagline="I'm actively interviewing for backend, full-stack, and product engineering roles. If you're building something that needs to work under real load, I'd like to hear about it."
      maxWidth="max-w-5xl"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Email */}
        <Reveal className="panel p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[color:rgba(var(--accent-rgb),0.1)] text-[color:var(--accent)]">
              <IconMail width={20} height={20} />
            </span>
            <div>
              <div className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.15em]">
                Email
              </div>
              <div className="text-sm font-medium text-[color:var(--fg-strong)]">
                {profile.email}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-secondary h-9 px-3 text-[13px] flex-1"
            >
              Open mail
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-ghost h-9 px-3 text-[13px]"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <IconCheck width={14} height={14} /> Copied
                </>
              ) : (
                <>
                  <IconCopy width={14} height={14} /> Copy
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Social links */}
        <Reveal delay={0.07} className="panel p-6">
          <div className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.15em] mb-4">
            Elsewhere
          </div>
          <div className="grid grid-cols-2 gap-2">
            <SocialLink
              href={profile.socials.linkedin}
              label="LinkedIn"
              icon={<IconLinkedIn width={18} height={18} />}
            />
            <SocialLink
              href={profile.socials.github}
              label="GitHub"
              icon={<IconGitHub width={18} height={18} />}
            />
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.14} className="panel p-6">
          <div className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.15em] mb-2">
            Location
          </div>
          <div className="text-sm text-[color:var(--fg)]">{profile.location}</div>
          <div className="text-[12.5px] text-[color:var(--muted)] mt-1">
            Open to remote &amp; relocation.
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-[color:var(--border-strong)] text-[13px] text-[color:var(--fg)] hover:text-[color:var(--accent)] hover:border-[color:rgba(var(--accent-rgb),0.45)] transition-colors"
    >
      <span className="text-[color:var(--muted)]">{icon}</span>
      {label}
    </a>
  );
}
