import Reveal from "./Reveal";

/**
 * Consistent section wrapper with label, title, and optional tagline.
 */
export default function Section({
  id,
  number,
  label,
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
      {(label || title) && (
        <header className="mb-10 md:mb-14">
          {label && (
            <Reveal>
              <span className="section-label">
                {number && <span className="mono">{number}.</span>}
                <span>{label}</span>
              </span>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.06}>
              <h2 className="section-title">{title}</h2>
            </Reveal>
          )}
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
