const clients = [
  'Northwind Bank',
  'Lumen Health',
  'Vertex Systems',
  'Cobalt FinTech',
  'Helix Education',
  'Aperture Labs',
  'Quanta Logistics',
  'Meridian Media',
  'Orbital Energy',
  'Foundry Group',
  'Praxis NGO',
  'Terra Agritech',
];

export function Clients() {
  return (
    <section className="border-y border-sand-300/70 bg-sand-100/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Trusted by organizations shaping Africa's future
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                className="font-display text-xl font-semibold text-ink/30 transition-colors hover:text-wine-700/60"
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
