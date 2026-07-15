"use client";

import { createElement, useEffect, useRef } from "react";

/**
 * Reveal — scroll-triggered fade/slide wrapper.
 * CSS transition + IntersectionObserver (replaces framer-motion's whileInView
 * for a fraction of the JS cost — the motion curve and timing are identical).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  once = true,
  as = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            if (once) io.disconnect();
          } else if (!once) {
            el.classList.remove("in-view");
          }
        });
      },
      { rootMargin: "-80px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`,
      style: { "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` },
      ...rest,
    },
    children,
  );
}
