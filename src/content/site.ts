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
    // Solo dígitos con código de país para enlaces wa.me. ⚠️ PLACEHOLDER
    whatsapp: "573000000000",
    whatsappDisplay: "+57 300 000 0000",
    whatsappIsPlaceholder: P,

    phone: "+57 300 000 0000", // ⚠️ PLACEHOLDER
    phoneIsPlaceholder: P,

    email: "admin@condominioturisticoentreguaduales.com", // ✅ Confirmado por el cliente
    emailIsPlaceholder: false,

    // Ubicación (§7.11): el documento pide no publicar dirección exacta hasta
    // confirmación. Mostramos zona general marcada como placeholder.
    city: "Quindío, Colombia", // ⚠️ PLACEHOLDER (región probable — confirmar)
    region: "Eje Cafetero",
    addressPublic: "Ubicación exacta compartida al confirmar la reserva.",
    locationIsPlaceholder: P,
    mapEmbedUrl: "", // ⚠️ PLACEHOLDER: pegar URL de Google Maps embebido al confirmar
  },

  /* ----- Registro / legales (⚠️ PLACEHOLDERS) ----- */
  legal: {
    rnt: "", // ⚠️ PLACEHOLDER: Registro Nacional de Turismo (§23)
    rntIsPlaceholder: P,
    responsibleName: "", // ⚠️ PLACEHOLDER: razón social o responsable
    documentId: "", // ⚠️ PLACEHOLDER: NIT / documento
    privacyEmail: "", // ⚠️ PLACEHOLDER: correo de privacidad
    legalIsPlaceholder: P,
  },

  /* ----- Operación (⚠️ PLACEHOLDERS) ----- */
  operations: {
    checkIn: "Por confirmar", // ⚠️ PLACEHOLDER
    checkOut: "Por confirmar", // ⚠️ PLACEHOLDER
    responseTime: "", // ⚠️ PLACEHOLDER: no prometer tiempos sin confirmar (§7.13)
    paymentMethods: [] as string[], // ⚠️ PLACEHOLDER
    depositPolicy: "Por confirmar", // ⚠️ PLACEHOLDER
  },

  /* ----- Redes sociales (⚠️ PLACEHOLDERS) ----- */
  social: {
    instagram: "", // ⚠️ PLACEHOLDER
    facebook: "", // ⚠️ PLACEHOLDER
    airbnb: "", // ⚠️ PLACEHOLDER
    google: "", // ⚠️ PLACEHOLDER perfil de Google Business
  },

  /* Capacidad global verificada por el documento (§2.3, §7.3). */
  capacity: {
    minGuests: 2,
    maxGuests: 26,
  },
} as const;

/** Registro legible de todo lo pendiente por confirmar (para el equipo). */
export const PENDING: { key: PendingKey; label: string; where: string }[] = [
  { key: "whatsapp", label: "Número de WhatsApp oficial", where: "site.contact.whatsapp" },
  { key: "phone", label: "Teléfono de contacto", where: "site.contact.phone" },
  { key: "email", label: "Correo oficial de reservas", where: "site.contact.email" },
  { key: "location", label: "Ubicación exacta + mapa embebido", where: "site.contact.mapEmbedUrl" },
  { key: "rnt", label: "Registro Nacional de Turismo (RNT)", where: "site.legal.rnt" },
  { key: "legalEntity", label: "Razón social / NIT / correo de privacidad", where: "site.legal" },
  { key: "checkInOut", label: "Horarios de check-in y check-out", where: "site.operations" },
  { key: "paymentMethods", label: "Métodos de pago autorizados", where: "site.operations.paymentMethods" },
  { key: "responseTime", label: "Tiempo de respuesta comprometido", where: "site.operations.responseTime" },
  { key: "social", label: "Enlaces de redes sociales", where: "site.social" },
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
