import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Soft colored orbs (very subtle on ivory) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[460px] h-[460px] rounded-full bg-lime/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-orange/8 blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.1fr_1fr] gap-16 items-center py-20">
        {/* LEFT — text */}
        <div>
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-navy/15 bg-white text-navy text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-teal animate-ping opacity-60" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-teal" />
            </span>
            Creación Web · Mérida · México
          </div>

          <h1
            className={`font-display font-extrabold text-navy text-5xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02] mb-6 transition-all duration-1000 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Tu negocio <br />
            merece <span className="text-gradient-primary">ser encontrado.</span>
          </h1>

          <p
            className={`text-navy/70 text-lg max-w-lg mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Diseñamos sitios web que <span className="text-navy font-semibold">venden</span> para negocios
            locales. Profesionales, rápidos, y listos en días — no meses.
          </p>

          <div
            className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link to="/productos" className="btn-primary">
              Ver paquetes
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link to="/contacto" className="btn-ghost">
              Agendar llamada
            </Link>
          </div>

          <div
            className={`flex items-center gap-6 mt-12 pt-8 border-t border-navy/10 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <div className="font-display font-extrabold text-3xl text-navy leading-none">4.4<span className="text-teal">/5</span></div>
              <div className="text-xs text-navy/60 mt-1">Google · 400+ reseñas</div>
            </div>
            <div className="h-10 w-px bg-navy/10" />
            <div>
              <div className="font-display font-extrabold text-3xl text-navy leading-none">5–30<span className="text-lime">d</span></div>
              <div className="text-xs text-navy/60 mt-1">Entrega promedio</div>
            </div>
            <div className="h-10 w-px bg-navy/10" />
            <div>
              <div className="font-display font-extrabold text-3xl text-navy leading-none">100<span className="text-orange">%</span></div>
              <div className="text-xs text-navy/60 mt-1">Móvil + SEO</div>
            </div>
          </div>
        </div>

        {/* RIGHT — creative logo showcase */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <LogoShowcase />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy/40 text-xs flex flex-col items-center gap-2 animate-pulse">
        <span className="uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-navy/30 to-transparent" />
      </div>
    </section>
  );
}

function LogoShowcase() {
  return (
    <div className="relative aspect-square max-w-[560px] mx-auto">
      {/* Concentric rotating rings */}
      <div className="absolute inset-0 rounded-full border border-navy/10 animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-teal/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />
      <div className="absolute inset-16 rounded-full border border-lime/20" />

      {/* Floating accent dots */}
      <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_20px_rgba(43,157,143,0.6)]" />
      <div className="absolute top-1/2 right-4 w-3 h-3 rounded-full bg-orange shadow-[0_0_20px_rgba(232,130,58,0.6)]" />
      <div className="absolute bottom-8 left-12 w-3 h-3 rounded-full bg-lime shadow-[0_0_20px_rgba(139,190,61,0.6)]" />
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-navy shadow-[0_0_20px_rgba(31,58,95,0.4)]" />

      {/* Center logo card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 via-lime/15 to-orange/15 blur-2xl animate-pulse-glow" />
          <div className="relative w-80 h-80 rounded-3xl bg-navy border border-navy-700 flex items-center justify-center p-3 shadow-xl shadow-navy/30 overflow-hidden">
            <img src="/logo.png" alt="Altum Digital" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Orbital feature pills */}
      <div className="absolute -top-2 -right-4 card rounded-xl px-3 py-2 text-xs font-semibold text-teal animate-float-med">
        · SEO Local
      </div>
      <div className="absolute top-1/3 -left-6 card rounded-xl px-3 py-2 text-xs font-semibold text-lime-700 animate-float-slow">
        · Responsive
      </div>
      <div className="absolute bottom-6 -right-2 card rounded-xl px-3 py-2 text-xs font-semibold text-orange-600 animate-float-fast">
        · Core Web Vitals
      </div>
      <div className="absolute -bottom-2 left-6 card rounded-xl px-3 py-2 text-xs font-semibold text-navy animate-float-med">
        · WhatsApp Lead
      </div>
    </div>
  );
}
