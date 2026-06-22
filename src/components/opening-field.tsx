"use client";

import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";
import { useCalmMotion } from "@/lib/use-calm-motion";

const grain =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function OpeningField() {
  const calm = useCalmMotion();
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 22%, #f8f1e3 0%, #ecdfc6 56%, #e3d4b6 100%)",
        }}
      />
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(58, 42, 22, 0.5)"
          animation={{ scale: 55, speed: 95 }}
          noise={{ opacity: 0.15, scale: 1.3 }}
          sizing="fill"
          calm={calm}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 26% at 50% 32%, rgba(214,182,112,0.32) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{ backgroundImage: `url("${grain}")`, backgroundSize: "160px 160px" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 96% 78% at 50% 38%, transparent 34%, rgba(26,20,13,0.08) 76%, rgba(26,20,13,0.18) 100%)",
        }}
      />
    </div>
  );
}
