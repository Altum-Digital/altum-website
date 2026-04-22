import { useReveal } from "@/hooks/useReveal";

type Row = {
  feature: string;
  wix: string;
  freelance: string;
  altum: string;
  altumHighlight?: boolean;
};

const rows: Row[] = [
  { feature: "Tiempo de entrega", wix: "Lo haces tú (semanas)", freelance: "Incierto — 1 a 3 meses", altum: "5 a 30 días · fecha en calendario", altumHighlight: true },
  { feature: "Costo del primer año", wix: "$3,000–$8,000/año forever", freelance: "$5,000–$25,000 + hosting", altum: "Desde $9,000 + $0 mantenimiento 1er mes", altumHighlight: true },
  { feature: "Soporte después del launch", wix: "Foros + ticket", freelance: "Depende si contesta", altum: "WhatsApp directo · <24 hrs" },
  { feature: "Velocidad (Core Web Vitals)", wix: "60–80 PageSpeed", freelance: "Variable (60–90)", altum: "95+ garantizado", altumHighlight: true },
  { feature: "SEO configurado de inicio", wix: "Básico, requiere apps", freelance: "Depende del freelance", altum: "Schema.org + sitemap + OG completo" },
  { feature: "WhatsApp integrado", wix: "Plugin extra", freelance: "A veces", altum: "De serie en todos los tiers" },
  { feature: "Diseño responsive real", wix: "Auto (genérico)", freelance: "Variable", altum: "Probado en 5+ dispositivos" },
  { feature: "Legal mexicano (LFPDPPP)", wix: "No incluye", freelance: "Casi nunca", altum: "Aviso + T&C + cookies incluidos", altumHighlight: true },
  { feature: "Si tienes problema 6 meses después", wix: "Tu problema", freelance: "Suerte encontrándolo", altum: "Contrato + sistema de tickets" },
];

export function CompetitorCompare() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-teal/30 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-lime/20 blur-[120px]" />
      </div>

      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-12">
          <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">Comparativa honesta</p>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-5xl tracking-tightest leading-tight">
            No competimos con otras agencias. <br />
            Competimos contra <span className="text-lime-400">Wix y freelancers.</span>
          </h2>
          <p className="text-white/70 text-lg mt-5 leading-relaxed">
            Aquí va la comparativa sin maquillar. Tú decides.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-5 px-6 text-sm font-semibold text-white/60 uppercase tracking-wider">Aspecto</th>
                <th className="text-left py-5 px-4 text-sm font-semibold text-white/80">Wix / Squarespace</th>
                <th className="text-left py-5 px-4 text-sm font-semibold text-white/80">Freelancer</th>
                <th className="text-left py-5 px-4 text-sm font-bold text-lime-400">Altum Digital</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="py-5 px-6 text-sm font-semibold text-white">{r.feature}</td>
                  <td className="py-5 px-4 text-sm text-white/60">{r.wix}</td>
                  <td className="py-5 px-4 text-sm text-white/60">{r.freelance}</td>
                  <td className={`py-5 px-4 text-sm ${r.altumHighlight ? "text-lime-300 font-semibold" : "text-white/90"}`}>
                    {r.altumHighlight && "✓ "}{r.altum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
