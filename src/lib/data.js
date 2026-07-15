// ─────────────────────────────────────────────────────────────────────────────
// Portfolio content. Edit here — components stay clean.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Keval Sompura",
  role: "Software Engineer",
  headline: "I build backend systems that don't break under pressure.",
  subheadline:
    "Full-stack engineer with production fintech experience — distributed systems, async architectures, and end-to-end feature ownership.",
  location: "Jersey City, NJ",
  email: "sompurakeval@gmail.com",
  resumeUrl: "/Keval_Resume.pdf",
  socials: {
    github: "https://github.com/keval-som",
    linkedin: "https://www.linkedin.com/in/kevalsom",
  },
};

// Rendered as filesystem paths (/about, /experience…) — ties to the ~/keval wordmark.
export const navItems = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export const aboutParagraphs = [
  "I'm a software engineer with 1.5 years of production experience at Lentra, a fintech lending platform serving 50+ banks across India.",
  "My work has ranged from optimizing microservices under real financial load to redesigning async architectures that took API failure rates to near-zero — and owning features end-to-end from client requirements through UAT and production deployment.",
  "I recently completed my M.S. in Computer Science at Stevens Institute of Technology, where I went deeper on distributed systems, security, and network infrastructure.",
  "I work best at the intersection of backend reliability and product ownership — teams where I can own a problem fully, not just implement tickets.",
  "Based in Jersey City, NJ. Open to remote and relocation.",
];

export const highlights = [
  { value: "25%", label: "API latency reduction" },
  { value: "85%", label: "Test coverage achieved (from 46%)" },
  { value: "2 days", label: "Loan processing time cut" },
  { value: "~0%", label: "API failure rate after async redesign" },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Lentra",
    companyUrl: "https://www.lentra.ai/",
    location: "Pune, India",
    period: "May 2022 — Nov 2023",
    live: true,
    tag: "Fintech SaaS · Distributed Systems · AWS Production",
    bullets: [
      "Shipped end-to-end financial platform features for a major private-sector bank processing 750+ weekly applications, collaborating across product, QA, and client teams from requirements through production deployment in Q1 2023.",
      "Optimized Java Spring Boot microservices across a distributed financial platform, reducing API latency by 25% on high-volume transaction processing pipelines deployed on AWS ECS with CloudWatch observability.",
      "Redesigned JUnit testing infrastructure across critical backend services, increasing test coverage from 46% to 85% and reducing regression issues in production loan processing workflows.",
      "Built an async callback system to handle external service timeouts, reducing API failure rate to near-zero for large payload workflows and eliminating client-facing wait times.",
      "Automated data ingestion into the eligibility engine, triggering real-time decisioning workflows and reducing end-to-end processing time by 2 days.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Blitz Jobs",
    companyUrl: null,
    location: "Mumbai, India",
    period: "May 2021 — Jun 2021",
    tag: "Mobile · Java · Firebase",
    bullets: [
      "Launched an Android application in Java and Firebase for rooftop-solar sales partners, driving a 30% increase in partner engagement and a 10% lift in sales conversion.",
      "Designed RESTful API integrations connecting the mobile app to CRM backend systems, enabling real-time lead synchronization and streamlining data ingestion across the sales workflow.",
      "Instrumented Firebase Analytics dashboards, reducing manual KPI reporting effort by 40% and surfacing real-time visibility into underperforming sales territories.",
    ],
  },
];

