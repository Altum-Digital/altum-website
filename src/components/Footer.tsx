import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-navy/10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Altum Digital" className="h-10 w-auto" />
              <span className="font-display font-extrabold text-navy text-lg tracking-tight">Altum <span className="text-teal">Digital</span></span>
            </div>
            <p className="text-navy/65 text-sm leading-relaxed max-w-sm mb-5">
              Sitios web diseñados para traer clientes. Desde $9,000 MXN, entregados en días, no meses.
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ivory-100 border border-navy/10 text-[11px] text-navy/70">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                Disponible hoy
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ivory-100 border border-navy/10 text-[11px] text-navy/70">
                CDMX · México
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-navy font-display font-bold text-sm mb-4 tracking-tight">Sitio</div>
            <ul className="space-y-2.5 text-sm text-navy/65">
              <li><Link to="/productos" className="hover:text-navy transition">Paquetes</Link></li>
              <li><Link to="/casos" className="hover:text-navy transition">Casos</Link></li>
              <li><Link to="/equipo" className="hover:text-navy transition">Equipo</Link></li>
              <li><Link to="/contacto" className="hover:text-navy transition">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-navy font-display font-bold text-sm mb-4 tracking-tight">Paquetes</div>
            <ul className="space-y-2.5 text-sm text-navy/65">
              <li><Link to="/productos#presencia" className="hover:text-navy transition">Presencia · $9k</Link></li>
              <li><Link to="/productos#crecimiento" className="hover:text-navy transition">Crecimiento · $12k</Link></li>
              <li><Link to="/productos#total" className="hover:text-navy transition">Total · $15k</Link></li>
              <li><Link to="/productos#suprema" className="hover:text-navy transition">Suprema · $20k+</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-navy font-display font-bold text-sm mb-4 tracking-tight">Contacto</div>
            <ul className="space-y-2.5 text-sm text-navy/65">
              <li>
                <a href="mailto:hola@altum.digital" className="hover:text-navy transition">hola@altum.digital</a>
              </li>
              <li>
                <a href="https://wa.me/529991894671" target="_blank" rel="noreferrer" className="hover:text-navy transition">WhatsApp</a>
              </li>
              <li className="text-navy/50 text-xs pt-2">Respuesta en &lt; 24 hrs</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-navy/10">
          <div className="text-xs text-navy/50">
            © {new Date().getFullYear()} Altum Digital · Todos los derechos reservados
          </div>
          <div className="flex gap-5 text-xs text-navy/50">
            <span>Mérida · México</span>
            <a href="mailto:hola@altum.digital" className="hover:text-navy transition">hola@altum.digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
