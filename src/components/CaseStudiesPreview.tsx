import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { cases } from "@/data/cases";

export function CaseStudiesPreview() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const featured = cases.filter(c => c.featured).slice(0, 2);

  return (
    <section className="relative py-32 overflow-hidden bg-white border-y border-navy/8">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="text-lime-700 text-xs font-semibold uppercase tracking-wider mb-4">Casos reales</p>
            <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
              Sitios que ya están <span className="text-gradient-warm">trayendo clientes</span>.
            </h2>
          </div>
          <Link to="/casos" className="btn-ghost">
            Ver todos los casos
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((c, i) => (
            <Link
              key={c.slug}
              to={`/casos#${c.slug}`}
              className="group relative rounded-2xl bg-ivory border border-navy/10 p-8 hover:border-lime/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-lime/10"
              style={{ transitionDelay: `${i * 100}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/50 mb-1">{c.industry}</div>
                  <h3 className="font-display font-extrabold text-navy text-2xl tracking-tight">{c.client}</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-lime/10 text-lime-700 text-[10px] font-bold uppercase tracking-wider">
                  {c.package}
                </span>
              </div>

              <p className="text-navy/70 text-sm leading-relaxed mb-6">{c.summary}</p>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-navy/10">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display font-extrabold text-navy text-xl tracking-tight">{m.value}</div>
                    <div className="text-[10px] text-navy/55 uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-lime-700 group-hover:gap-2.5 transition-all">
                Ver caso completo
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
