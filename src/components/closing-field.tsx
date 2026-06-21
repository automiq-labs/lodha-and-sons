"use client";

import { motion } from "framer-motion";
import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";

const grain =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function ClosingField() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-espresso">
      {/* Gold smoke */}
      <div className="absolute inset-0 opacity-[0.5]">
        <EtherealShadow
          color="rgba(201, 168, 76, 0.42)"
          animation={{ scale: 50, speed: 78 }}
          noise={{ opacity: 0.18, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Vignette — edges to true black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 82% 82% at 50% 34%, rgba(15,11,6,0.4) 0%, rgba(5,3,1,0.93) 100%)",
        }}
      />

      {/* Warm glow near the headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 56% 42% at 50% 26%, rgba(182,141,76,0.16) 0%, transparent 66%)",
        }}
      />

      {/* LS watermark — faint maker's seal, slowly breathing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src="/logo-mark.png"
          alt=""
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="w-[50vw] max-w-[500px] opacity-[0.06]"
        />
      </motion.div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: `url("${grain}")`, backgroundSize: "160px 160px" }}
      />
    </div>
  );
}
