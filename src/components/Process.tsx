import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    n: "01",
    title: "Platicamos",
    body: "Llamada rápida para entender tu negocio, clientes y objetivos. Sin costo, sin compromiso.",
    color: "teal",
  },
  {
    n: "02",
    title: "Diseñamos",
    body: "Creamos un sitio con identidad de tu marca y contenido adaptado a tu industria.",
    color: "lime",
  },
  {
    n: "03",
    title: "Revisamos",
    body: "Te mostramos el resultado y ajustamos cada detalle con rondas de revisión incluidas.",
    color: "orange",
  },
  {
    n: "04",
    title: "Publicamos",
    body: "Sale al aire con dominio, SSL y Google Maps. Listo para traer clientes desde el día uno.",
    color: "navy",
  },
];

const ring: Record<string, string> = {
  teal: "from-teal to-teal-400 shadow-teal/25",
  lime: "from-lime to-lime-600 shadow-lime/25",
  orange: "from-orange to-orange-400 shadow-orange/25",
  navy: "from-navy to-navy-700 shadow-navy/25",
};

export function Process() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="proceso" className="relative py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-16">
          <p className="text-lime-700 text-xs font-semibold uppercase tracking-wider mb-4">Proceso</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Simple, rápido y <span className="text-gradient-cool">sin agencias de por medio.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-4">
          {/* Connector line */}
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal via-lime via-orange to-navy opacity-30" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative transition-all duration-700`}
              style={{ transitionDelay: `${i * 120}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
            >
              <div className={`relative w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${ring[s.color]} flex items-center justify-center font-display font-extrabold text-white text-xl shadow-xl mb-6 mx-auto`}>
                {s.n}
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-2 tracking-tight text-center">{s.title}</h3>
              <p className="text-navy/65 text-sm leading-relaxed text-center">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
