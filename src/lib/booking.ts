/* ==========================================================================
   INTERFAZ COMÚN DE RESERVA (§11, §19.2)
   BOOKING_MODE = "whatsapp" hoy · preparada para "checkout" a futuro.
   El wizard consume `submitBookingRequest`, sin conocer el canal final.
   ========================================================================== */
import { BOOKING_MODE, site, whatsappLink } from "@/content/site";
import { formatCOP, formatDateShort } from "@/lib/format";

export type TripReason =
  | "pareja"
  | "familia"
  | "dos-familias"
  | "amigos"
  | "descanso-grupo"
  | "otro";

export const TRIP_REASON_LABELS: Record<TripReason, string> = {
  pareja: "Escapada en pareja",
  familia: "Viaje familiar",
  "dos-familias": "Dos familias",
  amigos: "Amigos",
  "descanso-grupo": "Descanso de grupo",
  otro: "Otro",
};

export type GuestGroup = {
  adults: number;
  children: number;
  babies: number;
  pets: number;
};

export type BookingAddons = {
  transport: boolean;
  pet: boolean;
  specialOccasion: string; // texto libre opcional
  accessibility: boolean;
  arrivalTime: string;
  comments: string;
};

export type BookingContact = {
  firstName: string;
  lastName: string;
  whatsapp: string;
  email: string;
  origin: string;
  preferredContact: "whatsapp" | "correo" | "llamada";
  dataConsent: boolean;
  termsAccepted: boolean;
};

export type BookingRequest = {
  experienceSlug: string;
  experienceName: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  nights: number;
  group: GuestGroup;
  reason: TripReason | null;
  addons: BookingAddons;
  contact: BookingContact;
  estimatedTotal: number;
  isEstimate: boolean;
  requiresQuote: boolean;
};

export type BookingResult = {
  id: string;
  channel: "whatsapp" | "checkout";
  whatsappUrl?: string;
  message: string;
};

/** Identificador único legible de la solicitud (§11.9). */
export function generateRequestId(): string {
  const t = Date.now().toString(36).toUpperCase().slice(-5);
  const r = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `EG-${t}${r}`;
}

export function totalGuests(g: GuestGroup): number {
  return g.adults + g.children + g.babies;
}

/** Mensaje estructurado para WhatsApp (plantilla §11.9, ampliada). */
export function buildWhatsappMessage(req: BookingRequest, id: string): string {
  const g = req.group;
  const yn = (b: boolean) => (b ? "Sí" : "No");
  const value = req.requiresQuote
    ? `${formatCOP(req.estimatedTotal)} (estimado — requiere cotización)`
    : req.isEstimate
      ? `desde ${formatCOP(req.estimatedTotal)}`
      : formatCOP(req.estimatedTotal);

  const lines = [
    "Hola, quiero consultar disponibilidad en Entre Guaduales.",
    "",
    `Solicitud: ${id}`,
    `Experiencia: ${req.experienceName}`,
    `Llegada: ${formatDateShort(req.checkIn)}`,
    `Salida: ${formatDateShort(req.checkOut)}`,
    `Noches: ${req.nights}`,
    `Huéspedes: ${g.adults} adultos / ${g.children} niños / ${g.babies} bebés`,
    `Mascotas: ${g.pets > 0 ? `Sí (${g.pets})` : "No"}`,
    `Transporte: ${yn(req.addons.transport)}`,
    `Valor estimado: ${value}`,
    `Nombre: ${req.contact.firstName} ${req.contact.lastName}`.trim(),
  ];

  if (req.contact.origin) lines.push(`Origen: ${req.contact.origin}`);
  if (req.addons.arrivalTime) lines.push(`Hora aprox. de llegada: ${req.addons.arrivalTime}`);
  if (req.addons.specialOccasion) lines.push(`Ocasión especial: ${req.addons.specialOccasion}`);
  if (req.addons.accessibility) lines.push("Requiere accesibilidad: Sí");
  if (req.addons.comments) lines.push(`Comentarios: ${req.addons.comments}`);

  return lines.join("\n");
}

const STORAGE_KEY = "eg_booking_requests";

/** Persistencia ligera local mientras no exista backend (§11.9). */
function persistLocally(id: string, req: BookingRequest) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown[]) : [];
    list.push({ id, createdAt: new Date().toISOString(), request: req });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(-25)));
  } catch {
    /* almacenamiento no disponible: no bloquea el flujo */
  }
}

/**
 * Punto de entrada común del flujo de reserva.
 * En modo "whatsapp" genera ID, mensaje y enlace; guarda copia local.
 * A futuro (modo "checkout") aquí se llamaría a la API/pasarela.
 */
export function submitBookingRequest(req: BookingRequest): BookingResult {
  const id = generateRequestId();
  const message = buildWhatsappMessage(req, id);
  persistLocally(id, req);

  if (BOOKING_MODE === "whatsapp") {
    return {
      id,
      channel: "whatsapp",
      whatsappUrl: whatsappLink(message),
      message,
    };
  }

  // Rama preparada para el futuro checkout con pasarela.
  return { id, channel: "checkout", message };
}

export { site };
