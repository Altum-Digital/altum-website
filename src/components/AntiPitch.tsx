import { useReveal } from "@/hooks/useReveal";

const noList = [
  { title: "E-commerce masivo (+1000 SKUs)", why: "Shopify lo hace mejor. Te lo recomendamos." },
  { title: "Apps móviles nativas iOS/Android", why: "No es lo nuestro. Te recomendamos un especialista." },
  { title: "SEO de guerra (mercados saturados)", why: "Somos buenos en SEO local, no en pelear SERPs de SaaS." },
  { title: "Descuentos en los paquetes", why: "Los precios son justos y transparentes. Sin letra chiquita." },
  { title: "Promesas de ranking en 30 días", why: "Nadie puede garantizarlo. Solo trabajo bien hecho." },
  { title: "Trabajar sin contrato", why: "Contrato + plan de trabajo siempre. Para tu tranquilidad y la nuestra." },
];

export function AntiPitch() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-5xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-14">
          <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Transparencia</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Lo que <span className="text-orange-600">NO</span> hacemos.
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            No queremos venderte algo que no podemos entregar bien. Si necesitas alguna de estas cosas, te recomendamos directamente a quien sí la hace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {noList.map((n, i) => (
            <div
              key={n.title}
              className="rounded-2xl border border-navy/10 bg-white p-6 hover:border-orange/30 transition-all"
              style={{ transitionDelay: `${i * 50}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-10px)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange/10 border border-orange/25 flex items-center justify-center text-orange-600 font-bold text-xl">
                  ✗
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-base mb-1.5 tracking-tight">{n.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{n.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
