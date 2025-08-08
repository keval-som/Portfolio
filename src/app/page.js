"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function IconFolder(props) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconGitHub(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.54 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function IconExternal(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7h-7" />
      <path d="M3 10V3h7" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.05C12.66 8.9 14.4 8 16.5 8 21 8 22 10.7 22 15.3V24h-4v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24H8z" />
    </svg>
  );
}

function IconCopy(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = useMemo(
    () => [
      "Software Engineer & Problem Solver",
      "I build reliable backend services",
      "I craft delightful web experiences",
    ],
    []
  );

  // Header appear-on-scroll
  useEffect(() => {
    const onScroll = () => setShowHeader(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const typingSpeed = isDeleting ? 40 : 85;
    const timeout = setTimeout(
      () => {
        const next = isDeleting
          ? current.slice(0, typedText.length - 1)
          : current.slice(0, typedText.length + 1);
        setTypedText(next);
        if (!isDeleting && next === current) {
          setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && next === "") {
          setIsDeleting(false);
          setPhraseIndex((i) => i + 1);
        }
      },
      typedText === "" && !isDeleting ? 250 : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  // Intersection fade-in
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const resumeUrl =
    "https://1drv.ms/b/c/3a622e73a08a1366/EWEAChdr2dJOgHiJ_N_0FUwB5yxfSbXDbAfMOKHmuuZkGA?e=Xi0MTE";
  const email = "sompurakeval@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Fixed Header (appears after scroll) */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!showHeader}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 rounded-b-xl backdrop-blur-sm bg-[rgb(15_37_71_/_0.6)] border border-[var(--border)]">
          <div className="flex items-center justify-between gap-6">
            <a href="#top" className="font-mono text-sm text-[var(--muted)]">
              keval@portfolio:~
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--accent)] text-[var(--accent)] px-3 py-1.5 rounded-md text-sm hover:bg-[rgb(100_255_218_/_0.1)] transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-28 md:pt-40 pb-16 md:pb-28">
          <p className="font-mono text-[var(--accent)] mb-3">
            {"// "}Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Keval Sompura
          </h1>
          <h2 className="text-xl md:text-2xl text-[var(--muted)] min-h-8">
            <span className="font-mono">{typedText}</span>
            <span className="font-mono text-[var(--accent)]">|</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[var(--muted)]" data-animate>
            Software engineer focused on backend systems, microservices, and
            building resilient FinTech products. I value clarity, performance,
            and a great developer experience.
          </p>
          <div className="mt-10" data-animate>
            <a
              href="#projects"
              className="inline-block bg-[var(--accent)] text-[#0a192f] font-medium px-5 py-3 rounded-md hover:opacity-90 focus-visible:outline-2"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">01.</span> About Me
          </h3>
          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-[var(--muted)]" data-animate>
              <p>
                I&apos;m a software engineer with experience designing and
                scaling backend services, building robust APIs, and shipping
                delightful user experiences. My philosophy: keep things simple,
                measure impact, and automate the boring stuff.
              </p>
              <p>
                Recent focus areas include microservices, observability,
                performance tuning, and cloud-native infrastructure.
              </p>
            </div>
            <div className="panel p-6" data-animate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm mb-3 text-[var(--accent)]">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "JavaScript", "TypeScript", "SQL"].map(
                      (t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3 text-[var(--accent)]">
                    Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Spring Boot",
                      "React",
                      "Node.js",
                      "Next.js",
                      "Flask",
                    ].map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3 text-[var(--accent)]">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "Maven", "Jira", "CI/CD"].map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3 text-[var(--accent)]">
                    Databases & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL", "AWS", "GCP"].map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        >
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">02.</span> Experience
          </h3>
          <ol className="mt-6 relative border-l border-[var(--border)] ml-2 pl-6 space-y-10">
            <li className="relative" data-animate>
              <span
                className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-lg font-semibold">
                  Senior Software Engineer ·
                  <a
                    href="https://www.lentra.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Lentra
                  </a>
                </h4>
                <time className="font-mono text-xs text-[var(--muted)]">
                  May 2022 — Nov 2023
                </time>
              </div>
              <ul className="mt-3 list-disc pl-5 text-[var(--muted)] space-y-2">
                <li>
                  Reduced API latency by 25% by designing high-throughput Spring
                  Boot middleware.
                </li>
                <li>
                  Improved test pass rate from 65% → 100% and coverage from 46%
                  → 85% by revamping JUnit suites.
                </li>
                <li>
                  Automated loan status reports, saving ~4 hours/week of manual
                  effort.
                </li>
              </ul>
            </li>
            <li className="relative" data-animate>
              <span
                className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-lg font-semibold">
                  Android Development Intern ·
                  <a
                    href="#"
                    className="ml-1 underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Blitz Jobs
                  </a>
                </h4>
                <time className="font-mono text-xs text-[var(--muted)]">
                  May 2021 — Jun 2021
                </time>
              </div>
              <ul className="mt-3 list-disc pl-5 text-[var(--muted)] space-y-2">
                <li>
                  Built Android app to digitize rooftop solar workflows; +30%
                  partner engagement.
                </li>
                <li>
                  Shipped analytics features to inform partner performance and
                  customer trends.
                </li>
              </ul>
            </li>
            <li className="relative" data-animate>
              <span
                className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-lg font-semibold">
                  Web Development Intern ·
                  <a
                    href="#"
                    className="ml-1 underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Krux Works
                  </a>
                </h4>
                <time className="font-mono text-xs text-[var(--muted)]">
                  Sep 2020 — Oct 2020
                </time>
              </div>
              <ul className="mt-3 list-disc pl-5 text-[var(--muted)] space-y-2">
                <li>
                  Delivered web platform with dashboards to streamline
                  information access.
                </li>
                <li>
                  Launched community forum; 500 users in week one, ~75
                  posts/day.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        >
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">03.</span> Projects
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "StudentBridge",
                desc: "Academic resource platform connecting students with mentors and shared resources.",
                tech: ["React", "Node.js", "MongoDB", "Docker"],
                github: "https://github.com/keval-som/StudentBridge",
                demo: undefined,
              },
              {
                title: "Voice Commerce",
                desc: "Voice-enabled e‑commerce for street vendors with multilingual speech support.",
                tech: ["Python", "Flask", "Google Cloud APIs", "OAuth2"],
                github: "https://github.com/keval-som/voice-commerce",
                demo: undefined,
              },
              {
                title: "Ride-Share",
                desc: "Ride‑sharing app featuring auth, booking, and live location tracking.",
                tech: ["JavaScript", "Handlebars", "CSS"],
                github: "https://github.com/keval-som/Ride-Share",
                demo: undefined,
              },
            ].map((p) => (
              <article
                key={p.title}
                className="panel p-5 hover:-translate-y-1 transition-transform"
                data-animate
              >
                <div className="flex items-center justify-between mb-4 text-[var(--accent)]">
                  <IconFolder />
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    {p.github && (
                      <a
                        href={p.github}
                        aria-label={`${p.title} GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)]"
                        title="GitHub"
                      >
                        <IconGitHub />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        aria-label={`${p.title} Live Demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)]"
                        title="Open live demo"
                      >
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-[var(--muted)] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <div className="text-center">
            <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
              <span className="mr-2">04.</span> What&apos;s Next?
            </h3>
            <h4 className="mt-4 text-3xl md:text-4xl font-bold" data-animate>
              Get In Touch
            </h4>
            <p
              className="mt-4 max-w-2xl mx-auto text-[var(--foreground)] leading-relaxed"
              data-animate
            >
              I&apos;m currently open to new opportunities and exciting
              collaborations. Whether you&apos;re looking to discuss a project,
              have questions, or just want to connect, I&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="mt-12 space-y-8" data-animate>
            {/* Primary Contact Card */}
            <div className="panel p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--accent)]/10 rounded-xl mb-6">
                <IconMail className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Drop me a line</h5>
              <p className="text-[var(--muted)] mb-6">
                The best way to reach me is via email. I typically respond
                within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={`mailto:${email}?subject=Hello from your portfolio`}
                  className="inline-flex items-center gap-3 bg-[var(--accent)] text-[#0a192f] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <IconMail className="w-5 h-5" />
                  Send Email
                </a>
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <code className="bg-[var(--border)] px-2 py-1 rounded text-xs">
                    {email}
                  </code>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1 hover:text-[var(--accent)] transition-colors"
                    title="Copy email"
                    aria-live="polite"
                  >
                    <IconCopy className="w-4 h-4" />
                    <span className="sr-only">
                      {copied ? "Copied!" : "Copy email"}
                    </span>
                  </button>
                  {copied && (
                    <span className="text-[var(--accent)] text-xs">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-[var(--muted)] mb-6">Or connect with me on</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/kevalsom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[var(--border)]/30 transition-colors group"
                >
                  <IconLinkedIn className="w-8 h-8 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                  <span className="text-xs text-[var(--muted)]">
                    Professional network
                  </span>
                </a>
                <a
                  href="https://github.com/keval-som"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[var(--border)]/30 transition-colors group"
                >
                  <IconGitHub className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                  <span className="text-xs text-[var(--muted)]">
                    Code repositories
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-[var(--muted)] text-xs">
        © {new Date().getFullYear()} Keval Sompura
      </footer>
    </div>
  );
}
