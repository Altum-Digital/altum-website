import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    name: "DK Motors",
    type: "Taller mecánico · Naucalpan",
    tier: "Total",
    accent: "lime",
    bg: "from-orange/15 to-lime/10",
    stats: [
      { v: "400+", l: "reseñas" },
      { v: "4.4/5", l: "Google" },
      { v: "13", l: "landings" },
    ],
    live: "#",
  },
  {
    name: "Café Artesano",
    type: "Cafetería · Demo",
    tier: "Crecimiento",
    accent: "teal",
    bg: "from-teal/15 to-teal/5",
    stats: [
      { v: "3", l: "páginas" },
      { v: "10 d", l: "entrega" },
      { v: "SEO", l: "local" },
    ],
    live: "#",
  },
  {
    name: "Belle Spa",
    type: "Spa & wellness · Demo",
    tier: "Presencia",
    accent: "navy",
    bg: "from-navy/10 to-navy/5",
    stats: [
      { v: "1 pg", l: "one-pager" },
      { v: "7 d", l: "entrega" },
      { v: "Mobile", l: "first" },
    ],
    live: "#",
  },
];

const tone: Record<string, string> = {
  lime: "text-lime-700",
  teal: "text-teal",
  navy: "text-navy",
};

const chipTone: Record<string, string> = {
  lime: "bg-lime/15 text-lime-700",
  teal: "bg-teal/15 text-teal",
  navy: "bg-navy/10 text-navy",
};

export function Work() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="trabajo" className="relative py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-navy text-xs font-semibold uppercase tracking-wider mb-4">Nuestro trabajo</p>
            <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
              Sitios que ya <span className="text-gradient-cool">viven en internet.</span>
            </h2>
          </div>
          <p className="text-navy/65 text-sm max-w-sm">
            Diseñamos para negocios reales, no maquetas. Cada proyecto es único y adaptado a su industria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`group relative rounded-2xl overflow-hidden card card-hover`}
              style={{ transitionDelay: `${i * 100}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
            >
              {/* Preview canvas */}
              <div className={`relative h-56 bg-gradient-to-br ${p.bg} flex items-center justify-center overflow-hidden`}>
                {/* Stylized browser mock */}
                <div className="absolute inset-6 rounded-lg bg-white shadow-lg overflow-hidden border border-navy/10">
                  <div className="h-4 bg-ivory-100 flex items-center gap-1 px-2 border-b border-navy/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <div className="p-3">
                    <div className="h-2 bg-navy/20 rounded w-3/4 mb-1.5" />
                    <div className="h-2 bg-navy/10 rounded w-1/2 mb-4" />
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="h-8 rounded bg-navy/10" />
                      <div className="h-8 rounded bg-navy/15" />
                      <div className="h-8 rounded bg-navy/10" />
                    </div>
                    <div className="mt-3 h-1.5 bg-navy/15 rounded w-full" />
                    <div className="mt-1 h-1.5 bg-navy/10 rounded w-4/5" />
                  </div>
                </div>
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 border border-navy/10 text-[10px] font-bold uppercase tracking-wider ${tone[p.accent]} shadow-sm`}>
                  {p.tier}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-navy text-xl tracking-tight">{p.name}</h3>
                <p className="text-xs text-navy/60 mt-1 mb-5">{p.type}</p>
                <div className="flex gap-6">
                  {p.stats.map((s) => (
                    <div key={s.l}>
                      <div className={`font-display font-extrabold text-lg ${tone[p.accent]}`}>{s.v}</div>
                      <div className="text-[10px] uppercase tracking-wider text-navy/55 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className={`inline-flex mt-5 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${chipTone[p.accent]}`}>
                  Live
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
