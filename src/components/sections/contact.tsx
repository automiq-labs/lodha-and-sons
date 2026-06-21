"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const WHATSAPP =
  "https://wa.me/919829013511?text=" +
  encodeURIComponent("Hello Lodha & Sons, I'd like to enquire about a commission.");
const EMAIL =
  "mailto:siddharthalodha@yahoo.com?subject=" + encodeURIComponent("Enquiry — Lodha & Sons");

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
    </svg>
  );
}

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 pt-28 pb-24 text-canvas sm:pt-36 sm:pb-28"
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div {...fade} transition={{ duration: 1, ease }} className="flex items-center justify-center gap-3">
          <Spark className="h-3 w-3 text-gold" />
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold-light">Enquiries</p>
          <Spark className="h-3 w-3 text-gold" />
        </motion.div>

        <motion.h2
          {...fade}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mt-7 font-display text-4xl leading-[1.15] sm:text-6xl"
        >
          Let&apos;s create something <span className="text-gold">exceptional</span>.
        </motion.h2>

        <motion.p
          {...fade}
          transition={{ duration: 1, ease, delay: 0.18 }}
          className="mx-auto mt-6 max-w-lg font-sans text-[15px] leading-relaxed text-canvas/70"
        >
          From a single bespoke piece to a full production run — tell us what you have in
          mind. We reply personally to every enquiry.
        </motion.p>

        <motion.div
          {...fade}
          transition={{ duration: 1, ease, delay: 0.26 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 font-sans text-[13px] uppercase tracking-[0.18em] text-espresso transition-colors duration-300 hover:bg-gold-light"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Get in Touch
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center gap-2.5 border border-gold/40 px-7 py-3.5 font-sans text-[13px] uppercase tracking-[0.18em] text-gold-light transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
