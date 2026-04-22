import { useReveal } from "@/hooks/useReveal";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    accent: "teal",
    title: "Encontrados en Google",
    body: "Schema.org, meta tags, Core Web Vitals y SEO local bien hecho. Tu negocio aparece cuando te buscan.",
    metric: "Top 3 local",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
    accent: "orange",
    title: "Entrega en días",
    body: "Presencia en 5–7 días. Total en 20–30. Sin agencias lentas, sin promesas eternas. Te entregamos.",
    metric: "5× más rápido",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M3 12l5 5L21 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "lime",
    title: "Sitios que venden",
    body: "Formulario → WhatsApp, CTA claros, pruebas sociales y landings por servicio. El sitio trabaja por ti.",
    metric: "3× conversión",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    accent: "navy",
    title: "Diseño a la medida",
    body: "Nada de templates genéricos. Diseñamos cada sitio con la personalidad de tu marca.",
    metric: "100% custom",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string }> = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/25" },
  orange: { bg: "bg-orange/10", text: "text-orange-600", border: "border-orange/25" },
  lime: { bg: "bg-lime/10", text: "text-lime-700", border: "border-lime/25" },
  navy: { bg: "bg-navy/8", text: "text-navy", border: "border-navy/20" },
};

export function Philosophy() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="filosofia" className="relative py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-16">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">Qué hacemos</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Sitios web hechos para <span className="text-gradient-cool">traer clientes</span>, no solo para existir.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const c = accentMap[p.accent];
            return (
              <div
                key={p.title}
                className={`group card card-hover rounded-2xl p-7`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl ${c.bg} border ${c.border} ${c.text} mb-5 group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2 tracking-tight">{p.title}</h3>
                <p className="text-navy/65 text-sm leading-relaxed mb-4">{p.body}</p>
                <div className={`text-xs font-semibold ${c.text} uppercase tracking-wider`}>
                  → {p.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
