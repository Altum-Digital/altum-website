import { useReveal } from "@/hooks/useReveal";

export function PaymentFlow() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className={`relative max-w-5xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-12">
          <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Forma de pago</p>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-4xl tracking-tightest leading-tight">
            50% al inicio, 50% al aprobar. Sin sobresaltos.
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div className="rounded-2xl bg-gradient-to-br from-teal/10 to-white border-2 border-teal/25 p-7">
            <div className="font-display font-extrabold text-teal text-5xl tracking-tightest mb-2">50%</div>
            <h3 className="font-display font-bold text-navy text-xl mb-2 tracking-tight">Anticipo para iniciar</h3>
            <p className="text-navy/65 text-sm leading-relaxed">
              Se paga antes de comenzar. Asegura tu lugar en agenda y activa el inicio del proyecto.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center text-navy/30 font-display text-4xl">→</div>

          <div className="rounded-2xl bg-gradient-to-br from-lime/10 to-white border-2 border-lime/25 p-7">
            <div className="font-display font-extrabold text-lime-700 text-5xl tracking-tightest mb-2">50%</div>
            <h3 className="font-display font-bold text-navy text-xl mb-2 tracking-tight">Al aprobar tu sitio</h3>
            <p className="text-navy/65 text-sm leading-relaxed">
              Se liquida solo cuando des el visto bueno al resultado final. Cero riesgo.
            </p>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-xl bg-ivory border border-navy/10 flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange/15 text-orange-600 flex items-center justify-center font-bold">🛡</div>
          <div>
            <div className="font-display font-bold text-navy text-sm mb-1">Garantía de 30 días</div>
            <p className="text-navy/65 text-sm leading-relaxed">
              Si no estás satisfecho con el diseño final, rediseñamos sin costo. Esto está escrito en tu contrato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
