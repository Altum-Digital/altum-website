export type Pkg = {
  key: "presencia" | "total" | "personalizado";
  name: string;
  price: string;
  priceNumber: number;
  time: string;
  pitch: string;
  pages: string;
  features: string[];
  support: string;
  accent: "orange" | "teal" | "lime" | "navy";
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    key: "presencia",
    name: "Presencia",
    price: "$9,000",
    priceNumber: 9000,
    time: "5–7 días",
    pitch: "Tu negocio visible en internet. Ideal si nunca has tenido página web.",
    pages: "1 página (one-pager)",
    features: [
      "1 página one-pager",
      "Formulario → WhatsApp",
      "FAQ + garantía con número",
      "Stats de 3 métricas",
      "Legal completo (aviso + cookies)",
      "Schema.org + Meta tags",
      "1 ronda de ajustes",
    ],
    support: "30 días de soporte post-entrega",
    accent: "orange",
  },
  {
    key: "total",
    name: "Total",
    price: "$12,000",
    priceNumber: 12000,
    time: "20–30 días",
    pitch: "Hasta 5 páginas + landings SEO por servicio para dominar Google local.",
    pages: "Hasta 5 páginas + landings SEO",
    features: [
      "Hasta 5 páginas completas",
      "Hasta 13 landings SEO por servicio",
      "Landing B2B (corporativo)",
      "Stats + logos de clientes",
      "Google Reviews dinámicas",
      "Revisiones ilimitadas",
      "Sitemap avanzado (20+ URLs)",
    ],
    support: "60 días de soporte incluido",
    accent: "lime",
    featured: true,
  },
  {
    key: "personalizado",
    name: "Personalizado",
    price: "$20,000+",
    priceNumber: 20000,
    time: "A cotizar · 4–8 semanas",
    pitch: "Proyecto 100% a la medida. Sin plantilla, todo desde cero.",
    pages: "Páginas ilimitadas",
    features: [
      "Páginas ilimitadas",
      "Diseño 100% a la medida",
      "Landings ilimitadas",
      "Integraciones a medida",
      "Animaciones custom (Lottie / GSAP)",
      "Revisiones ilimitadas",
      "Stats custom con datos reales",
    ],
    support: "90 días de soporte incluido",
    accent: "navy",
  },
];

export const comparisonRows: {
  category: string;
  rows: { feature: string; values: [string, string, string] }[];
}[] = [
  {
    category: "Estructura",
    rows: [
      { feature: "Páginas incluidas", values: ["1 (one-pager)", "Hasta 5", "Ilimitadas"] },
      { feature: "Landings SEO por servicio", values: ["—", "Hasta 13", "Ilimitadas"] },
      { feature: "Landing B2B / Corporativo", values: ["—", "✓", "✓"] },
      { feature: "Sitemap + robots.txt", values: ["—", "✓", "✓"] },
    ],
  },
  {
    category: "Contenido y confianza",
    rows: [
      { feature: "FAQ accordion", values: ["✓", "✓", "✓"] },
      { feature: "Garantía con número específico", values: ["✓", "✓", "✓"] },
      { feature: "Stats animados", values: ["3 métricas", "4–5 + logos", "Custom"] },
      { feature: "Marcas atendidas (marquee)", values: ["—", "✓", "✓"] },
      { feature: "Seguros / alianzas", values: ["—", "✓", "✓"] },
      { feature: "Google Reviews badge", values: ["—", "✓", "✓"] },
    ],
  },
  {
    category: "Funcionalidad",
    rows: [
      { feature: "Formulario → WhatsApp", values: ["✓", "✓", "✓"] },
      { feature: "Micro-interacciones premium", values: ["—", "✓", "✓"] },
      { feature: "Diseño 100% a la medida", values: ["—", "—", "✓"] },
    ],
  },
  {
    category: "Legal y base",
    rows: [
      { feature: "Aviso + T&C + cookies (LFPDPPP)", values: ["✓", "✓", "✓"] },
      { feature: "Schema.org + Meta tags", values: ["✓", "✓", "✓"] },
      { feature: "Core Web Vitals optimizados", values: ["✓", "✓", "✓"] },
      { feature: "Responsive + móvil", values: ["✓", "✓", "✓"] },
    ],
  },
  {
    category: "Proceso",
    rows: [
      { feature: "Rondas de ajustes", values: ["1", "Ilimitadas", "Ilimitadas"] },
      { feature: "Soporte post-entrega", values: ["30 días", "60 días", "90 días"] },
      { feature: "Tiempo de entrega", values: ["5–7 días", "20–30 días", "4–8 semanas"] },
    ],
  },
];
