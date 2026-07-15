// ─────────────────────────────────────────────────────────────────────────────
// Live architecture schematics — each project's real topology, drawn as a
// wiring diagram with packets travelling the wires. Pure SVG + CSS animation
// (see .pkt / .ping / .schem-led in globals.css). Respects reduced motion.
// ─────────────────────────────────────────────────────────────────────────────

function Box({ x, y, w, h, title, sub, accent = false }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        className={`schem-box${accent ? " schem-box-accent" : ""}`}
      />
      <text x={cx} y={sub ? cy - 2.5 : cy + 3.5} textAnchor="middle" className="schem-title">
        {title}
      </text>
      {sub && (
        <text x={cx} y={cy + 11} textAnchor="middle" className="schem-sub">
          {sub}
        </text>
      )}
    </g>
  );
}

function Wire({ d, delay = 0, dur = 3, dashed = false, cool = false }) {
  return (
    <g>
      <path d={d} className={`schem-wire${dashed ? " schem-wire-dashed" : ""}`} />
      <path
        d={d}
        pathLength="100"
        className={`pkt${cool ? " pkt-cool" : ""}`}
        style={{ "--pkt-delay": `${delay}s`, "--pkt-dur": `${dur}s` }}
      />
    </g>
  );
}

function Led({ x, y, delay = 0 }) {
  return (
    <circle cx={x} cy={y} r="2.5" className="schem-led" style={{ animationDelay: `${delay}s` }} />
  );
}

/* ── Shadow Proxy — client → proxy internals → primary/replica + async audit ── */
export function ShadowProxySchematic() {
  return (
    <svg
      viewBox="0 0 560 250"
      className="w-full h-full"
      role="img"
      aria-label="Shadow Proxy architecture: client traffic flows through a proxy with wire decoder, two-level cache, AST router and circuit breaker, splitting reads to a Postgres replica and writes to the primary, with async audit telemetry to RabbitMQ"
    >
      {/* client */}
      <Box x={18} y={105} w={82} h={40} title="client" sub="unchanged" />

      {/* proxy enclosure */}
      <rect x={138} y={36} width={186} height={178} rx="8" className="schem-frame" />
      <text x={146} y={54} className="schem-tag">
        SHADOW-PROXY · JAVA 21
      </text>
      <Box x={154} y={64} w={154} h={28} title="netty wire decoder" />
      <Box x={154} y={102} w={154} h={28} title="cache · L1 + L2" accent />
      <Box x={154} y={140} w={154} h={28} title="ast router" />
      <Box x={154} y={178} w={154} h={28} title="circuit breaker" accent />

      {/* databases + queue */}
      <Box x={418} y={64} w={122} h={38} title="postgres" sub="primary · writes" />
      <Box x={418} y={130} w={122} h={38} title="postgres" sub="replica · reads" />
      <Box x={418} y={196} w={122} h={34} title="rabbitmq" sub="audit telemetry" />
      <Led x={532} y={72} />
      <Led x={532} y={138} delay={0.8} />

      {/* wires */}
      <Wire d="M100,125 L138,125" dur={2.2} />
      <Wire d="M324,118 C364,118 380,83 418,83" dur={2.8} delay={-0.5} />
      <Wire d="M324,132 C364,132 380,149 418,149" dur={2.8} delay={-1.6} />
      <Wire d="M310,214 C352,236 382,213 418,213" dur={4.2} delay={-2} dashed cool />

      <text x={372} y={96} className="schem-tag">
        writes
      </text>
      <text x={372} y={162} className="schem-tag">
        reads
      </text>
      <text x={330} y={240} className="schem-tag">
        async
      </text>
    </svg>
  );
}

