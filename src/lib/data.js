// ─────────────────────────────────────────────────────────────────────────────
// Portfolio content. Edit here — components stay clean.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Keval Sompura",
  role: "Software Engineer",
  specialty: "Fintech & Backend",
  tagline: "Building high-throughput lending systems and secure data architectures.",
  location: "Hoboken, NJ",
  email: "sompurakeval@gmail.com",
  resumeUrl:
    "https://1drv.ms/b/c/3a622e73a08a1366/IQDPOiU3BMBJSIh1Jq8TawT1AfvaOIrltG2c29ygEQ0l3B0?e=AZIwKu",
  socials: {
    github: "https://github.com/keval-som",
    linkedin: "https://www.linkedin.com/in/kevalsom",
  },
  typedPhrases: [
    "Building high-throughput lending systems",
    "Designing secure data architectures",
    "Crafting resilient backend services",
    "Automating credit decision pipelines",
  ],
};

export const navItems = [
  { href: "#about", label: "About", n: "01" },
  { href: "#experience", label: "Experience", n: "02" },
  { href: "#projects", label: "Projects", n: "03" },
  { href: "#skills", label: "Skills", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
];

export const aboutParagraphs = [
  "Software engineer with 1.5+ years of production fintech experience at Lentra, engineering distributed credit decision pipelines on AWS that serve concurrent financial transactions at scale.",
  "My work spans high-throughput microservices, API design, and backend systems where sub-100ms latency and data integrity are production requirements — not aspirational goals.",
  "Currently completing an M.S. in Computer Science at Stevens Institute of Technology, with coursework in security, distributed systems, and network infrastructure.",
];

export const highlights = [
  { value: "25%", label: "API latency reduction" },
  { value: "85%", label: "Test coverage (from 46%)" },
  { value: "2d", label: "Faster loan processing" },
  { value: "20%", label: "Fewer deploy failures" },
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
      "Optimized Java Spring Boot microservices within a distributed AWS architecture, reducing API latency by 25% across high-volume financial transaction workflows handling concurrent production traffic.",
      "Integrated Python-based analytical services into credit decision pipelines, automating data ingestion into the rule engine and reducing loan processing time by 2 days while improving system throughput.",
      "Strengthened production reliability by redesigning the JUnit testing framework, increasing coverage from 46% to 85% and preventing regression failures in critical backend services.",
      "Implemented CI/CD pipelines using Jenkins and Git for two client-facing systems, using AWS CloudWatch to guarantee fault-tolerant releases and reduce deployment failures by 20%.",
      "Built a fault-tolerant internal Node.js service automating financial reporting pipelines with event-driven scheduling and secure FTP transfers, saving 4+ hours of manual work weekly.",
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
      "Boosted sales partner engagement by 30% by designing and launching a rooftop-solar Android app using Java, XML, and Firebase Realtime Database.",
      "Leveraged REST APIs to connect the mobile application with the company's CRM backend, enabling real-time synchronization of lead and client data and driving a 10% increase in sales.",
      "Enabled in-app analytics dashboards using Firebase Analytics, reducing manual KPI reporting time for the sales team by 40% and enabling immediate identification of underperforming sales territories.",
    ],
  },
];

