import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import { CTA } from "@/components/CTA";

export function CasosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-0 w-[520px] h-[520px] rounded-full bg-lime/10 blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[460px] h-[460px] rounded-full bg-teal/10 blur-[130px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lime-700 text-xs font-semibold uppercase tracking-wider mb-4">Casos de estudio</p>
            <h1 className="font-display font-extrabold text-navy text-5xl md:text-6xl tracking-tightest leading-[1.05] mb-6">
              Sitios que ya están <span className="text-gradient-warm">trayendo clientes</span>.
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Cada uno con contexto, reto, solución y métricas reales. Cero mockups, cero ejemplos genéricos.
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="relative pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {cases.map((c, idx) => {
            const isPlaceholder = c.slug === "tu-negocio-aqui";
            return (
              <article
                key={c.slug}
                id={c.slug}
                className={`rounded-3xl overflow-hidden scroll-mt-28 ${
                  isPlaceholder
                    ? "border-2 border-dashed border-navy/20 bg-ivory"
                    : "border border-navy/10 bg-white shadow-md"
                }`}
              >
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                  {/* LEFT — meta */}
                  <div className={`p-8 md:p-10 ${isPlaceholder ? "bg-ivory" : "bg-gradient-to-br from-navy to-navy-700 text-white"}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isPlaceholder ? "text-navy/50" : "text-lime-300"}`}>
                      Caso #{idx + 1} · {c.industry}
                    </div>
                    <h2 className={`font-display font-extrabold text-4xl md:text-5xl tracking-tightest leading-none mb-4 ${isPlaceholder ? "text-navy/60" : ""}`}>
                      {c.client}
                    </h2>
                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 ${
                      isPlaceholder ? "bg-navy/10 text-navy/50" : "bg-white/10 text-white border border-white/20"
                    }`}>
                      Paquete {c.package}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className={`font-display font-extrabold text-2xl md:text-3xl tracking-tightest leading-none ${
                            isPlaceholder ? "text-navy/40" : "text-lime-300"
                          }`}>
                            {m.value}
                          </div>
                          <div className={`text-[10px] uppercase tracking-wider mt-1.5 ${isPlaceholder ? "text-navy/40" : "text-white/60"}`}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-lime-300 hover:text-white transition"
                      >
                        Visitar sitio →
                      </a>
                    )}
                  </div>

                  {/* RIGHT — content */}
                  <div className="p-8 md:p-10">
                    <p className={`text-base leading-relaxed mb-6 ${isPlaceholder ? "text-navy/55 italic" : "text-navy/80"}`}>
                      {c.summary}
                    </p>

                    <div className="mb-5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600 mb-1.5">Reto</div>
                      <p className="text-sm text-navy/70 leading-relaxed">{c.challenge}</p>
                    </div>

                    <div className="mb-5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-teal mb-1.5">Solución</div>
                      <p className="text-sm text-navy/70 leading-relaxed">{c.solution}</p>
                    </div>

                    {c.testimonial && (
                      <blockquote className="mt-6 pl-4 border-l-2 border-lime">
                        <p className="text-navy text-sm italic mb-2 leading-relaxed">"{c.testimonial.quote}"</p>
                        <footer className="text-xs text-navy/60">
                          <span className="font-semibold text-navy">{c.testimonial.author}</span> · {c.testimonial.role}
                        </footer>
                      </blockquote>
                    )}

                    {isPlaceholder && (
                      <Link to="/contacto" className="btn-primary mt-6">
                        Convertirse en caso
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