/* ── Advisor AI — browser ⇄ fastapi → mongo / rag, SSE stream back ── */
export function AdvisorAiSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      className="w-full h-full"
      role="img"
      aria-label="Advisor AI architecture: a React browser client calls a FastAPI backend which reads MongoDB and a LangGraph RAG pipeline running LLaMA-2, streaming responses back over SSE"
    >
      <Box x={18} y={88} w={84} h={42} title="browser" sub="react ui" />
      <Box x={158} y={88} w={100} h={42} title="fastapi" sub="cloud run" accent />
      <Box x={316} y={30} w={86} h={38} title="mongodb" sub="atlas" />
      <Box x={306} y={128} w={106} h={58} title="langgraph" sub="rag · llama-2-7b" accent />
      <Led x={394} y={38} />
      <Led x={404} y={136} delay={1.2} />

      <Wire d="M102,109 L158,109" dur={2.4} />
      <Wire d="M258,100 C292,90 296,56 316,52" dur={3} delay={-1} />
      <Wire d="M258,118 C292,128 288,150 306,152" dur={3} delay={-0.4} />
      {/* SSE stream back to the browser — fast, cool-colored packets */}
      <Wire d="M158,124 C138,148 122,148 102,124" dur={1.6} delay={-0.8} dashed cool />

      <text x={112} y={160} className="schem-tag">
        sse stream
      </text>
      <text x={272} y={80} className="schem-tag">
        queries
      </text>
      <text x={266} y={148} className="schem-tag">
        inference
      </text>
    </svg>
  );
}

/* ── PlasmIQ — data feeds → smart-suggest → booking, plus concierge safety path ── */
export function PlasmIqSchematic() {
  return (
    <svg
      viewBox="0 0 420 240"
      className="w-full h-full"
      role="img"
      aria-label="PlasmIQ architecture: travel time, weather and live wait-time feeds flow into a smart-suggest engine that ranks donation slots by friction score and books them; in parallel, concierge chat goes through GPT-4o with function calling and an inhibitor API safety screen before responding"
    >
      {/* inbound data feeds */}
      <Box x={14} y={8} w={80} h={22} title="travel time" />
      <Box x={14} y={38} w={80} h={22} title="weather" />
      <Box x={14} y={68} w={80} h={22} title="wait times" />

      {/* donor */}
      <Box x={14} y={104} w={70} h={34} title="donor" />

      {/* smart-suggest engine */}
      <Box x={140} y={52} w={110} h={46} title="smart-suggest" sub="ranks by friction" accent />

      {/* slot booking */}
      <Box x={310} y={56} w={96} h={38} title="slot booking" />
      <Led x={398} y={64} />

      {/* feed wires */}
      <Wire d="M94,19 C120,20 128,50 140,58" dur={3} delay={-0.2} />
      <Wire d="M94,49 C118,50 126,62 140,68" dur={3} delay={-1.1} />
      <Wire d="M94,79 C118,80 128,80 140,80" dur={3} delay={-2} />
      {/* donor → engine */}
      <Wire d="M84,118 C112,116 124,100 140,92" dur={2.6} />
      {/* engine → booking, carrying the score */}
      <Wire d="M250,75 L310,75" dur={2.4} delay={-0.8} />
      <text x={256} y={68} className="schem-tag">
        friction score
      </text>

      {/* concierge path */}
      <Box x={14} y={178} w={92} h={36} title="concierge chat" />
      <Box x={146} y={178} w={96} h={36} title="gpt-4o" sub="function calling" />
      <Box x={282} y={178} w={92} h={36} title="inhibitor api" sub="safety screen" accent />

      <Wire d="M106,196 L146,196" dur={2.4} delay={-0.3} />
      <Wire d="M242,196 L282,196" dur={2.4} delay={-1.4} />
      {/* screened response back to chat */}
      <Wire d="M282,208 C230,232 160,232 106,208" dur={2} delay={-1} dashed cool />
      <text x={172} y={236} className="schem-tag">
        screened response
      </text>
    </svg>
  );
}

export const SCHEMATICS = {
  "shadow-proxy": ShadowProxySchematic,
  "advisor-ai": AdvisorAiSchematic,
  plasmiq: PlasmIqSchematic,
};
