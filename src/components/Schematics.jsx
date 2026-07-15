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

/* ── Ride Share — geo points, matcher, city-block route ── */
export function RideShareSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      className="w-full h-full"
      role="img"
      aria-label="Ride Share architecture: rider and driver locations feed a geospatial matcher backed by a MongoDB 2dsphere index, which computes a matched route between them"
    >
      {/* rider */}
      <circle cx={78} cy={64} r={14} className="ping" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <circle cx={78} cy={64} r={5} fill="var(--accent)" />
      <text x={78} y={44} textAnchor="middle" className="schem-sub">
        rider
      </text>

      {/* driver */}
      <circle
        cx={330}
        cy={150}
        r={14}
        className="ping"
        fill="none"
        stroke="var(--accent-2)"
        strokeWidth="1"
        style={{ animationDelay: "1.2s" }}
      />
      <circle cx={330} cy={150} r={5} fill="var(--accent-2)" />
      <text x={330} y={178} textAnchor="middle" className="schem-sub">
        driver
      </text>

      {/* matcher */}
      <Box x={155} y={88} w={110} h={44} title="geo-matcher" sub="2dsphere index" accent />
      <Led x={257} y={96} />

      {/* location pings into the matcher */}
      <Wire d="M83,69 C112,92 130,100 155,106" dur={2.6} />
      <Wire d="M325,145 C300,133 290,122 265,114" dur={2.6} delay={-1.3} />

      {/* matched route — city blocks */}
      <Wire d="M83,69 L83,150 L200,150 L200,196 L330,196 L330,150" dur={4.5} delay={-2} dashed cool />
      <text x={210} y={212} textAnchor="middle" className="schem-tag">
        matched route · 30% faster lookup
      </text>
    </svg>
  );
}

export const SCHEMATICS = {
  "shadow-proxy": ShadowProxySchematic,
  "advisor-ai": AdvisorAiSchematic,
  "ride-share": RideShareSchematic,
};
