import { useCounter, useReveal } from "@/hooks/useReveal";

const stats = [
  { value: 20, suffix: "+", label: "Negocios atendidos", color: "text-teal" },
  { value: 400, suffix: "+", label: "Reseñas Google", color: "text-lime-700" },
  { value: 7, suffix: "d", label: "Entrega promedio", color: "text-orange-600" },
  { value: 100, suffix: "%", label: "Satisfacción", color: "text-navy" },
];

export function Stats() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 bg-white border-y border-navy/8">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatBlock key={i} s={s} inView={inView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ s, inView, delay }: { s: typeof stats[0]; inView: boolean; delay: number }) {
  const v = useCounter(s.value, inView);
  const display = s.value >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "");
  return (
    <div
      className={`text-center transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
    >
      <div className={`font-display font-extrabold text-5xl md:text-6xl tracking-tightest leading-none ${s.color}`}>
        {display}
        <span className="text-navy/30">{s.suffix}</span>
      </div>
      <div className="text-xs text-navy/55 uppercase tracking-wider mt-3 font-semibold">{s.label}</div>
    </div>
  );
}
