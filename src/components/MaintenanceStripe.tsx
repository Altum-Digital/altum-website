import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: "🔒", title: "Hosting + SSL + dominio", desc: "Vercel premium, certificado SSL renovado automático y tu dominio (.com / .com.mx) incluido a partir del 2° año." },
  { icon: "🛠", title: "Cambios ilimitados de contenido", desc: "Textos, imágenes, productos, horarios. Respondemos en <24 hrs por WhatsApp." },
  { icon: "📊", title: "Reporte mensual de visitas", desc: "Quién visita, de dónde llegan, qué buscan. Sin datos crudos — insights accionables." },
  { icon: "🔍", title: "SEO mensual + mantenimiento técnico", desc: "Monitoreo de velocidad, schema, sitemap y ajustes para seguir en Google." },
  { icon: "🛡", title: "Backup mensual + seguridad", desc: "Respaldo automático. Si algo se rompe (spoiler: no pasa), reverso en minutos." },
  { icon: "💬", title: "Soporte prioritario vía WhatsApp", desc: "Respuesta real, no bots. Menos de 24 hrs entre semana." },
];

const stripeFAQ = [
  {
    q: "¿Cómo se cobra?",
    a: "Cobro automático mensual vía Stripe. Guardas tarjeta o domiciliación una vez y el cargo se hace solo el mismo día del mes. Recibes factura automática por email.",
  },
  {
    q: "¿El primer mes realmente es gratis?",
    a: "Sí. El primer mes de mantenimiento corre por cuenta nuestra — un regalo por arrancar con Altum. A partir del segundo mes se activa la suscripción de $1,500 MXN/mes.",
  },
  {
    q: "¿Qué pasa con el dominio el primer año?",
    a: "El dominio (.com o .com.mx) va incluido el primer año sin costo adicional. Del 2° año en adelante se renueva como parte del mantenimiento — sin sobrecargos.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin penalizaciones, sin permanencia. Cancelas por WhatsApp o email y el siguiente mes ya no se cobra. Tu sitio sigue funcionando (lo exportamos a tu cuenta).",
  },
  {
    q: "¿Puedo cambiar de tarjeta?",
    a: "Sí. Stripe te manda un link seguro para actualizarla cuando quieras. Nosotros nunca vemos tus datos de tarjeta.",
  },
];

export function MaintenanceStripe() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="mantenimiento" className="relative py-32 overflow-hidden bg-white border-y border-navy/8">
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4">Mantenimiento mensual</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Un solo plan. <span className="text-gradient-cool">$1,500/mes.</span> <br />
            Primer mes gratis.
          </h2>
          <p className="text-navy/65 text-lg mt-5 leading-relaxed">
            El 61% de los negocios en México abandonan su sitio al 2° año porque no presupuestaron mantenimiento. Nosotros lo resolvemos: un solo plan claro, pago automático vía Stripe, sin sorpresas.
          </p>
        </div>

        {/* Price card */}
        <div className="rounded-3xl bg-gradient-to-br from-teal/5 via-white to-lime/5 border-2 border-teal/25 p-8 md:p-12 shadow-xl shadow-teal/5 mb-16">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/15 text-lime-700 text-xs font-bold uppercase tracking-wider mb-4">
                🎁 Primera mensualidad gratis
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-extrabold text-navy text-6xl md:text-7xl tracking-tightest leading-none">$1,500</span>
                <span className="text-navy/55 text-xl font-medium">MXN/mes</span>
              </div>
              <p className="text-navy/60 text-sm">
                Incluye dominio (.com / .com.mx) renovación anual a partir del 2° año.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-5 py-4 rounded-2xl bg-white border border-navy/10 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5" viewBox="0 0 60 25" fill="#635BFF"><path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 9.1c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zM0 13.76c0 2.57 3.32 3.1 5.46 3.1 2.18 0 6.24-.6 6.24-4.44 0-3.86-4.52-4.4-5.44-4.4-1.43 0-2.32-.28-2.32-.9 0-.62.9-.85 1.95-.85 1.85 0 4.3.64 5.22.94v-3.5c-1.4-.45-3.25-.62-5.2-.62-2.02 0-5.9.5-5.9 4.38 0 3.89 4.4 4.42 5.48 4.42 1.22 0 1.9.23 1.9.87 0 .67-.83.88-1.88.88-1.88 0-4.12-.6-5.5-.96v3.5z" /></svg>
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">Pago automático</span>
                </div>
                <div className="text-sm text-navy/70">Vía Stripe · guardas tarjeta 1 vez</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 pt-8 border-t border-navy/10">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm tracking-tight mb-1">{f.title}</h4>
                  <p className="text-navy/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="font-display font-extrabold text-navy text-3xl tracking-tightest mb-8">
            ¿Cómo funciona el pago con Stripe?
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: 1, title: "Firmamos contrato", desc: "Plan de trabajo claro, scope por paquete, garantía de 30 días." },
              { n: 2, title: "Lanzamos tu sitio", desc: "Primer mes de mantenimiento incluido sin costo — cortesía de arranque." },
              { n: 3, title: "Mes 2: se activa Stripe", desc: "Guardas tu tarjeta una vez en un link seguro. Cobro automático cada mes." },
              { n: 4, title: "Cancelas cuando quieras", desc: "Sin penalización ni permanencia. Tu sitio sigue siendo tuyo." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-navy/10 bg-ivory p-6">
                <div className="w-10 h-10 rounded-full bg-navy text-white font-display font-extrabold flex items-center justify-center text-lg mb-4">
                  {s.n}
                </div>
                <h4 className="font-display font-bold text-navy mb-2 tracking-tight">{s.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="font-display font-extrabold text-navy text-3xl tracking-tightest mb-8">
            Preguntas frecuentes sobre mantenimiento
          </h3>
          <div className="space-y-3">
            {stripeFAQ.map((f) => (
              <details key={f.q} className="group rounded-xl border border-navy/10 bg-white overflow-hidden">
                <summary className="p-5 cursor-pointer font-display font-bold text-navy flex items-center justify-between hover:bg-ivory/40 transition">
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 text-navy/40 group-open:rotate-45 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-5 pb-5 text-navy/70 text-sm leading-relaxed border-t border-navy/5 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
