/**
 * Formato monetario colombiano (§10.4).
 * Ej: 1500000 -> "$1.500.000"
 */
const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function formatCOP(value: number): string {
  return COP.format(value);
}

/** Variante "desde" para tarifas variables (Dos Familias, §10.2). */
export function formatFromCOP(value: number): string {
  return `desde ${formatCOP(value)}`;
}

const DATE_LONG = new Intl.DateTimeFormat("es-CO", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDateLong(date: Date): string {
  return DATE_LONG.format(date);
}

const DATE_SHORT = new Intl.DateTimeFormat("es-CO", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function formatDateShort(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date + "T00:00:00") : date;
  if (Number.isNaN(d.getTime())) return "—";
  return DATE_SHORT.format(d);
}
