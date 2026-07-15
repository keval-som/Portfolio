"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { IconClose, IconDownload, IconMenu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);

  // Scrolled state + progress bar (rAF-throttled, no animation library)
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(doc.scrollTop / max, 1)})`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Active section spy
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`rise fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[color:var(--bg)]/70 border-b border-[color:var(--border)]"
            : "bg-transparent"
        }`}
        style={{ "--d": "0.05s" }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between gap-4"
        >
          <a
            href="#top"
            className="mono text-[13px] text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
          >
            <span className="text-[color:var(--accent)]">~/</span>keval
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative px-3 py-2 mono text-[12.5px] rounded-md transition-colors ${
                      isActive
                        ? "text-[color:var(--accent)] bg-[color:rgba(var(--accent-rgb),0.08)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                    }`}
                  >
                    <span className="opacity-50">/</span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn btn-secondary h-9 px-3 text-[13px]"
            >
              <IconDownload width={15} height={15} />
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border-strong)] text-[color:var(--fg)] hover:text-[color:var(--accent)]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <IconClose width={18} height={18} /> : <IconMenu width={18} height={18} />}
            </button>
          </div>
        </nav>

        {/* Scroll progress bar */}
        <div
          ref={progressRef}
          style={{ transform: "scaleX(0)" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent)]"
        />
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="menu-in fixed inset-0 z-40 md:hidden bg-[color:var(--bg)]/95 backdrop-blur-xl pt-20 px-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className="rise"
                style={{ "--d": `${i * 0.05 + 0.1}s` }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline px-4 py-5 border-b border-[color:var(--border)] mono text-lg hover:text-[color:var(--accent)]"
                >
                  <span className="text-[color:var(--accent)] opacity-70">/</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              <IconDownload width={16} height={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
