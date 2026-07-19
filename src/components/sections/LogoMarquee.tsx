const logos = [
  'Northwind',
  'Lumen',
  'Vertex',
  'Cobalt',
  'Helix',
  'Aperture',
  'Quanta',
  'Meridian',
  'Orbital',
  'Foundry',
];

export function LogoMarquee() {
  return (
    <section className="border-y border-sand-300/70 bg-sand-100/60 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Trusted by teams shaping their industries
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-display text-2xl font-semibold text-ink/35 transition-colors hover:text-wine-700/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
