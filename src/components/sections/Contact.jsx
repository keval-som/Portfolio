"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import {
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // No backend wired up — fall back to opening the user's mail client.
    // This keeps the form functional for any deployment target.
    try {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      // Small delay so the "sending" state is visible and feels intentional.
      await new Promise((r) => setTimeout(r, 500));
      window.location.href = mailto;
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((v) => ({ ...v, [e.target.name]: null }));
  };

  return (
    <Section
      id="contact"
      number="05"
      label="Get in Touch"
      title="Let's build something."
      tagline="Open to software engineering roles in fintech and distributed systems. I respond within 24 hours."
      maxWidth="max-w-5xl"
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <Reveal className="lg:col-span-3 panel p-6 md:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Field
              label="Name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={onChange}
              error={errors.email}
              autoComplete="email"
            />
            <Field
              label="Message"
              name="message"
              placeholder="Tell me about the opportunity or what you're working on…"
              value={form.message}
              onChange={onChange}
              error={errors.message}
              as="textarea"
              rows={5}
            />

            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-[11.5px] text-[color:var(--muted-2)]">
                This form opens your email client with the message pre-filled.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send message
                    <IconArrowRight width={16} height={16} />
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mono text-xs text-[color:var(--success)] inline-flex items-center gap-2"
                >
                  <IconCheck width={14} height={14} />
                  Email client opened — finish sending from there.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        {/* Side info */}
        <Reveal delay={0.1} className="lg:col-span-2 space-y-4">
          <div className="panel p-6">
            <div className="flex items-center gap-3 mb-3">
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
          </div>

          <div className="panel p-6">
            <div className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.15em] mb-3">
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
          </div>

          <div className="panel p-6">
            <div className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.15em] mb-2">
              Location
            </div>
            <div className="text-sm text-[color:var(--fg)]">{profile.location}</div>
            <div className="text-[12.5px] text-[color:var(--muted)] mt-1">
              Open to remote & relocation.
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, name, error, as = "input", ...rest }) {
  const Tag = as;
  const id = `field-${name}`;
  const base =
    "w-full bg-[color:var(--bg-elev)] border rounded-lg px-3.5 py-2.5 text-[14px] text-[color:var(--fg)] placeholder:text-[color:var(--muted-2)] outline-none transition-colors focus:border-[color:var(--accent)]";
  return (
    <div>
      <label
        htmlFor={id}
        className="mono text-[11px] text-[color:var(--muted-2)] uppercase tracking-[0.12em] mb-1.5 block"
      >
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${base} ${error ? "border-red-500/60" : "border-[color:var(--border-strong)]"} resize-none`}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-[11.5px] text-red-400">
          {error}
        </p>
      )}
    </div>
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
