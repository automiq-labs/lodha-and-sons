"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCalmMotion } from "@/lib/use-calm-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-svh min-h-[680px] w-full overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(246,240,229,0.62) 0%, rgba(246,240,229,0.2) 46%, transparent 74%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 z-20 border border-gold/20 sm:inset-10"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mb-8 font-sans text-xs font-medium uppercase tracking-[0.34em] text-gold-deep sm:text-[13px]"
          style={{ textShadow: "0 1px 12px rgba(246,240,229,0.75)" }}
        >
          Fine Jewellery · Since 2008
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.25 }}
          className="relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
            style={{ background: "radial-gradient(circle at 50% 48%, rgba(212,184,119,0.5) 0%, transparent 46%)" }}
          />
          <Image
            src="/logo-mark.png"
            alt="Lodha & Sons monogram"
            width={324}
            height={451}
            priority
            className="h-56 w-auto object-contain sm:h-72"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease, delay: 0.55 }}
          className="mt-5 sm:mt-7"
        >
          <motion.h1
            className="bg-clip-text font-display font-semibold tracking-[0.06em] text-transparent text-5xl sm:text-6xl lg:text-7xl"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #6f521f 0%, #8c6b33 24%, #b68d4c 42%, #f3e2b0 50%, #b68d4c 58%, #8c6b33 76%, #6f521f 100%)",
              backgroundSize: "250% 100%",
              WebkitBackgroundClip: "text",
              filter: "drop-shadow(0 1px 2px rgba(70,50,20,0.35))",
            }}
            animate={calm ? undefined : { backgroundPosition: ["170% 50%", "-60% 50%"] }}
            transition={calm ? undefined : { duration: 5.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          >
            LODHA &amp; SONS
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, ease, delay: 1 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
          <motion.svg
            width="14" height="14" viewBox="0 0 24 24" className="text-gold"
            animate={calm ? undefined : { rotate: [0, 90], opacity: [0.7, 1, 0.7] }}
            transition={calm ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" fill="currentColor" />
          </motion.svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.2 }}
          className="mt-7 font-display text-sm font-medium uppercase tracking-[0.26em] text-gold-deep sm:text-base"
          style={{ textShadow: "0 1px 12px rgba(246,240,229,0.75)" }}
        >
          Precision Crafted · Exceptionally Finished
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink-muted">Scroll</span>
        <motion.span
          animate={calm ? undefined : { opacity: [0.2, 0.85, 0.2], scaleY: [0.7, 1, 0.7] }}
          transition={calm ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
