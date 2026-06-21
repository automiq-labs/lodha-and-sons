"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Tile = { src: string; label: string; alt: string };

// LEFT (portrait, 5)
const left: Tile[] = [
  { src: "/images/products/necklace-3.jpg", label: "Yellow Gold", alt: "Handcrafted yellow gold necklace" },
  { src: "/images/products/ring-1.jpg", label: "Rose Gold & Diamond", alt: "Rose gold ring set with brilliant-cut diamonds" },
  { src: "/images/products/earring-2.jpg", label: "Chandelier", alt: "Gold and diamond chandelier earrings" },
  { src: "/images/products/necklace-4.jpg", label: "Filigree Set", alt: "Gold filigree necklace with matching earrings" },
  { src: "/images/products/earring-3.png", label: "Antique Gold", alt: "Antique gold temple-style chandelier earrings" },
];

// MIDDLE (sticky, landscape, 3) — widest statement pieces
const middle: Tile[] = [
  { src: "/images/products/necklace-1.jpg", label: "Diamond Choker", alt: "Diamond bridal choker necklace" },
  { src: "/images/products/necklace-2.jpg", label: "Ruby & Kundan", alt: "Ruby and kundan choker necklace" },
  { src: "/images/products/necklace-5.jpg", label: "Gold Choker", alt: "Traditional handcrafted gold beaded choker necklace" },
];

// RIGHT (portrait, 5)
const right: Tile[] = [
  { src: "/images/products/bangle-1.jpg", label: "Diamond Bangle", alt: "Gold bangle with pavé diamond stations" },
  { src: "/images/products/earring-1.jpg", label: "Diamond Drops", alt: "Diamond drop earrings" },
  { src: "/images/products/bracelet-1.jpg", label: "Diamond Bracelet", alt: "Gold and diamond bracelet" },
  { src: "/images/products/ring-2.jpg", label: "Pavé Crossover", alt: "Rose gold pavé crossover ring" },
  { src: "/images/products/necklace-6.png", label: "Polki & Enamel", alt: "Polki and kundan necklace with blue enamel meenakari work" },
];

// Mobile order — 12 interleaved standard tiles, single full-width Diamond Choker finale.
const all: Tile[] = [
  left[0],   // necklace-3  Yellow Gold
  right[1],  // earring-1   Diamond Drops
  right[0],  // bangle-1    Diamond Bangle
  left[1],   // ring-1      Rose Gold & Diamond
  middle[1], // necklace-2  Ruby & Kundan
  left[4],   // earring-3   Antique Gold
  left[3],   // necklace-4  Filigree Set
  right[2],  // bracelet-1  Diamond Bracelet
  left[2],   // earring-2   Chandelier
  middle[2], // necklace-5  Gold Choker
  right[3],  // ring-2      Pavé Crossover
  right[4],  // necklace-6  Polki & Enamel
  middle[0], // necklace-1  Diamond Choker   ← FEATURE finale
];

const featureSrcs = new Set<string>([
  "/images/products/necklace-1.jpg",
]);

function GalleryTile({ tile, fill = false }: { tile: Tile; fill?: boolean }) {
  return (
    <figure
      className={`group relative overflow-hidden border border-line bg-white ${
        fill ? "aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[4/5]"
      }`}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes="33vw"
        className={`object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
          fill ? "p-2 sm:p-4" : "p-4 sm:p-6"
        }`}
      />
      <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-4">
        <span className="h-px w-5 bg-gold/50" />
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-muted transition-colors duration-500 group-hover:text-gold-deep">
          {tile.label}
        </span>
      </figcaption>
    </figure>
  );
}

function MobileTile({ tile, index, feature = false }: { tile: Tile; index: number; feature?: boolean }) {
  return (
    <figure
      className={`group relative overflow-hidden border border-line bg-white ${
        feature ? "aspect-[3/2]" : "aspect-[4/5]"
      }`}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 9 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        <Image
          src={tile.src}
          alt={tile.alt}
          fill
          sizes={feature ? "100vw" : "50vw"}
          className={`object-contain ${feature ? "p-6" : "p-3"}`}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ x: "-130%" }}
        animate={{ x: "160%" }}
        transition={{
          duration: feature ? 1.9 : 1.5,
          repeat: Infinity,
          repeatDelay: 3.5 + (index % 4),
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        style={{
          background:
            "linear-gradient(105deg, transparent 38%, rgba(255,247,230,0.5) 50%, transparent 62%)",
        }}
      />

      <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-3 sm:p-4">
        <span className="h-px w-4 bg-gold/50 sm:w-5" />
        <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-ink-muted sm:text-[10px] sm:tracking-[0.25em]">
          {tile.label}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="collections" className="bg-canvas">
      <div className="px-6 pt-24 pb-14 text-center sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold-deep"
        >
          The Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mt-4 font-display text-ink text-4xl sm:text-5xl"
        >
          Let the work speak
        </motion.h2>
      </div>

      {/* MOBILE — 2-column grid with motion; single full-width Diamond Choker finale */}
      <div className="px-4 pb-20 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          {all.map((t, i) => {
            const feature = featureSrcs.has(t.src);
            return (
              <motion.div
                key={`m-${i}`}
                className={feature ? "col-span-2" : ""}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease, delay: (i % 2) * 0.08 }}
              >
                <MobileTile tile={t} index={i} feature={feature} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP — sticky-scroll 3-column layout. Sides 5/5 portrait (content-start), middle 3 sticky landscape. */}
      <div className="mx-auto hidden max-w-7xl px-4 pb-24 md:block">
        <div className="grid grid-cols-3 gap-3">
          <div className="grid gap-3 content-start">
            {left.map((t, i) => (
              <GalleryTile key={`l-${i}`} tile={t} />
            ))}
          </div>
          <div className="grid gap-3 md:sticky md:top-0 md:h-screen md:grid-rows-3 md:py-3">
            {middle.map((t, i) => (
              <GalleryTile key={`mid-${i}`} tile={t} fill />
            ))}
          </div>
          <div className="grid gap-3 content-start">
            {right.map((t, i) => (
              <GalleryTile key={`r-${i}`} tile={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
