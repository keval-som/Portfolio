import Reveal from "./Reveal";

/**
 * Consistent section wrapper. The eyebrow renders the section's anchor as a
 * filesystem path (~/about) — same vocabulary as the ~/keval wordmark.
 */
export default function Section({
  id,
  title,
  tagline,
  children,
  className = "",
  maxWidth = "max-w-6xl",
}) {
  return (
    <section
      id={id}
      className={`mx-auto ${maxWidth} px-5 md:px-8 py-20 md:py-28 scroll-mt-24 ${className}`}
    >
      {title && (
        <header className="mb-10 md:mb-14">
          <Reveal>
            <span className="section-label">
              <span>
                <span className="opacity-60">~/</span>
                {id}
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{title}</h2>
          </Reveal>
          {tagline && (
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-2xl text-[color:var(--muted)] text-sm md:text-base leading-relaxed">
                {tagline}
              </p>
            </Reveal>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
