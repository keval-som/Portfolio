import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";
import { SCHEMATICS } from "@/components/Schematics";
import { IconArrowUpRight, IconGitHub } from "@/components/Icons";

function CardLinks({ p, className = "" }) {
  return (
    <div className={`flex items-center flex-wrap gap-2 ${className}`}>
      {p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary h-9 px-3.5 text-[12.5px]"
        >
          Live demo
          <IconArrowUpRight width={14} height={14} />
        </a>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost h-9 px-3.5 text-[12.5px]"
        >
          <IconGitHub width={15} height={15} />
          Source
        </a>
      )}
      {(p.links || []).map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost h-9 px-3.5 text-[12.5px]"
        >
          {l.label}
          <IconArrowUpRight width={14} height={14} />
        </a>
      ))}
    </div>
  );
}

function TechPills({ tech }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span key={t} className="pill">
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ p }) {
  const Schematic = SCHEMATICS[p.slug];
  return (
    <Reveal as="article" className="panel panel-hover group overflow-hidden">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        {/* Copy */}
        <div className="p-6 md:p-8 flex flex-col">
          <p className="mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--accent)] mb-3">
            Featured build · {p.tagline}
          </p>
          <h3 className="display text-2xl md:text-[1.7rem] font-bold text-[color:var(--fg-strong)]">
            {p.title}
          </h3>
          <p className="mt-3.5 text-[14px] text-[color:var(--muted)] leading-relaxed flex-1">
            {p.desc}
          </p>
          <div className="mt-5">
            <TechPills tech={p.tech} />
          </div>
          <CardLinks p={p} className="mt-6" />
        </div>

        {/* Live schematic — pans horizontally on small screens so labels stay legible */}
        <div className="schem border-t lg:border-t-0 lg:border-l border-[color:var(--border)] p-4 md:p-6 flex items-center min-h-[240px] md:min-h-[280px] overflow-x-auto">
          <div className="min-w-[480px] w-full lg:min-w-0 h-full flex items-center">
            {Schematic && <Schematic />}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ p, delay }) {
  const Schematic = SCHEMATICS[p.slug];
  return (
    <Reveal as="article" delay={delay} className="panel panel-hover group overflow-hidden flex flex-col">
      {/* Live schematic thumbnail */}
      <div className="schem border-b border-[color:var(--border)] p-4 h-48 md:h-52 shrink-0">
        {Schematic && <Schematic />}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)] mb-2">
          {p.tagline}
        </p>
        <h3 className="display text-xl font-bold text-[color:var(--fg-strong)]">{p.title}</h3>
        <p className="mt-3 text-[13.5px] text-[color:var(--muted)] leading-relaxed flex-1">
          {p.desc}
        </p>
        <div className="mt-4">
          <TechPills tech={p.tech} />
        </div>
        <CardLinks p={p} className="mt-5" />
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Things I've built."
      tagline="Every card is the system's real architecture, live — packets included."
    >
      <div className="space-y-6">
        {featured && <FeaturedCard p={featured} />}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} p={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </Section>
  );
}
