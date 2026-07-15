import { profile, highlights } from "@/lib/data";
import { IconArrowRight, IconDownload } from "@/components/Icons";

// ─────────────────────────────────────────────────────────────────────────────
// Distributed trace of a loan application — Keval's actual production domain.
// Spans are illustrative but shaped like the real pipeline he shipped at Lentra.
// Entrance animation is pure CSS (.rise / .trace-*) so the hero text paints
// before hydration — framer-motion here cost ~2.5s of mobile LCP.
// ─────────────────────────────────────────────────────────────────────────────
const TRACE_TOTAL_MS = 60;
const TRACE_SPANS = [
  { name: "api-gateway", ms: 2, start: 0 },
  { name: "auth-service", ms: 6, start: 2 },
  { name: "eligibility-engine", ms: 38, start: 8 },
  { name: "decision-service", ms: 11, start: 46 },
];
const BAR_BASE_DELAY = 0.9;
const BAR_TIME_SCALE = 1.1; // seconds per full trace width

const spanDelay = (start) => BAR_BASE_DELAY + (start / TRACE_TOTAL_MS) * BAR_TIME_SCALE;
const spanDuration = (ms) => Math.max((ms / TRACE_TOTAL_MS) * BAR_TIME_SCALE, 0.18);
const STATUS_DELAY = spanDelay(46) + spanDuration(11) + 0.15;

function TracePanel() {
  return (
    <div className="panel p-5 md:p-6 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          trace · loan-application
        </span>
        <span className="mono text-[10px] text-[color:var(--success)] inline-flex items-center gap-1.5">
          <span className="dot-live !w-1.5 !h-1.5" />
          prod-lending
        </span>
      </div>

      {/* request line */}
      <div className="flex items-center gap-2 mb-5">
        <span className="mono text-[12px] text-[color:var(--fg-strong)]">
          POST /api/v2/applications
        </span>
        <span
          className="trace-pop mono ml-auto text-[10.5px] px-2 py-0.5 rounded-full border border-[color:rgba(var(--success-rgb),0.35)] bg-[color:rgba(var(--success-rgb),0.1)] text-[color:var(--success)]"
          style={{ "--d": `${STATUS_DELAY}s` }}
        >
          201 Created
        </span>
      </div>

      {/* spans */}
      <div className="space-y-2.5">
        {TRACE_SPANS.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="mono text-[10.5px] text-[color:var(--muted)] w-[128px] shrink-0 truncate">
              {s.name}
            </span>
            <div
              className="relative flex-1 h-2 rounded-sm overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, var(--border) 0 1px, transparent 1px 25%)",
              }}
            >
              <div
                className="trace-bar absolute top-0 h-full rounded-sm bg-[color:var(--accent)]"
                style={{
                  left: `${(s.start / TRACE_TOTAL_MS) * 100}%`,
                  width: `${(s.ms / TRACE_TOTAL_MS) * 100}%`,
                  opacity: 0.9,
                  "--d": `${spanDelay(s.start)}s`,
                  "--dur": `${spanDuration(s.ms)}s`,
                }}
              />
            </div>
            <span
              className="trace-in mono text-[10px] text-[color:var(--muted-2)] w-9 text-right shrink-0"
              style={{ "--d": `${spanDelay(s.start) + spanDuration(s.ms)}s` }}
            >
              {s.ms}ms
            </span>
          </div>
        ))}

        {/* async callback — the system he built to kill timeout failures */}
        <div className="flex items-center gap-3">
          <span className="mono text-[10.5px] text-[color:var(--muted)] w-[128px] shrink-0 truncate">
            callback-queue
          </span>
          <div className="relative flex-1 h-2 flex items-center">
            <div
              className="trace-in absolute left-[76.6%] right-0 border-t border-dashed border-[color:rgba(var(--accent-2-rgb),0.7)]"
              style={{ "--d": `${spanDelay(46) + 0.2}s` }}
            />
          </div>
          <span
            className="trace-in mono text-[10px] text-[color:var(--accent-2)] w-9 text-right shrink-0"
            style={{ "--d": `${spanDelay(46) + 0.3}s` }}
          >
            async
          </span>
        </div>
      </div>

      {/* footer */}
      <div
        className="trace-in mt-5 pt-3.5 border-t border-[color:var(--border)] flex items-center justify-between mono text-[10px] text-[color:var(--muted-2)]"
        style={{ "--d": `${STATUS_DELAY + 0.3}s` }}
      >
        <span>total 57ms</span>
        <span>retries 0</span>
        <span>
          p99 <span className="text-[color:var(--success)]">✓</span>
        </span>
        <span className="cursor-blink" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 w-full pt-32 md:pt-36 pb-20 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* ── Left: identity ── */}
          <div>
            <p
              className="rise mono text-[13px] text-[color:var(--accent)] mb-6 inline-flex items-center gap-2"
              style={{ "--d": "0.1s" }}
            >
              <span className="dot-live" aria-hidden="true" />
              Available for software engineering roles
            </p>

            {/* Headline block stays statically visible — it's the LCP element;
                fading it in from opacity 0 pushed mobile LCP past 4s. */}
            <h1 className="display uppercase text-[clamp(2.3rem,5.5vw,3.9rem)] font-extrabold leading-[0.98] text-[color:var(--fg-strong)]">
              Keval
              <br />
              Sompura
            </h1>

            <h2 className="mt-5 text-[clamp(1.15rem,2.4vw,1.55rem)] font-semibold tracking-[-0.01em] leading-[1.3] text-[color:var(--fg)] max-w-xl">
              I build backend systems that{" "}
              <span className="text-[color:var(--accent)]">don&apos;t break under pressure</span>.
            </h2>

            <p className="mt-4 max-w-xl text-[color:var(--muted)] leading-relaxed text-[15px]">
              {profile.subheadline}
            </p>

            <div className="rise mt-9 flex flex-wrap gap-3" style={{ "--d": "0.55s" }}>
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
            </div>
          </div>

          {/* ── Right: live trace ── */}
          <div className="rise" style={{ "--d": "0.5s" }}>
            <TracePanel />
          </div>
        </div>

        {/* ── Readout strip ── */}
        <div
          className="rise mt-14 md:mt-16 rounded-xl border border-[color:var(--border)] bg-[color:var(--border)] overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ "--d": "0.85s" }}
        >
          {highlights.map((h) => (
            <div key={h.label} className="bg-[color:var(--bg-elev)] px-4 py-4 md:py-5">
              <div className="display text-2xl md:text-[1.7rem] font-bold tracking-tight text-[color:var(--accent)]">
                {h.value}
              </div>
              <div className="mt-1.5 mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--muted-2)] leading-relaxed">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
