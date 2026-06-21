"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 80));

  // lock background scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close the menu, then smooth-scroll to the target section
  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = href;
    }, 280);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-canvas/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#home"
            onClick={go("#home")}
            className="font-display font-medium text-gold-deep tracking-[0.18em] text-sm sm:text-base"
            style={{ textShadow: scrolled ? "none" : "0 1px 10px rgba(255,250,240,0.7)" }}
          >
            LODHA &amp; SONS
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative font-sans text-[11px] uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-gold"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="relative h-5 w-7 md:hidden"
          >
            <span className="absolute left-0 top-[3px] block h-px w-7 bg-gold-deep" />
            <span className="absolute left-0 top-1/2 block h-px w-7 -translate-y-1/2 bg-gold-deep" />
            <span className="absolute bottom-[3px] left-0 block h-px w-7 bg-gold-deep" />
          </button>
        </nav>
      </motion.header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease }}
            className="fixed inset-0 z-[60] flex flex-col bg-canvas md:hidden"
          >
            {/* soft gold glow behind the links */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 45% at 50% 45%, rgba(212,184,119,0.18) 0%, transparent 70%)",
              }}
            />

            {/* top row: wordmark + close */}
            <div className="relative flex items-center justify-between px-6 py-5">
              <span className="font-display font-medium text-gold-deep tracking-[0.18em] text-sm">
                LODHA &amp; SONS
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative h-6 w-6"
              >
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold-deep" />
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold-deep" />
              </button>
            </div>

            {/* centered links */}
            <nav className="relative flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={go(l.href)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
                  className="font-display text-4xl tracking-wide text-ink transition-colors active:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}

              {/* gold spark divider */}
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mt-2 text-gold"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.1 + links.length * 0.08 }}
              >
                <path
                  d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z"
                  fill="currentColor"
                />
              </motion.svg>

              {/* Enquire CTA */}
              <motion.a
                href="#contact"
                onClick={go("#contact")}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.2 + links.length * 0.08 }}
                className="mt-2 bg-gold px-10 py-3 font-sans text-[11px] uppercase tracking-[0.28em] text-canvas transition-opacity active:opacity-90"
              >
                Enquire
              </motion.a>
            </nav>

            {/* bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.35 + links.length * 0.08 }}
              className="relative pb-10 text-center font-display italic text-gold-deep text-sm"
            >
              Precision crafted. Exceptionally finished.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
