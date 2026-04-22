export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  package: "Presencia" | "Crecimiento" | "Total" | "Suprema";
  heroImage?: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  url?: string;
  featured?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "dk-motors",
    client: "DK Motors",
    industry: "Taller mecánico",
    package: "Total",
    summary:
      "Taller multi-marca en Mérida que pasó de recibir cotizaciones por Facebook a un pipeline organizado vía WhatsApp.",
    challenge:
      "No tenían presencia digital fuera de Facebook. Los clientes no sabían qué servicios ofrecían ni podían cotizar sin llamar.",
    solution:
      "Sitio Total con 5 páginas, 13 landings SEO por servicio (afinación, frenos, suspensión, etc.), landing B2B para flotillas y formulario unificado a WhatsApp.",
    metrics: [
      { label: "Landings SEO", value: "13" },
      { label: "Páginas", value: "5" },
      { label: "Tiempo entrega", value: "22 días" },
    ],
    testimonial: {
      quote:
        "Antes perdíamos clientes porque no encontraban info de servicios. Ahora el sitio filtra: llegan con el trabajo claro.",
      author: "Daniel K.",
      role: "Dueño, DK Motors",
    },
    featured: true,
  },
  {
    slug: "cretum-partners",
    client: "Cretum Partners",
    industry: "Servicios financieros",
    package: "Suprema",
    summary:
      "Firma de asesoría financiera independiente que necesitaba un sitio institucional premium, no un landing.",
    challenge:
      "Competían contra brokers grandes con presencia digital pulida. Necesitaban un sitio que transmitiera seriedad, track record y acceso directo a socios.",
    solution:
      "Sitio bespoke con diseño 100% a medida, secciones dedicadas a filosofía de inversión, equipo con bios, casos y formulario cualificado.",
    metrics: [
      { label: "Diseño", value: "100% custom" },
      { label: "Rondas de diseño", value: "Ilimitadas" },
      { label: "Lanzamiento", value: "6 semanas" },
    ],
    url: "https://cretum-website.vercel.app",
    featured: true,
  },
  {
    slug: "tu-negocio-aqui",
    client: "Tu negocio aquí",
    industry: "Cualquier industria",
    package: "Crecimiento",
    summary:
      "El siguiente caso es el tuyo. Agenda una llamada y te enseñamos exactamente cómo tu sitio traería más clientes.",
    challenge:
      "El espacio está reservado para el siguiente cliente que confíe en Altum. Podría ser tu negocio.",
    solution:
      "Aplicamos la misma metodología en 4 fases: Descubrir, Diseñar, Construir, Lanzar. En 10–14 días, listo.",
    metrics: [
      { label: "Entrega", value: "10–14 días" },
      { label: "Rondas", value: "2 incluidas" },
      { label: "Inversión desde", value: "$9,000" },
    ],
  },
];
