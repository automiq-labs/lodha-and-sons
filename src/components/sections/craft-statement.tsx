"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";

const goldGradient =
  "linear-gradient(100deg, #8c6b33 0%, #b68d4c 26%, #e6cf94 46%, #fff7e6 50%, #e6cf94 54%, #b68d4c 74%, #8c6b33 100%)";

const line: { word: string; gold?: boolean }[] = [
  { word: "We" },
  { word: "finish" },
  { word: "every" },
  { word: "piece" },
  { word: "by" },
  { word: "hand," },
  { word: "until" },
  { word: "precision", gold: true },
  { word: "becomes" },
  { word: "perfection.", gold: true },
];

function Word({
  children,
  gold,
  range,
  progress,
}: {
  children: React.ReactNode;
  gold?: boolean;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);

  if (gold) {
    return (
      <motion.span
        style={{
          opacity,
          backgroundImage: goldGradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="mr-[0.3em] inline-block italic"
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
      style={{ opacity, color: "#fbf5ea" }}
      className="mr-[0.3em] inline-block"
    >
      {children}
    </motion.span>
  );
}

export default function CraftStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} id="craft" className="relative h-[280vh] bg-espresso">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        {/* Gold smoke */}
        <div className="absolute inset-0 opacity-[0.6]">
          <EtherealShadow
            color="rgba(201, 168, 76, 0.45)"
            animation={{ scale: 50, speed: 80 }}
            noise={{ opacity: 0.18, scale: 1.2 }}
            sizing="fill"
          />
        </div>

        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 76% 70% at 50% 46%, rgba(15,11,6,0.42) 0%, rgba(5,3,1,0.94) 100%)",
          }}
        />

        {/* Warm pool */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 54% 44% at 50% 46%, rgba(182,141,76,0.13) 0%, transparent 70%)",
          }}
        />

        <p className="relative z-10 max-w-4xl text-center font-statement leading-[1.22] text-4xl sm:text-5xl lg:text-7xl">
          {line.map((w, i) => {
            const start = 0.08 + (i / line.length) * 0.82;
            const end = 0.08 + ((i + 1) / line.length) * 0.82;
            return (
              <Word key={i} gold={w.gold} range={[start, end]} progress={scrollYProgress}>
                {w.word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
