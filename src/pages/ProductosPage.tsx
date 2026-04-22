import { Link } from "react-router-dom";
import { packages } from "@/data/packages";
import { PackageComparisonTable } from "@/components/PackageComparisonTable";
import { MaintenanceStripe } from "@/components/MaintenanceStripe";
import { PaymentFlow } from "@/components/PaymentFlow";
import { CTA } from "@/components/CTA";

const accentMap = {
  orange: { text: "text-orange-600", border: "border-orange/25", bg: "bg-orange/5", chip: "bg-orange/10 text-orange-600" },
  teal: { text: "text-teal", border: "border-teal/25", bg: "bg-teal/5", chip: "bg-teal/10 text-teal" },
  lime: { text: "text-lime-700", border: "border-lime/40", bg: "bg-lime/5", chip: "bg-lime/10 text-lime-700" },
  navy: { text: "text-navy", border: "border-navy/25", bg: "bg-navy/5", chip: "bg-navy/10 text-navy" },
} as const;

export function ProductosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[120px]" />
          <div className="absolute top-40 right-0 w-[460px] h-[460px] rounded-full bg-lime/10 blur-[130px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Paquetes</p>
            <h1 className="font-display font-extrabold text-navy text-5xl md:text-6xl tracking-tightest leading-[1.05] mb-6">
              4 planes. Uno para <span className="text-gradient-primary">cada etapa</span> de tu negocio.
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Desde tu primer sitio en 5 días hasta un proyecto bespoke de 8 semanas. Todos los precios en MXN, sin letra chiquita, con garantía de 30 días.
            </p>
          </div>
        </div>
      </section>

      {/* DETAIL CARDS */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-5">
          {packages.map((p, idx) => {
            const c = accentMap[p.accent];
            return (
              <div
                key={p.key}
                id={p.key}
                className={`relative rounded-3xl border-2 ${c.border} ${c.bg} p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 scroll-mt-28`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-10 px-4 py-1.5 bg-gradient-to-r from-lime to-lime-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    ★ Más elegido
                  </div>
                )}

                {/* LEFT */}
                <div>
                  <div className={`inline-block text-xs font-bold uppercase tracking-wider mb-3 ${c.text}`}>
                    {idx === 0 ? "Entrada" : idx === 1 ? "Sweet spot" : idx === 2 ? "Dominar Google" : "A la medida"}
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <h2 className="font-display font-extrabold text-navy text-5xl md:text-6xl tracking-tightest leading-none">
                      {p.name}
                    </h2>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display font-extrabold text-navy text-4xl tracking-tightest">{p.price}</span>
                    <span className="text-base font-medium text-navy/55">MXN</span>
                  </div>
                  <div className={`inline-flex text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5 ${c.chip}`}>
                    ⏱ {p.time}
                  </div>
                  <p className="text-navy/75 text-base leading-relaxed mb-6">{p.pitch}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contacto" className="btn-primary">
                      Quiero este paquete
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                    <a href={`https://wa.me/529991894671?text=${encodeURIComponent(`Hola Altum, me interesa el paquete ${p.name}`)}`} target="_blank" rel="noreferrer" className="btn-ghost">
                      Preguntar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* RIGHT — features */}
                <div className="rounded-2xl bg-white border border-navy/10 p-7">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy/50 mb-4">
                    {p.pages}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-navy">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full ${c.chip} flex items-center justify-center mt-0.5`}>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-5 border-t border-navy/10 flex items-center gap-2 text-xs text-navy/60">
                    <svg className="w-4 h-4 text-navy/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l4 4-4 4M12 22l-4-4 4-4M4 12h16" /></svg>
                    {p.support}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PackageComparisonTable />
      <PaymentFlow />
      <MaintenanceStripe />
      <CTA />
    </>
  );
}
