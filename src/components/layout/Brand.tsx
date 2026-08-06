import { cn } from "@/lib/cn";

/* ==========================================================================
   MARCA · Condominio Turístico Entre Guaduales
   Lockup vectorial recolreable (árbol en marco + nombre + tagline).
   Se pinta según el fondo para máxima legibilidad:
     - "light" : sobre fotografía/hero oscuro  → dorado + blanco
     - "gold"  : sobre superficies oscuras (footer) → dorado + marfil
     - "dark"  : sobre superficies claras (header con scroll) → verde profundo
   Para reemplazar por el archivo oficial exacto, ver TreeMark.
   ========================================================================== */

type Tone = "light" | "dark" | "gold";

const tones: Record<Tone, { mark: string; name: string; sub: string }> = {
  light: { mark: "text-gold-400", name: "text-white", sub: "text-ivory-50/75" },
  dark: { mark: "text-guadua-700", name: "text-forest-900", sub: "text-guadua-700/80" },
  gold: { mark: "text-gold-400", name: "text-ivory-50", sub: "text-gold-400/80" },
};

const markSizes: Record<string, string> = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const nameSizes: Record<string, string> = {
  sm: "text-base sm:text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function BrandLockup({
  tone = "dark",
  size = "sm",
  sublabel = "Naturaleza y comodidad",
  orientation = "horizontal",
  className,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  sublabel?: string;
  /** "horizontal" | "stacked" | "responsive" (apilado en móvil, horizontal en lg) */
  orientation?: "horizontal" | "stacked" | "responsive";
  className?: string;
}) {
  const c = tones[tone];
  const layout =
    orientation === "stacked"
      ? "flex-col items-center text-center"
      : orientation === "responsive"
        ? "flex-col items-center text-center lg:flex-row lg:items-center lg:text-left"
        : "flex-row items-center";

  return (
    <span className={cn("flex gap-3", layout, className)}>
      <TreeMark className={cn("shrink-0", markSizes[size], c.mark)} />
      <span className={cn("flex flex-col leading-none", orientation !== "horizontal" && "items-center lg:items-start")}>
        <span className={cn("font-display tracking-tight", nameSizes[size], c.name)}>Entre Guaduales</span>
        <span className={cn("mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em]", c.sub)}>
          {sublabel}
        </span>
      </span>
    </span>
  );
}

/* Marca gráfica: árbol de guadua estilizado dentro de un marco cuadrado.
   (Rendición vectorial fiel al logo; sustituible por el asset oficial.) */
export function TreeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="3.5" width="41" height="41" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        {/* tronco */}
        <path d="M24 41c-.4-5 .6-8.5 0-12.5" />
        {/* ramas izquierda */}
        <path d="M24 33c-3-1-5.4-2.9-6.4-5.9" />
        <path d="M24 29.2c-3-1.5-4.9-4-5.4-7.9" />
        <path d="M24 25.6c-2-3-3-6-2-9.5" />
        {/* ramas derecha */}
        <path d="M24 33c3-1 5.4-2.9 6.4-5.9" />
        <path d="M24 29.2c3-1.5 4.9-4 5.4-7.9" />
        <path d="M24 25.6c2-3 3-6 2-9.5" />
        {/* rama central */}
        <path d="M24 25c0-4 0-8 0-11.5" />
        {/* brotes (loops abiertos) */}
        <circle cx="16.6" cy="26.4" r="1.7" />
        <circle cx="17.7" cy="20.4" r="1.7" />
        <circle cx="21.7" cy="15.6" r="1.7" />
        <circle cx="31.4" cy="26.4" r="1.7" />
        <circle cx="30.3" cy="20.4" r="1.7" />
        <circle cx="26.3" cy="15.6" r="1.7" />
        <circle cx="24" cy="12.8" r="1.8" />
      </g>
    </svg>
  );
}
