import { useReveal } from "@/hooks/useReveal";

type Member = {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  whatsapp?: string;
  placeholder?: boolean;
};

const team: Member[] = [
  {
    name: "Eugenio Creixell",
    role: "Fundador · Estrategia & Desarrollo",
    bio: "Finanzas + tecnología. Después de años construyendo sistemas para fondos de inversión, decidí que los negocios locales merecen la misma calidad de software. Así nació Altum.",
    specialty: "React · SEO · Integración con negocio",
    whatsapp: "https://wa.me/529991894671",
  },
  {
    name: "Socio por anunciar",
    role: "Diseño & Producto",
    bio: "Estamos por anunciar a nuestro segundo socio — con enfoque en diseño visual y producto. Pronto contamos más.",
    specialty: "Diseño · UX · Producto",
    placeholder: true,
  },
];

export function Team() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="max-w-2xl mb-14">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">El equipo</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Dos personas. <span className="text-gradient-cool">Cero intermediarios.</span>
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            Con nosotros tratas directamente con los fundadores. Sin project managers, sin cuentas corporativas, sin juegos del teléfono descompuesto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`rounded-3xl p-8 border transition-all ${
                m.placeholder
                  ? "bg-ivory border-dashed border-navy/20 hover:border-navy/40"
                  : "bg-white border-navy/10 hover:border-teal/30 shadow-md hover:shadow-xl hover:shadow-teal/10"
              }`}
              style={{ transitionDelay: `${i * 120}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
            >
              <div className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center text-4xl font-display font-extrabold ${
                m.placeholder ? "bg-navy/5 text-navy/30" : "bg-gradient-to-br from-teal to-lime text-white"
              }`}>
                {m.placeholder ? "?" : m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>

              <h3 className={`font-display font-extrabold text-2xl tracking-tight mb-1 ${m.placeholder ? "text-navy/50" : "text-navy"}`}>
                {m.name}
              </h3>
              <div className={`text-xs font-bold uppercase tracking-wider mb-5 ${m.placeholder ? "text-navy/40" : "text-teal"}`}>
                {m.role}
              </div>

              <p className={`text-sm leading-relaxed mb-5 ${m.placeholder ? "text-navy/45 italic" : "text-navy/70"}`}>
                {m.bio}
              </p>

              <div className="pt-5 border-t border-navy/10 flex items-center justify-between">
                <div className="text-xs text-navy/60">
                  <span className="text-navy/40 block mb-1">Especialidad</span>
                  <span className="font-semibold text-navy/80">{m.specialty}</span>
                </div>
                {m.whatsapp && (
                  <a
                    href={m.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-teal hover:underline"
                  >
                    WhatsApp →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
