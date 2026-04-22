import { useReveal } from "@/hooks/useReveal";

const stack = [
  { name: "React + TypeScript", reason: "El estándar de la industria. Sitios rápidos, mantenibles y a prueba de errores." },
  { name: "Vite", reason: "Build tool moderno. Tu sitio carga en milisegundos, no en segundos." },
  { name: "Tailwind CSS", reason: "Diseño responsive real. Se ve bien en iPhone SE y en pantallas 4K." },
  { name: "Vercel", reason: "Hosting premium con CDN global. 99.99% uptime, SSL automático, despliegue instantáneo." },
  { name: "Schema.org + SEO", reason: "Google entiende tu negocio. Marcado estructurado en todos los sitios." },
  { name: "Stripe", reason: "Pagos y suscripciones de mantenimiento 100% automatizados y seguros." },
];

const scores = [
  { label: "PageSpeed Mobile", value: "95+", color: "text-lime-600" },
  { label: "PageSpeed Desktop", value: "98+", color: "text-teal" },
  { label: "Uptime SLA", value: "99.99%", color: "text-orange-600" },
  { label: "SSL", value: "Auto", color: "text-navy" },
];

export function TechStack() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden bg-white border-y border-navy/8">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-14">
          <p className="text-lime-700 text-xs font-semibold uppercase tracking-wider mb-4">Detrás del sitio</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Tecnología <span className="text-gradient-warm">que no ves</span>. Resultados que sí.
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            No somos una tienda de WordPress. Usamos el mismo stack que empresas como Vercel, Linear y Shopify. Tu sitio hereda esa calidad.
          </p>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {scores.map((s) => (
            <div key={s.label} className="rounded-2xl border border-navy/10 bg-ivory p-5 text-center">
              <div className={`font-display font-extrabold text-3xl tracking-tightest leading-none ${s.color}`}>
                {s.value}
              </div>
              <div className="text-[10px] text-navy/55 uppercase tracking-wider mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="grid md:grid-cols-2 gap-4">
          {stack.map((s) => (
            <div key={s.name} className="rounded-xl border border-navy/10 bg-white p-5 hover:border-teal/30 transition">
              <h3 className="font-display font-bold text-navy text-base mb-1.5 tracking-tight">{s.name}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{s.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
