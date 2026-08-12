/* ==========================================================================
   CONFIGURACIÓN CENTRAL DEL SITIO · Entre Guaduales
   --------------------------------------------------------------------------
   Todos los datos comerciales/legales pendientes de confirmar por el cliente
   están marcados con  ⚠️ PLACEHOLDER  y agrupados en `site.pending`.
   Reemplázalos aquí y se actualizan en todo el sitio automáticamente.
   El documento maestro (§16, §23) prohíbe inventar datos: por eso los valores
   sin confirmar usan marcadores evidentes, no datos falsos.
   ========================================================================== */

export type PendingKey =
  | "whatsapp"
  | "phone"
  | "email"
  | "location"
  | "rnt"
  | "legalEntity"
  | "checkInOut"
  | "paymentMethods"
  | "responseTime"
  | "social";

export const BOOKING_MODE: "whatsapp" | "checkout" = "whatsapp";

/** Marca un valor como placeholder pendiente de confirmación del cliente. */
const P = true;

export const site = {
  name: "Entre Guaduales",
  legalName: "Condominio Turístico Entre Guaduales",
  tagline: "Naturaleza y comodidad",
  promise: "Experiencias para crear recuerdos inolvidables.",
  domain: "condominioturisticoentreguaduales.com",
  url: "https://condominioturisticoentreguaduales.com",
  locale: "es_CO",

  /* ----- Contacto (⚠️ PLACEHOLDERS: confirmar con el cliente) ----- */
  contact: {
    // Solo dígitos con código de país para enlaces wa.me. ✅ Confirmado por el cliente
    whatsapp: "573116791517",
    whatsappDisplay: "+57 311 679 1517",
    whatsappIsPlaceholder: false,

    // El cliente no tiene una línea fija/adicional: el canal telefónico es el mismo WhatsApp.
    phone: "+57 311 679 1517",
    phoneIsPlaceholder: false,

    email: "admin@condominioturisticoentreguaduales.com", // ✅ Confirmado por el cliente
    emailIsPlaceholder: false,

    // Ubicación confirmada por el cliente (Oriente Antioqueño).
    city: "Rionegro, Antioquia",
    region: "Oriente Antioqueño",
    addressPublic:
      "Oriente Antioqueño, cerca de Rionegro (Vía a Galicia). La dirección detallada se comparte al confirmar la reserva.",
    locationIsPlaceholder: false,
    mapEmbedUrl: "https://www.google.com/maps?q=Condominio+Tur%C3%ADstico+Entre+Guaduales&output=embed",
    mapLink: "https://maps.app.goo.gl/ZziFaNUXC2pVto2B8",
  },

  /* ----- Registro / legales (✅ confirmado por el cliente) ----- */
  legal: {
    rnt: "220283",
    rntIsPlaceholder: false,
    responsibleName: "Rubén Darío Vargas Echeverri",
    documentId: "C.C. 15.444.992",
    // ✅ Confirmado por el cliente (2026-08-12): correo único para todo.
    privacyEmail: "admin@condominioturisticoentreguaduales.com",
    legalIsPlaceholder: false,
  },

  /* ----- Operación (✅ confirmado por el cliente) ----- */
  operations: {
    checkIn: "3:00 p. m.",
    checkOut: "12:00 m. (mediodía)",
    responseTime: "", // ⚠️ PENDIENTE: el cliente no definió un tiempo de respuesta
    // Los datos de la cuenta NO se publican (se comparten en privado al reservar).
    paymentMethods: ["Transferencia bancaria (Bancolombia)"],
    depositAmount: 500_000,
    depositPolicy:
      "Depósito de garantía de $500.000, devuelto al día siguiente del check-out al titular de la reserva.",
    cancellationPolicy:
      "Cancelación con devolución del 100% hasta 24 horas antes del check-in (3:00 p. m.). Con la cancelación oportuna, a elección del huésped se reembolsa el valor o se reprograma la estadía según disponibilidad.",
    transport:
      "El servicio de transporte se coordina directamente con el anfitrión, según recorridos programados con antelación.",
  },

  /* ----- Redes sociales y canales (confirmados por el cliente, 2026-08-12) ----- */
  social: {
    instagram: "https://www.instagram.com/cond_turistico_entre_guaduales",
    threads: "https://www.threads.net/@cond_turistico_entre_guaduales",
    facebook: "https://www.facebook.com/profile.php?id=61580204087108",
    tiktok: "https://www.tiktok.com/@cond.turistico.en",
    google: "https://share.google/hHCtB6T2wZzRoRSu8",
    // Airbnb: enlaces PÚBLICOS por cabaña (URLs canónicas /rooms/{id}, sin parámetros de rastreo).
    airbnb: "https://www.airbnb.com.co/rooms/1347007135384451783", // Guacharaca (principal)
    airbnbListings: [
      { cabin: "Sirirí", url: "https://www.airbnb.com.co/rooms/1505894084580266005" },
      { cabin: "Barranquero", url: "https://www.airbnb.com.co/rooms/1284802899806939624" },
      { cabin: "Guacharaca", url: "https://www.airbnb.com.co/rooms/1347007135384451783" },
    ] as { cabin: string; url: string }[],
  },

  /* Capacidad global verificada por el documento (§2.3, §7.3). */
  capacity: {
    minGuests: 2,
    maxGuests: 26,
  },
} as const;

/** Registro legible de todo lo pendiente por confirmar (para el equipo). */
export const PENDING: { key: PendingKey; label: string; where: string }[] = [
  { key: "responseTime", label: "Tiempo de respuesta comprometido", where: "site.operations.responseTime" },
];

/* --------------------------- Navegación (§6.1) --------------------------- */
export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Experiencias", href: "/experiencias" },
  { label: "Condominio", href: "/condominio" },
  { label: "Galería", href: "/galeria" },
  { label: "Servicios", href: "/servicios" },
  { label: "Ubicación", href: "/ubicacion" },
];

export const footerNav = {
  explorar: [
    { label: "Inicio", href: "/" },
    { label: "Experiencias", href: "/experiencias" },
    { label: "El condominio", href: "/condominio" },
    { label: "Galería", href: "/galeria" },
    { label: "Servicios", href: "/servicios" },
    { label: "Ubicación", href: "/ubicacion" },
  ],
  reservar: [
    { label: "Reservar estadía", href: "/reservar" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Reglamento", href: "/reglamento" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
    { label: "Política de cookies", href: "/politica-de-cookies" },
    { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
    { label: "Política de cancelación", href: "/politica-de-cancelacion" },
  ],
};

/* ----------------------------- WhatsApp ---------------------------------- */
/** Construye un enlace wa.me con mensaje precargado. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, quiero consultar disponibilidad en Entre Guaduales.";

/* Aviso antifraude oficial (§16). */
export const ANTIFRAUD_NOTICE =
  "Realiza pagos únicamente a través de los canales oficiales informados por Entre Guaduales. Verifica siempre el nombre del titular y el número de tu solicitud antes de transferir.";
