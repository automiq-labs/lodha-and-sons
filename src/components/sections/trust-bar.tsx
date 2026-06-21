"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

type Stat =
  | { value: string; label: string }
  | { count: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: "2008", label: "Established" },
  { count: 10000, suffix: "+", label: "Pieces Crafted" },
  { value: "Global", label: "B2B & B2C Export" },
  { value: "In-House", label: "Master Artisans" },
];

export default function TrustBar() {
  return (
    <section id="heritage" className="relative px-6 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 84% 82% at 50% 50%, rgba(238,228,206,0.55) 0%, rgba(238,228,206,0.18) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl border-y border-line py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: i * 0.12 }}
              className="flex flex-col items-center text-center md:border-l md:border-line md:first:border-l-0"
            >
              <div className="font-display text-ink text-4xl sm:text-5xl">
                {"count" in s ? (
                  <>
                    <CountUp to={s.count} />
                    <span className="text-gold">{s.suffix}</span>
                  </>
                ) : (
                  s.value
                )}
              </div>
              <div className="mt-3 font-sans text-[11px] uppercase tracking-[0.25em] text-gold-deep">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