export const projects = [
  {
    title: "Shadow Proxy",
    featured: true,
    desc: "High-concurrency PostgreSQL DB proxy built with Java 21 (Virtual Threads) and Netty, handling 10k+ connections. Transparent read-write splitting via JSQLParser AST, dual-layer Caffeine/Redis cache, and a sliding-window circuit breaker with async RabbitMQ audit telemetry.",
    flow: "Client → Netty Decoder → L1/L2 Cache → AST Router → Circuit Breaker → Primary/Replica → Wire Encoder → Client",
    tech: ["Java 21", "Netty", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    github: "https://github.com/keval-som/Shadow-Proxy",
    demo: null,
  },
  {
    title: "Advisor AI",
    featured: false,
    desc: "Scalable backend integrating LLM inference with structured academic datasets for real-time personalized course recommendations. Containerized on GCP Cloud Run with horizontal scaling, request validation, and rate limiting for low-latency, fault-tolerant, abuse-resistant AI pipelines.",
    flow: "Client → Rate Limiter → LLM Router → Dataset Join → Serializer → Cache → Client",
    tech: ["Python", "Node.js", "Docker", "MongoDB", "GCP", "AWS"],
    github: "https://github.com/keval-som/AdvisorAi",
    demo: null,
  },
  {
    title: "Ride-Share",
    desc: "Production-grade Node.js backend with RESTful APIs for ride booking, creation, and user auth — handling concurrent requests efficiently. Location-based ride matching with geospatial indexing improved search performance by 30% and cut query latency.",
    flow: "User Location → Geo-Index → Distance Scoring → Driver Match → Booking → Real-time Sync",
    tech: ["Node.js", "AWS", "Docker", "MongoDB"],
    github: "https://github.com/keval-som/Ride-Share",
    demo: null,
  },
  {
    title: "F1 Data Insights",
    desc: "Real-time telemetry pipeline processing high-velocity F1 race data with sub-second ingestion. ETL architecture with automated anomaly detection and end-to-end data integrity validation across concurrent multi-stream data.",
    flow: "F1 API → Stream Ingestor → Anomaly Detector → ETL → PostgreSQL → Query Layer",
    tech: ["Java", "Python", "PostgreSQL", "Docker"],
    github: null,
    demo: null,
  },
  {
    title: "Voice Commerce",
    desc: "Low-latency Flask REST API processing voice-based inventory commands with real-time CRUD on a NoSQL datastore. Containerized with structured error handling for scalable, fault-tolerant cloud infrastructure.",
    flow: "Voice → Speech Parser → Classifier → CRUD → NoSQL → Confirmation",
    tech: ["Python", "Flask", "Docker", "GCP"],
    github: "https://github.com/keval-som/voice-commerce",
    demo: null,
  },
];

// Skills — structured per resume with category icons + primary/supporting highlights.
// `primary: true` lifts the most-used tags visually.
// `size` = desktop col-span in a 12-col grid. Mobile handled separately.
export const skillGroups = [
  {
    key: "languages",
    title: "Languages",
    icon: "code",
    size: 5,
    items: [
      { label: "Java", primary: true },
      { label: "Python", primary: true },
      { label: "TypeScript", primary: true },
      { label: "JavaScript" },
      { label: "SQL", primary: true },
      { label: "GraphQL" },
      { label: "C++" },
      { label: "C" },
      { label: "HTML" },
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks & Libraries",
    icon: "layers",
    size: 7,
    items: [
      { label: "Spring Boot", primary: true },
      { label: "Node.js", primary: true },
      { label: "React.js", primary: true },
      { label: "Netty" },
      { label: "Hibernate" },
      { label: "JSQLParser" },
      { label: "Caffeine" },
      { label: "HikariCP" },
      { label: "Mockito" },
      { label: "Bootstrap" },
    ],
  },
  {
    key: "ai",
    title: "AI & Agentic Coding",
    icon: "brain",
    size: 7,
    items: [
      { label: "LangGraph", primary: true },
      { label: "LangChain", primary: true },
      { label: "RAG Pipelines", primary: true },
      { label: "ChromaDB" },
      { label: "Vector Embeddings" },
      { label: "OpenAI API" },
      { label: "Gemini API" },
      { label: "Anthropic / Claude" },
      { label: "MCP" },
      { label: "Prompt Engineering" },
      { label: "QLoRA Fine-Tuning" },
      { label: "Cursor / Copilot" },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    size: 5,
    items: [
      { label: "AWS", primary: true },
      { label: "ECS" },
      { label: "S3" },
      { label: "IAM" },
      { label: "VPC" },
      { label: "CloudWatch" },
      { label: "GCP", primary: true },
      { label: "Docker", primary: true },
      { label: "Kubernetes" },
      { label: "GitHub Actions" },
      { label: "Jenkins" },
      { label: "RabbitMQ" },
    ],
  },
  {
    key: "databases",
    title: "Databases",
    icon: "database",
    size: 5,
    items: [
      { label: "PostgreSQL", primary: true },
      { label: "Redis", primary: true },
      { label: "MongoDB", primary: true },
      { label: "MySQL" },
      { label: "Firebase" },
    ],
  },
  {
    key: "tools",
    title: "Tools & Other",
    icon: "wrench",
    size: 7,
    items: [
      { label: "Git", primary: true },
      { label: "Maven" },
      { label: "Postman" },
      { label: "Jira" },
      { label: "Bitbucket" },
      { label: "VS Code" },
      { label: "Android Studio" },
      { label: "Figma" },
      { label: "Flutter" },
    ],
  },
];

export const activity = [
  {
    type: "building",
    text: "Shadow Proxy — a transparent PostgreSQL proxy in Java 21 with Netty, virtual threads, two-level caching, and RabbitMQ audit telemetry.",
    time: "Now",
  },
  {
    type: "studying",
    text: "AWS Solutions Architect (Associate) — VPC design, IAM policies, multi-region fault tolerance.",
    time: "This week",
  },
  {
    type: "reading",
    text: "Designing Data-Intensive Applications — replication, consensus, and stream processing internals.",
    time: "This month",
  },
  {
    type: "exploring",
    text: "Apache Kafka streams for event-driven financial transaction processing at scale.",
    time: "Ongoing",
  },
];
