import { useReveal } from "@/hooks/useReveal";

type Pkg = {
  key: string;
  name: string;
  price: string;
  time: string;
  pitch: string;
  features: string[];
  accent: "orange" | "teal" | "lime" | "navy";
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    key: "presencia",
    name: "Presencia",
    price: "$9,000",
    time: "5–7 días",
    pitch: "One-pager profesional. Ideal si nunca has tenido sitio.",
    features: ["1 página", "Formulario → WhatsApp", "FAQ + garantía", "Stats 3 métricas", "Legal completo"],
    accent: "orange",
  },
  {
    key: "total",
    name: "Total",
    price: "$12,000",
    time: "20–30 días",
    pitch: "Hasta 5 páginas + 13 landings SEO. Para dominar Google.",
    features: ["Hasta 5 páginas", "13 landings SEO por servicio", "Landing B2B", "Stats + logos clientes", "Sitemap completo"],
    accent: "lime",
    featured: true,
  },
  {
    key: "personalizado",
    name: "Personalizado",
    price: "$20,000+",
    time: "A cotizar",
    pitch: "Proyecto 100% a la medida. Sin límites.",
    features: ["Páginas ilimitadas", "Landings ilimitadas", "Diseño custom", "Stats custom", "Proyecto bespoke"],
    accent: "navy",
  },
];

const accent: Record<Pkg["accent"], { text: string; border: string; chip: string; ring: string }> = {
  orange: { text: "text-orange-600", border: "border-orange/30", chip: "bg-orange/10 text-orange-600", ring: "ring-orange/40" },
  teal:   { text: "text-teal",       border: "border-teal/30",   chip: "bg-teal/10 text-teal",         ring: "ring-teal/40" },
  lime:   { text: "text-lime-700",   border: "border-lime/30",   chip: "bg-lime/10 text-lime-700",     ring: "ring-lime/40" },
  navy:   { text: "text-navy",       border: "border-navy/25",   chip: "bg-navy/8 text-navy",          ring: "ring-navy/40" },
};

export function Packages() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="paquetes" className="relative py-32 overflow-hidden bg-white border-y border-navy/8">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-16">
          <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Paquetes</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            3 planes. Uno para <span className="text-gradient-cool">cada etapa</span> de tu negocio.
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            Desde la primera página web de tu negocio hasta el proyecto más ambicioso. Precios transparentes, sin letra chiquita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((p, i) => {
            const c = accent[p.accent];
            return (
              <div
                key={p.key}
                className={`relative rounded-2xl p-7 bg-white border transition-all duration-500 hover:-translate-y-1.5 ${
                  p.featured
                    ? `border-lime/40 shadow-xl shadow-lime/10 ring-2 ring-lime/30`
                    : `${c.border} shadow-md shadow-navy/5 hover:shadow-lg hover:shadow-navy/10`
                }`}
                style={{ transitionDelay: `${i * 80}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-lime to-lime-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    ★ Más elegido
                  </div>
                )}
                <div className={`inline-block text-xs font-bold uppercase tracking-wider mb-2 ${c.text}`}>
                  {p.name}
                </div>
                <div className="font-display font-extrabold text-navy text-4xl tracking-tightest leading-none mb-1">
                  {p.price}
                  <span className="text-base font-medium text-navy/55 ml-1">MXN</span>
                </div>
                <div className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mt-2 ${c.chip}`}>
                  {p.time}
                </div>
                <p className="text-navy/70 text-sm mt-4 leading-relaxed">{p.pitch}</p>
                <div className="h-px bg-navy/10 my-5" />
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className={`flex-shrink-0 w-4 h-4 rounded-full ${c.chip} flex items-center justify-center mt-0.5`}>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Maintenance strip */}
        <div className="mt-12 rounded-2xl bg-white border-2 border-orange/25 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-md">
          <div className="flex-shrink-0 md:border-r md:border-navy/10 md:pr-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">Mantenimiento mensual</div>
            <div className="font-display font-extrabold text-navy text-4xl tracking-tightest leading-none">
              $1,500 <span className="text-base font-medium text-navy/55">MXN/mes</span>
            </div>
            <div className="text-xs text-navy/60 mt-2 max-w-[240px]">Incluye dominio (.com / .com.mx) a partir del 2° año.</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 flex-1">
            {[
              "Cambios ilimitados",
              "Monitoreo 24/7",
              "Backup mensual",
              "SEO mensual",
              "Reporte de visitas",
              "Hosting + SSL",
              "Soporte prioritario",
              "<24 hrs respuesta",
            ].map((i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-navy/80">
                <span className="text-orange-600 mt-0.5 font-bold">✓</span>
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
