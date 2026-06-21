const links = [
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/12 text-canvas">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl text-gold">Lodha &amp; Sons</p>
            <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.28em] text-canvas/50">
              Precision crafted. Exceptionally finished.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative font-sans text-[11px] uppercase tracking-[0.2em] text-canvas/70 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-gold/10 pt-6 text-center font-sans text-[12px] text-canvas/40 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 Lodha &amp; Sons. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://www.automiqlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-canvas/60 underline-offset-4 transition-colors hover:text-gold-light hover:underline"
            >
              automiqlabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
