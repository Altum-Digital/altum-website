import { Team } from "@/components/Team";
import { TechStack } from "@/components/TechStack";
import { Philosophy } from "@/components/Philosophy";
import { CTA } from "@/components/CTA";

const values = [
  {
    icon: "⚡",
    title: "Entregar > prometer",
    body: "Damos fechas concretas y las cumplimos. Si nos retrasamos, lo decimos antes y compensamos.",
  },
  {
    icon: "🧾",
    title: "Precio justo, transparente",
    body: "Todo lo que cuesta, está escrito. Sin costos ocultos, sin 'ya te cobro el extra', sin letra chiquita.",
  },
  {
    icon: "🔧",
    title: "Construido para durar",
    body: "No usamos hacks ni shortcuts. Tu sitio aguanta 5 años sin rehacerse porque está bien hecho desde el inicio.",
  },
  {
    icon: "🤝",
    title: "Socios, no proveedores",
    body: "Si tu negocio crece, crecemos contigo. Si no funciona algo, lo resolvemos sin echar culpas.",
  },
];

export function EquipoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-20 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full bg-orange/8 blur-[130px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">Equipo</p>
            <h1 className="font-display font-extrabold text-navy text-5xl md:text-6xl tracking-tightest leading-[1.05] mb-6">
              Somos <span className="text-gradient-cool">dos personas</span>. <br />
              Construimos sitios como si fueran nuestros.
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Sin project managers intermedios, sin oficina corporativa, sin rotación de talento. Con nosotros hablas directo con los que construyen tu sitio.
            </p>
          </div>
        </div>
      </section>

      <Team />

      {/* VALORES */}
      <section className="relative py-24 overflow-hidden bg-white border-y border-navy/8">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">Valores</p>
            <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
              Cómo trabajamos.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-navy/10 bg-ivory p-7 hover:border-teal/30 transition">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-navy text-xl tracking-tight mb-2">{v.title}</h3>
                <p className="text-navy/65 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Philosophy />
      <TechStack />
      <CTA />
    </>
  );
}
