import { useReveal } from "@/hooks/useReveal";
import { comparisonRows, packages } from "@/data/packages";

export function PackageComparisonTable() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-3xl mb-12">
          <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Comparativa completa</p>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-4xl tracking-tightest leading-tight">
            Todo lo que incluye cada paquete, feature por feature.
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-navy/10 bg-white shadow-md">
          <table className="w-full min-w-[780px]">
            <thead>
              <tr className="bg-ivory border-b border-navy/10">
                <th className="text-left p-5 text-xs font-bold text-navy/60 uppercase tracking-wider">Feature</th>
                {packages.map((p) => (
                  <th key={p.key} className="p-5 text-center">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      p.accent === "orange" ? "text-orange-600" :
                      p.accent === "teal" ? "text-teal" :
                      p.accent === "lime" ? "text-lime-700" : "text-navy"
                    }`}>
                      {p.name}
                    </div>
                    <div className="font-display font-extrabold text-navy text-lg tracking-tight">{p.price}</div>
                    {p.featured && (
                      <div className="inline-block mt-1 px-2 py-0.5 rounded-full bg-lime/15 text-lime-700 text-[9px] font-bold uppercase tracking-wider">
                        ★ Más elegido
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((group) => (
                <>
                  <tr key={group.category} className="bg-ivory/50">
                    <td colSpan={5} className="p-3 px-5 text-[10px] font-bold text-navy/50 uppercase tracking-wider">
                      {group.category}
                    </td>
                  </tr>
                  {group.rows.map((r) => (
                    <tr key={r.feature} className="border-b border-navy/5 hover:bg-ivory/30 transition">
                      <td className="p-4 px-5 text-sm text-navy font-medium">{r.feature}</td>
                      {r.values.map((v, i) => (
                        <td key={i} className={`p-4 text-center text-sm ${
                          v === "—" ? "text-navy/30" :
                          v === "✓" ? "text-lime-600 font-bold text-base" :
                          "text-navy/75"
                        } ${packages[i].featured ? "bg-lime/5" : ""}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
