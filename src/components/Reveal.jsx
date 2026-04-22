"use client";

import { motion } from "framer-motion";

/**
 * Reveal — lightweight scroll-triggered fade/slide wrapper.
 * Uses Framer Motion's `whileInView` so it's declarative and respects
 * the `reveal-init` CSS for prefers-reduced-motion.
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
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px 0px -40px 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
