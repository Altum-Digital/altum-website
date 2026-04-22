export type Industry = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  waMessage: string;
};

export const industries: Industry[] = [
  {
    slug: "talleres",
    name: "Talleres mecánicos",
    icon: "🔧",
    tagline: "Cotizaciones por WhatsApp, servicios por categoría, confianza con seguros y marcas.",
    waMessage: "Hola Altum, quiero ver los demos de sitios para taller mecánico",
  },
  {
    slug: "restaurantes",
    name: "Restaurantes",
    icon: "🍽",
    tagline: "Menú digital, reservas, ubicación y reseñas — todo en un sitio rápido.",
    waMessage: "Hola Altum, quiero ver los demos de sitios para restaurante",
  },
  {
    slug: "salones",
    name: "Salones de belleza",
    icon: "💇",
    tagline: "Catálogo de servicios, estilistas, Instagram integrado y booking.",
    waMessage: "Hola Altum, quiero ver los demos de sitios para salón de belleza",
  },
  {
    slug: "barberias",
    name: "Barberías",
    icon: "💈",
    tagline: "Booking por barbero, paquetes, productos y galería antes/después.",
    waMessage: "Hola Altum, quiero ver los demos de sitios para barbería",
  },
  {
    slug: "spa",
    name: "Spa y bienestar",
    icon: "🧖",
    tagline: "Rituales, terapeutas, gift cards y reservas online.",
    waMessage: "Hola Altum, quiero ver los demos de sitios para spa",
  },
];
