import { useEffect, useState } from "react";

const links = [
  { href: "#filosofia", label: "Qué hacemos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy/90 backdrop-blur-lg border-b border-navy-700/50 ${
        scrolled ? "shadow-lg shadow-navy/20" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Altum Digital" className="h-20 w-auto" />
          <span className="font-display font-extrabold text-white text-lg tracking-tight hidden sm:inline">
            Altum <span className="text-teal-400">Digital</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/529991894671"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal to-lime text-white font-semibold text-sm rounded-lg hover:brightness-110 transition shadow-lg shadow-teal/20"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.48-1.48A12 12 0 1020.52 3.48zM12 20a8 8 0 01-4.09-1.12l-.29-.17-3.01.79.8-2.93-.19-.3A8 8 0 1112 20zm4.58-5.97c-.25-.13-1.48-.73-1.7-.82-.22-.08-.38-.12-.55.13-.17.25-.64.82-.78.99-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.46c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29z" /></svg>
          WhatsApp
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-700 border-t border-navy-800 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/80 hover:text-white font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
