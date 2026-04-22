"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { IconMoon, IconSun } from "./Icons";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border-strong)] bg-[color:var(--surface)] text-[color:var(--fg)] hover:text-[color:var(--accent)] hover:border-[color:rgba(var(--accent-rgb),0.45)] transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? <IconMoon width={16} height={16} /> : <IconSun width={16} height={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
