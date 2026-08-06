/* ==========================================================================
   ANALÍTICA (§18) — capa neutral de eventos.
   Empuja a window.dataLayer (Tag Manager) si existe; si no, no-op.
   Regla §18.3: NUNCA enviar teléfonos, correos o nombres como parámetros.
   ========================================================================== */

export type AnalyticsEvent =
  | "view_home"
  | "view_experience"
  | "view_gallery"
  | "open_booking"
  | "select_dates"
  | "select_guests"
  | "recommendation_generated"
  | "booking_step_completed"
  | "booking_submitted"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "transport_selected"
  | "pet_selected"
  | "view_rules"
  | "accept_terms";

type SafeParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Claves que jamás deben viajar a analítica (§18.3).
const FORBIDDEN = ["name", "firstname", "lastname", "phone", "whatsapp", "email"];

export function track(event: AnalyticsEvent, params: SafeParams = {}): void {
  const safe: SafeParams = {};
  for (const [k, v] of Object.entries(params)) {
    if (FORBIDDEN.includes(k.toLowerCase())) continue;
    safe[k] = v;
  }
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...safe });
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", event, safe);
    }
  }
}