export const projects = [
  {
    slug: "shadow-proxy",
    title: "Shadow Proxy",
    featured: true,
    tagline: "Database infrastructure · zero app changes",
    desc: "A stateless PostgreSQL proxy built in Java 21 with Netty NIO — implementing transparent read-write splitting, a two-level cache (Caffeine L1 + Redis L2), per-node circuit breakers with a sliding-window state machine, and async RabbitMQ audit telemetry. Zero application changes required.",
    tech: ["Java 21", "Netty", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    github: "https://github.com/keval-som/Shadow-Proxy",
    demo: null,
    links: [
      {
        label: "Design decisions",
        href: "https://github.com/keval-som/Shadow-Proxy#design-decisions",
      },
    ],
  },
  {
    slug: "advisor-ai",
    title: "Advisor AI",
    featured: false,
    tagline: "Full-stack RAG platform on GCP",
    desc: "Full-stack academic advising platform — React frontend, FastAPI backend, MongoDB, deployed to Google Cloud Run via Docker. Integrated a LangGraph-based RAG pipeline and fine-tuned LLaMA-2-7B model for AI-assisted advising. Built real-time SSE streaming, Firebase Auth, and the full API layer connecting AI inference to the frontend.",
    tech: ["Python", "FastAPI", "React", "Docker", "MongoDB", "GCP", "LangGraph"],
    github: "https://github.com/keval-som/AdvisorAi",
    demo: "https://advisoraii.web.app",
    links: [
      {
        label: "Research paper",
        href: "https://github.com/keval-som/AdvisorAi/blob/main/AdvisorAI_Research_Paper.pdf",
      },
    ],
  },
  {
    slug: "plasmiq",
    title: "PlasmIQ",
    featured: false,
    tagline: "Hackathon build · Real-world data · AI concierge",
    desc: "A plasma-donation platform that ranks donation slots by a live Friction Score computed from travel time, weather forecasts, and real-time center wait times — so donors see the lowest-friction slot, not just the nearest center. A GPT-4o concierge with function calling handles questions and rescheduling, with every response passed through a safety screening layer before delivery. Built with a team of three at the CSL hackathon.",
    // Tech tags sourced from the PlasmIQ README's stack section.
    tech: ["Python", "FastAPI", "React", "MongoDB", "GPT-4o", "Tailwind CSS"],
    github: "https://github.com/keval-som/PlasmIQ",
    demo: null,
  },
];

export const skillGroups = [
  {
    key: "languages",
    title: "Languages",
    icon: "code",
    size: 6,
    items: [
      { label: "Java", primary: true },
      { label: "Python", primary: true },
      { label: "JavaScript", primary: true },
      { label: "TypeScript", primary: true },
      { label: "SQL", primary: true },
      { label: "GraphQL" },
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks",
    icon: "layers",
    size: 6,
    items: [
      { label: "Spring Boot", primary: true },
      { label: "React.js", primary: true },
      { label: "Node.js", primary: true },
      { label: "FastAPI", primary: true },
      { label: "Hibernate" },
      { label: "Bootstrap" },
    ],
  },
  {
    key: "ai",
    title: "AI & Integrations",
    icon: "brain",
    size: 6,
    items: [
      { label: "LangGraph", primary: true },
      { label: "LangChain", primary: true },
      { label: "RAG Pipelines", primary: true },
      { label: "ChromaDB" },
      { label: "OpenAI API" },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    size: 6,
    items: [
      { label: "AWS", primary: true },
      { label: "ECS" },
      { label: "S3" },
      { label: "CloudWatch" },
      { label: "GCP", primary: true },
      { label: "Docker", primary: true },
      { label: "Kubernetes" },
      { label: "Jenkins" },
      { label: "GitHub Actions" },
    ],
  },
  {
    key: "databases",
    title: "Databases",
    icon: "database",
    size: 6,
    items: [
      { label: "PostgreSQL", primary: true },
      { label: "Redis", primary: true },
      { label: "MongoDB", primary: true },
      { label: "MySQL" },
      { label: "Firebase" },
    ],
  },
  {
    key: "concepts",
    title: "Concepts",
    icon: "wrench",
    size: 6,
    items: [
      { label: "Distributed Systems", primary: true },
      { label: "System Design", primary: true },
      { label: "Event-Driven Architecture", primary: true },
      { label: "Microservices" },
      { label: "Observability" },
      { label: "REST APIs" },
    ],
  },
];

export const activity = [
  {
    type: "building",
    text: "Shadow Proxy — stateless PostgreSQL proxy in Java 21 with Netty, virtual threads, and RabbitMQ audit telemetry.",
    time: "Now",
  },
  {
    type: "studying",
    text: "AWS Solutions Architect (Associate) — VPC design, IAM, multi-region fault tolerance.",
    time: "This week",
  },
  {
    type: "reading",
    text: "Designing Data-Intensive Applications — replication, consensus, stream processing.",
    time: "This month",
  },
  {
    type: "exploring",
    text: "Apache Kafka for event-driven financial data pipelines.",
    time: "Ongoing",
  },
];
