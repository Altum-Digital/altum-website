import { useState } from "react";
import { Availability } from "@/components/Availability";

export function ContactoPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    industry: "",
    pkg: "",
    message: "",
  });

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hola Altum, soy ${form.name || "[nombre]"}`,
      form.business && `Negocio: ${form.business}`,
      form.industry && `Industria: ${form.industry}`,
      form.pkg && `Me interesa: ${form.pkg}`,
      form.message && `\n${form.message}`,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[130px]" />
          <div className="absolute bottom-0 right-10 w-[460px] h-[460px] rounded-full bg-lime/10 blur-[130px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">Contacto</p>
            <h1 className="font-display font-extrabold text-navy text-5xl md:text-6xl tracking-tightest leading-[1.05] mb-6">
              Llamada de <span className="text-gradient-cool">15 minutos</span>, sin compromiso.
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Te escuchamos, te decimos si te podemos ayudar (y si no, a quién recomendarte). Cero sales pitch barato.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + DIRECT */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-8">
          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`https://wa.me/529991894671?text=${buildWhatsAppMessage()}`, "_blank");
            }}
            className="rounded-3xl border border-navy/10 bg-white p-8 md:p-10 shadow-md"
          >
            <h2 className="font-display font-extrabold text-navy text-2xl tracking-tight mb-2">Cuéntanos sobre tu negocio</h2>
            <p className="text-navy/60 text-sm mb-8">Al enviar, abrimos WhatsApp con tu mensaje pre-llenado. Respondemos en menos de 24 hrs.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1.5">Tu nombre</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1.5">Nombre del negocio</label>
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition"
                  placeholder="Ej: Taller Hernández"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1.5">Industria</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition bg-white"
                  >
                    <option value="">Seleccionar…</option>
                    <option>Taller mecánico</option>
                    <option>Restaurante</option>
                    <option>Salón de belleza</option>
                    <option>Barbería</option>
                    <option>Spa / bienestar</option>
                    <option>Otra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1.5">Paquete de interés</label>
                  <select
                    value={form.pkg}
                    onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition bg-white"
                  >
                    <option value="">Aún no sé</option>
                    <option>Presencia · $9,000</option>
                    <option>Crecimiento · $12,000</option>
                    <option>Total · $15,000</option>
                    <option>Suprema · $20,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1.5">¿Algo más que debamos saber?</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition resize-none"
                  placeholder="Sitio actual, referencias que te gusten, fechas clave, etc."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.48-1.48A12 12 0 1020.52 3.48zM12 20a8 8 0 01-4.09-1.12l-.29-.17-3.01.79.8-2.93-.19-.3A8 8 0 1112 20z" /></svg>
                Enviar a WhatsApp
              </button>
            </div>
          </form>

          {/* DIRECT */}
          <aside className="space-y-4">
            <a
              href="https://wa.me/529991894671"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-gradient-to-br from-teal to-lime p-8 text-white shadow-lg hover:brightness-110 transition"
            >
              <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.48-1.48A12 12 0 1020.52 3.48zM12 20a8 8 0 01-4.09-1.12l-.29-.17-3.01.79.8-2.93-.19-.3A8 8 0 1112 20z" /></svg>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-1">WhatsApp directo</h3>
              <p className="text-white/80 text-sm mb-3">La forma más rápida. Respondemos en minutos.</p>
              <div className="font-display font-bold text-lg">999 189 4671</div>
            </a>

            <a
              href="mailto:hola@altum.digital"
              className="block rounded-2xl bg-white border border-navy/10 p-8 hover:border-teal/30 transition"
            >
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-display font-extrabold text-navy text-xl tracking-tight mb-1">Email</h3>
              <p className="text-navy/60 text-sm mb-2">Para propuestas formales.</p>
              <div className="text-teal font-semibold">hola@altum.digital</div>
            </a>

            <div className="rounded-2xl bg-ivory border border-navy/10 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">Diagnóstico gratis</div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">¿Tienes un sitio actual?</h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-4">
                Mándanos la URL y te devolvemos un video Loom de 3 min con las 5 mejoras concretas que le haríamos — sin costo, sin compromiso.
              </p>
              <a
                href={`https://wa.me/529991894671?text=${encodeURIComponent("Hola Altum, quiero mi diagnóstico gratis. Mi sitio actual es: ")}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-orange-600 hover:underline"
              >
                Pedir diagnóstico →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Availability />
    </>
  );
}
