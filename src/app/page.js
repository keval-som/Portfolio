"use client";

import { useEffect, useMemo, useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── SkillPill with hover tooltip ─────────────────────────────────────────────

function SkillPill({ label, tooltip }) {
  return (
    <span className="skill-tip">
      <span className="pill cursor-default">{label}</span>
      {tooltip && <span className="skill-tip-text">{tooltip}</span>}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const phrases = useMemo(
    () => [
      "Building high-throughput lending systems",
      "Designing secure data architectures",
      "Crafting resilient backend systems",
    ],
    [],
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
    const typingSpeed = isDeleting ? 40 : 80;
    const timeout = setTimeout(
      () => {
        const next = isDeleting
          ? current.slice(0, typedText.length - 1)
          : current.slice(0, typedText.length + 1);
        setTypedText(next);
        if (!isDeleting && next === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && next === "") {
          setIsDeleting(false);
          setPhraseIndex((i) => i + 1);
        }
      },
      typedText === "" && !isDeleting ? 300 : typingSpeed,
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
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const resumeUrl =
    "https://1drv.ms/b/c/3a622e73a08a1366/IQDPOiU3BMBJSIh1Jq8TawT1AfvaOIrltG2c29ygEQ0l3B0?e=AZIwKu";
  const email = "sompurakeval@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  // ── Data ──────────────────────────────────────────────────────────────────

  const skillGroups = [
    {
      title: "Languages",
      wide: true,
      items: [
        {
          label: "Java",
          tooltip:
            "Optimized multi-threaded lending engine at Lentra, reducing API latency by 25%",
        },
        {
          label: "Python",
          tooltip:
            "Automated credit pipeline data ingestion, cutting loan processing by 2 business days",
        },
        {
          label: "TypeScript",
          tooltip:
            "Type-safe service layer for fault-tolerant financial automation workflows",
        },
        {
          label: "SQL",
          tooltip:
            "Complex query optimization for high-volume transactional fintech databases",
        },
        {
          label: "GraphQL",
          tooltip:
            "Flexible API layer for real-time data fetching in distributed microservices",
        },
        {
          label: "C++",
          tooltip:
            "Systems programming and performance-critical algorithm implementation",
        },
      ],
    },
    {
      title: "Fintech Ecosystem",
      items: [
        {
          label: "Lending Workflows",
          tooltip:
            "End-to-end loan origination and credit decision pipeline engineering",
        },
        {
          label: "Credit Pipelines",
          tooltip:
            "Rule engine integration and automated credit scoring data flows",
        },
        {
          label: "Event-Driven Systems",
          tooltip:
            "Async financial event processing for real-time transaction workflows",
        },
        {
          label: "Fintech APIs",
          tooltip:
            "Integration with financial data providers and payment processing systems",
        },
      ],
    },
    {
      title: "Frameworks & Tools",
      items: [
        {
          label: "Spring Boot",
          tooltip:
            "Core framework for Lentra's production microservices handling financial transactions",
        },
        {
          label: "React",
          tooltip:
            "Component-driven UI development for responsive, interactive applications",
        },
        {
          label: "Node.js",
          tooltip:
            "Event-driven backend for fault-tolerant financial reporting and REST APIs",
        },
        {
          label: "Flask",
          tooltip:
            "Lightweight Python API layer for voice commerce and data processing services",
        },
        {
          label: "Docker",
          tooltip:
            "Containerized all production and research services for reliable deployments",
        },
        {
          label: "CI/CD",
          tooltip:
            "Jenkins and GitHub Actions pipelines reducing Lentra deployment failures by 20%",
        },
      ],
    },
    {
      title: "Infrastructure",
      wide: true,
      items: [
        {
          label: "AWS (ECS · S3 · IAM · VPC)",
          tooltip:
            "Production cloud infrastructure for Lentra's distributed fintech microservices",
        },
        {
          label: "GCP Cloud Run",
          tooltip:
            "Serverless containers with horizontal scaling for cost-efficient deployments",
        },
        {
          label: "PostgreSQL",
          tooltip:
            "Relational persistence for structured financial transaction records",
        },
        {
          label: "MongoDB",
          tooltip:
            "Document store for flexible-schema data and API response caching",
        },
        {
          label: "Redis",
          tooltip:
            "In-memory caching layer reducing latency on high-frequency data paths",
        },
      ],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Lentra",
      companyUrl: "https://www.lentra.ai/",
      period: "May 2022 — Nov 2023",
      live: true,
      tag: "Fintech SaaS · Distributed Systems · AWS Production",
      bullets: [
        "Reduced API latency by 25% across high-volume financial transaction workflows by optimizing Java Spring Boot microservices within a distributed AWS architecture serving concurrent production traffic.",
        "Accelerated loan processing by 2 business days by integrating Python-based analytical services into the credit decision pipeline, automating data ingestion into the rule engine and improving system throughput.",
        "Raised JUnit test coverage from 46% → 85%, eliminating regression failures in critical financial backend services by redesigning the testing framework with robust mocking strategies.",
        "Reduced deployment failures by 20% across two client-facing systems by implementing Jenkins CI/CD pipelines with AWS CloudWatch fault-tolerant release gates.",
        "Saved 4+ engineering hours/week by building a fault-tolerant Node.js service with event-driven scheduling and secure FTP transfers for automated financial reporting pipelines.",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Blitz Jobs",
      companyUrl: "#",
      period: "May 2021 — Jun 2021",
      tag: "Mobile · Java · Firebase",
      bullets: [
        "Boosted sales partner engagement by 30% by designing and shipping a production-grade Android app (Java, XML, Firebase) for rooftop solar workflow digitization.",
        "Increased sales conversion by 10% by integrating REST APIs with the company CRM backend, enabling real-time synchronization of lead and client data.",
        "Reduced manual KPI reporting time by 40% by implementing Firebase Analytics dashboards for immediate identification of underperforming sales territories.",
      ],
    },
  ];

  const projects = [
    {
      title: "Advisor AI",
      featured: true,
      desc: "Architected a scalable backend integrating LLM-based inference with structured academic datasets for real-time personalized course recommendations. Implemented request validation, rate limiting, and horizontal scaling — delivering fault-tolerant, abuse-resistant pipelines under concurrent user load.",
      flow: "Client Request → Rate Limiter → LLM Inference Engine → Academic Dataset Join → Response Serializer → Cache Layer → Client",
      tech: ["Python", "Node.js", "Docker", "MongoDB", "GCP Cloud Run", "AWS"],
      github: undefined,
    },
    {
      title: "Data Poisoning Mitigation",
      desc: "Cybersecurity/Data Integrity research implementing outlier detection algorithms (IQR, Z-score, Isolation Forest) to identify and neutralize adversarial data injection in ML training pipelines. Demonstrated 40%+ reduction in prediction variance under simulated attack conditions.",
      flow: "Raw Dataset → IQR / Z-score / Isolation Forest → Anomaly Flagging → Clean Dataset → Model Training → Integrity Validation",
      tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Jupyter"],
      github: undefined,
    },
    {
      title: "F1 Data Insights",
      desc: "Real-time telemetry pipeline processing high-velocity F1 race data with sub-second ingestion latency. Designed an ETL architecture with automated anomaly detection and end-to-end data integrity validation handling concurrent multi-stream data.",
      flow: "F1 Telemetry API → Stream Ingestor → Anomaly Detector → ETL Transform → PostgreSQL → Query Layer",
      tech: ["Java", "Python", "PostgreSQL", "Docker"],
      github: undefined,
    },
    {
      title: "Ride-Share",
      desc: "Production-grade Node.js backend with geospatial indexing for location-based ride matching. Improved ride search performance by 30% and reduced query latency through optimized database queries handling concurrent booking requests.",
      flow: "User Location → Geo-Index Query → Distance Scoring → Driver Matching → Booking Confirmation → Real-time Sync",
      tech: ["Node.js", "AWS", "Docker", "MongoDB"],
      github: "https://github.com/keval-som/Ride-Share",
    },
    {
      title: "Voice Commerce",
      desc: "Low-latency Flask REST API processing voice-based inventory commands with real-time CRUD operations on a NoSQL datastore. Containerized with Docker, with structured error handling ensuring scalable, fault-tolerant cloud infrastructure.",
      flow: "Voice Input → Speech Parser → Command Classifier → CRUD Operation → NoSQL Store → Confirmation Response",
      tech: ["Python", "Flask", "Docker", "GCP"],
      github: "https://github.com/keval-som/voice-commerce",
    },
  ];

  const liveActivity = [
    {
      type: "building",
      text: "Distributed rate-limiting service in Java Spring Boot with Redis-backed token buckets for high-throughput APIs",
      time: "Now",
    },
    {
      type: "studying",
      text: "AWS Solutions Architect (Associate) — VPC design, IAM policies, multi-region fault tolerance",
      time: "This week",
    },
    {
      type: "reading",
      text: "Bloomberg Fixed Income fundamentals — yield curves, duration risk, and credit spread dynamics",
      time: "This month",
    },
    {
      type: "exploring",
      text: "Apache Kafka streams for event-driven financial transaction processing at scale",
      time: "Ongoing",
    },
  ];

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen font-sans bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!showHeader}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 rounded-b-xl backdrop-blur-md bg-[rgba(6,15,30,0.8)] border border-[var(--border)]">
          <div className="flex items-center justify-between gap-6">
            <a href="#top" className="font-mono text-sm text-[var(--muted)]">
              keval@fintech:~$
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#activity", label: "Activity" },
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
              className="border border-[var(--accent)] text-[var(--accent)] px-3 py-1.5 rounded-md text-sm hover:bg-[rgba(100,255,218,0.1)] transition-colors font-mono"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-4 pt-28 md:pt-40 pb-16 md:pb-28">
          <p className="font-mono text-[var(--accent)] mb-3 text-sm tracking-wide">
            {"// "} Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            Keval Sompura
          </h1>
          <h2 className="text-xl md:text-3xl font-mono font-bold text-[var(--muted)] mb-3">
            Software Engineer{" "}
            <span className="holographic-text">| Fintech &amp; Backend</span>
          </h2>
          <p className="text-lg text-[var(--muted)] min-h-8 font-mono">
            <span>{typedText}</span>
            <span className="text-[var(--accent)] animate-pulse">|</span>
          </p>
          <p
            className="mt-6 max-w-xl text-[var(--muted)] leading-relaxed"
            data-animate
          >
            Building high-throughput lending systems and secure data
            architectures. Specialized in distributed backend services, CI/CD
            automation, and fintech-grade reliability where latency and data
            integrity are non-negotiable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4" data-animate>
            <a
              href="#projects"
              className="inline-block bg-[var(--accent)] text-[#060f1e] font-semibold px-6 py-3 rounded-md hover:opacity-90 focus-visible:outline-2 font-mono text-sm"
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-md hover:bg-[rgba(100,255,218,0.1)] transition-colors font-mono text-sm"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">01.</span> About Me
          </h3>
          <div className="mt-6 grid md:grid-cols-5 gap-10 items-start">
            {/* Bio */}
            <div
              className="md:col-span-2 space-y-4 text-[var(--muted)]"
              data-animate
            >
              <p>
                Software engineer with 1.5+ years of production fintech
                experience at{" "}
                <a
                  href="https://www.lentra.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Lentra
                </a>
                , engineering distributed credit decision pipelines on AWS
                handling concurrent financial transactions at scale.
              </p>
              <p>
                My work spans high-throughput microservices, API design, and
                backend systems where sub-100ms latency and data integrity are
                production requirements — not aspirational goals.
              </p>
              <p>
                Currently completing an M.S. in Computer Science at Stevens
                Institute of Technology, with coursework in security,
                distributed systems, and network infrastructure.
              </p>
            </div>

            {/* Bento Skills Grid */}
            <div className="md:col-span-3" data-animate>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className={`panel p-4 ${group.wide ? "sm:col-span-2" : "sm:col-span-1"}`}
                  >
                    <h4 className="font-mono text-xs mb-3 text-[var(--accent)] uppercase tracking-widest">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillPill
                          key={item.label}
                          label={item.label}
                          tooltip={item.tooltip}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        >
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">02.</span> Experience
          </h3>
          <ol className="mt-6 relative border-l border-[var(--border)] ml-2 pl-6 space-y-10">
            {experiences.map((exp) => (
              <li
                key={`${exp.company}-${exp.period}`}
                className="relative"
                data-animate
              >
                {/* Timeline dot — green + ping for production roles */}
                <span
                  className={`absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full z-10 ${
                    exp.live ? "bg-green-500" : "bg-[var(--accent)]"
                  }`}
                  aria-hidden="true"
                />
                {exp.live && (
                  <span
                    className="absolute -left-[13px] top-[1px] h-4 w-4 rounded-full bg-green-500/20 animate-ping z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-lg font-semibold">
                      {exp.title}
                      {" · "}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]"
                      >
                        {exp.company}
                      </a>
                    </h4>
                    {exp.live && (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                        <span className="fintech-pulse-dot" />
                        Production
                      </span>
                    )}
                    {exp.credential && (
                      <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                        Bloomberg Certified
                      </span>
                    )}
                  </div>
                  <time className="font-mono text-xs text-[var(--muted)] whitespace-nowrap">
                    {exp.period}
                  </time>
                </div>

                {exp.tag && (
                  <p className="font-mono text-xs text-[var(--border)] mt-1 mb-1">
                    {"// "}
                    {exp.tag}
                  </p>
                )}

                <ul className="mt-3 list-disc pl-5 text-[var(--muted)] space-y-2 text-sm leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Projects / System Architectures ── */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        >
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">03.</span> Projects
          </h3>
          <p
            className="mt-1 font-mono text-xs text-[var(--border)]"
            data-animate
          >
            {"// Hover a card to reveal the backend data flow"}
          </p>

          {/* Bento project grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`panel p-5 hover:-translate-y-1 transition-transform group relative overflow-hidden ${
                  p.featured ? "lg:col-span-2" : ""
                }`}
                data-animate
              >
                {/* Default card content */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-center justify-between mb-4 text-[var(--accent)]">
                    <IconFolder />
                    <div className="flex items-center gap-3 text-[var(--foreground)]">
                      {p.github && (
                        <a
                          href={p.github}
                          aria-label={`${p.title} GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--accent)] transition-colors"
                          title="GitHub"
                        >
                          <IconGitHub />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* System Flow hover overlay */}
                <div className="absolute inset-0 p-5 bg-[rgba(6,15,30,0.97)] backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="font-mono text-xs text-[var(--accent)] mb-4 uppercase tracking-widest">
                    ▸ System Flow
                  </p>
                  <p className="font-mono text-sm leading-8">
                    {p.flow.split(" → ").map((step, i, arr) => (
                      <span key={i}>
                        <span className="text-[var(--foreground)]">{step}</span>
                        {i < arr.length - 1 && (
                          <span className="text-[var(--accent)]"> → </span>
                        )}
                      </span>
                    ))}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Live Activity ── */}
        <section
          id="activity"
          className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        >
          <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
            <span className="mr-2">04.</span> Current Activity
          </h3>
          <div className="mt-6 panel p-6" data-animate>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="live-dot" />
              <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
                What I&apos;m Building &amp; Learning
              </span>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {liveActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider min-w-[72px] mt-0.5">
                    {item.type}
                  </span>
                  <span className="text-sm text-[var(--muted)] flex-1 leading-relaxed">
                    {item.text}
                  </span>
                  <span className="font-mono text-xs text-[var(--border)] whitespace-nowrap mt-0.5">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <div className="text-center">
            <h3 className="font-mono text-sm text-[var(--accent)]" data-animate>
              <span className="mr-2">05.</span> What&apos;s Next?
            </h3>
            <h4 className="mt-4 text-3xl md:text-4xl font-bold" data-animate>
              Let&apos;s Build Something
            </h4>
            <p
              className="mt-4 max-w-2xl mx-auto text-[var(--muted)] leading-relaxed"
              data-animate
            >
              Open to software engineering roles in fintech and distributed
              systems. Whether you&apos;re building high-throughput financial
              infrastructure or need a backend engineer who understands both the
              code and the domain — let&apos;s connect.
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
                I respond within 24 hours. Prefer technical conversations over
                vague outreach.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={`mailto:${email}?subject=Engineering Opportunity`}
                  className="inline-flex items-center gap-3 bg-[var(--accent)] text-[#060f1e] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <IconMail className="w-5 h-5" />
                  Send Email
                </a>
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <code className="bg-[var(--border)] px-2 py-1 rounded text-xs font-mono">
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

      <footer className="py-8 text-center text-[var(--muted)] text-xs font-mono">
        <p>
          © {new Date().getFullYear()} Keval Sompura · Software Engineer |
          Fintech &amp; Backend
        </p>
        <p className="mt-1 text-[var(--border)]">
          Built with Next.js · Deployed with precision
        </p>
      </footer>
    </div>
  );
}
