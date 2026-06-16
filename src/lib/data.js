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
  resumeUrl: "#", // TODO: UPDATE RESUME URL
  socials: {
    github: "https://github.com/keval-som",
    linkedin: "https://www.linkedin.com/in/kevalsom",
  },
};

export const navItems = [
  { href: "#about", label: "About", n: "01" },
  { href: "#experience", label: "Experience", n: "02" },
  { href: "#projects", label: "Projects", n: "03" },
  { href: "#skills", label: "Skills", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
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
    companyUrl: "#",
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
    title: "Shadow Proxy",
    featured: true,
    desc: "A stateless PostgreSQL proxy built in Java 21 with Netty NIO — implementing transparent read-write splitting, a two-level cache (Caffeine L1 + Redis L2), per-node circuit breakers with a sliding-window state machine, and async RabbitMQ audit telemetry. Zero application changes required.",
    flow: "Client → Netty Decoder → L1/L2 Cache → AST Router → Circuit Breaker → Primary/Replica → Wire Encoder → Client",
    tech: ["Java 21", "Netty", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    github: "https://github.com/keval-som/Shadow-Proxy",
    demo: null,
  },
  {
    title: "Advisor AI",
    featured: false,
    desc: "Full-stack academic advising platform — React frontend, FastAPI backend, MongoDB, deployed to Google Cloud Run via Docker. Integrated a LangGraph-based RAG pipeline and fine-tuned LLaMA-2-7B model for AI-assisted advising. Built real-time SSE streaming, Firebase Auth, and the full API layer connecting AI inference to the frontend.",
    flow: "Client → React UI → FastAPI Backend → MongoDB → AI Inference Layer → SSE Stream → Client",
    tech: ["Python", "FastAPI", "React", "Docker", "MongoDB", "GCP", "LangGraph"],
    github: "https://github.com/keval-som/AdvisorAi",
    demo: null,
  },
  {
    title: "Ride Share",
    desc: "Full-stack ride-sharing platform built with Node.js — real-time driver-rider chat, booking workflows, geospatial ride-matching with optimized MongoDB indexing (30% search performance improvement), email notifications, and a post-ride review system. Containerized with Docker.",
    flow: "User Location → Geo-Index → Distance Scoring → Driver Match → Booking → Real-time Sync",
    tech: ["Node.js", "MongoDB", "Docker"],
    github: "https://github.com/keval-som/Ride-Share",
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
