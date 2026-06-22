"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCalmMotion } from "@/lib/use-calm-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const goldGradient =
  "linear-gradient(100deg, #8c6b33 0%, #b68d4c 26%, #e6cf94 46%, #fff7e6 50%, #e6cf94 54%, #b68d4c 74%, #8c6b33 100%)";

function Spark({ className = "", calm = false }: { className?: string; calm?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
      animate={calm ? undefined : { rotate: [0, 90], opacity: [0.6, 1, 0.6] }}
      transition={calm ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
    </motion.svg>
  );
}

function Gleam({
  children,
  className = "",
  duration = 6,
  calm = false,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  calm?: boolean;
}) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: goldGradient,
        backgroundSize: "250% 100%",
        WebkitBackgroundClip: "text",
      }}
      animate={calm ? undefined : { backgroundPosition: ["180% 50%", "-70% 50%"] }}
      transition={calm ? undefined : { duration, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const quote: { w: string; gold?: boolean }[] = [
  { w: "Perfection", gold: true },
  { w: "is" },
  { w: "not" },
  { w: "where" },
  { w: "we" },
  { w: "finish." },
  { w: "It" },
  { w: "is" },
  { w: "where" },
  { w: "we" },
  { w: "begin." },
];

const heading = ["The", "House", "of", "Lodha", "&", "Sons"];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.1 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const pillarContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};
const pillarItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const ruleItem = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease } },
};

const pillars = [
  { k: "In-House Craft", v: "Design to final finish" },
  { k: "B2B · B2C · Export", v: "Partners of every scale" },
  { k: "Worldwide", v: "Made in India, worn globally" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wmY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-canvas py-16 sm:py-24"
    >
      {/* LS watermark — embossed, breathing, parallax */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease }}
        style={{ y: wmY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src="/logo-mark.png"
          alt=""
          animate={calm ? undefined : { scale: [1, 1.05, 1], rotate: [0, 0.8, 0] }}
          transition={calm ? undefined : { duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="w-[68vw] max-w-[680px] opacity-[0.06] mix-blend-multiply"
        />
      </motion.div>

      {/* FOUNDER */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          {...fade}
          transition={{ duration: 1, ease }}
          className="flex items-center justify-center gap-3"
        >
          <Spark className="h-3 w-3 text-gold" calm={calm} />
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold-deep">
            The Founder
          </p>
          <Spark className="h-3 w-3 text-gold" calm={calm} />
        </motion.div>

        <motion.blockquote
          variants={wordContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-7 font-display text-3xl leading-[1.2] text-ink sm:text-5xl"
        >
          {quote.map((q, i) => (
            <motion.span key={i} variants={wordItem} className="mr-[0.22em] inline-block">
              {q.gold ? <Gleam duration={5.5} calm={calm}>{q.w}</Gleam> : q.w}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.div
          {...fade}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="mt-8"
        >
          <p className="font-display text-xl text-ink sm:text-2xl">Siddharth Lodha</p>
          <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.28em] text-ink-muted">
            Founder, Lodha &amp; Sons
          </p>
        </motion.div>
      </div>

      {/* divider */}
      <motion.div
        {...fade}
        transition={{ duration: 1, ease }}
        className="relative z-10 mx-auto my-12 flex max-w-2xl items-center gap-4 px-6 sm:my-16"
      >
        <span className="h-px flex-1 bg-line" />
        <Spark className="h-3.5 w-3.5 text-gold" calm={calm} />
        <span className="h-px flex-1 bg-line" />
      </motion.div>

      {/* BRAND */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          variants={wordContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-3xl text-ink sm:text-4xl"
        >
          {heading.map((w, i) => (
            <motion.span key={i} variants={wordItem} className="mr-[0.2em] inline-block">
              {w === "&" ? "\u0026" : w}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          {...fade}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl font-sans text-[15px] leading-relaxed text-ink/75"
        >
          Lodha &amp; Sons is a fine-jewellery manufacturer — a workshop where master
          artisans design, craft, and finish every piece under one roof. From a single
          bespoke commission to full production runs, we partner with jewellers, brands,
          and private clients alike. B2B, B2C, or export; across India and around the
          world — the standard never changes.
        </motion.p>

        <motion.p
          {...fade}
          transition={{ duration: 1, ease, delay: 0.18 }}
          className="mt-7 text-lg sm:text-xl"
        >
          <Gleam className="font-display italic" duration={6.5} calm={calm}>
            Precision crafted. Exceptionally finished.
          </Gleam>
        </motion.p>

        {/* pillars */}
        <motion.div
          variants={pillarContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6"
        >
          {pillars.map((p) => (
            <motion.div key={p.k} variants={pillarItem} className="flex flex-col items-center">
              <motion.span
                variants={ruleItem}
                className="mb-4 h-px w-8 origin-center bg-gold/50"
              />
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-deep">
                {p.k}
              </p>
              <p className="mt-2 font-sans text-[13px] text-ink-muted">{p.v}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
