import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";

export function Availability() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  const month = new Date().toLocaleString("es-MX", { month: "long", year: "numeric" });
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={ref} className={`relative max-w-5xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-8 md:p-10 text-white shadow-2xl shadow-navy/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-lime/20 blur-[100px] pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/20 border border-lime/30 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                Agenda abierta — {monthCapitalized}
              </div>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tightest leading-tight mb-3">
                Quedan <span className="text-lime-300">2 lugares</span> para proyectos este mes.
              </h3>
              <p className="text-white/70 text-base max-w-xl">
                Tomamos máximo 4 proyectos por mes para mantener calidad. Los siguientes slots van para el mes siguiente.
              </p>
            </div>
            <Link to="/contacto" className="btn-primary flex-shrink-0">
              Apartar mi lugar
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
