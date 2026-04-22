import { useReveal } from "@/hooks/useReveal";
import { industries } from "@/data/industries";

export function IndustryDemos() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="industrias" className="relative py-32 overflow-hidden bg-white border-y border-navy/8">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-14">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">Demos por industria</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            No vendemos "sitios web". <br />
            Vendemos <span className="text-gradient-cool">sitios que ya funcionan</span> en tu industria.
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            Tenemos 15 demos reales listos por industria — tres tiers cada uno. Elige el tuyo y te mandamos los links para que los veas en vivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <a
              key={industry.slug}
              href={`https://wa.me/529991894671?text=${encodeURIComponent(industry.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-white border border-navy/10 p-6 hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-teal/10"
              style={{ transitionDelay: `${i * 60}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="font-display font-bold text-navy text-base mb-2 tracking-tight">{industry.name}</h3>
              <p className="text-navy/60 text-xs leading-relaxed mb-5">{industry.tagline}</p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal group-hover:gap-2.5 transition-all">
                Ver demos
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
              <span className="absolute top-4 right-4 text-[10px] text-navy/40 font-mono">3 tiers</span>
            </a>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-navy/55">
          ¿Tu industria no está aquí? <a href="https://wa.me/529991894671" target="_blank" rel="noreferrer" className="text-teal font-semibold hover:underline">Hacemos sitios a medida</a>.
        </p>
      </div>
    </section>
  );
}
