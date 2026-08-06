import Image from "next/image";
import { cn } from "@/lib/cn";

/* ==========================================================================
   MARCA · Condominio Turístico Entre Guaduales
   Logo oficial (imagen). Dos versiones para legibilidad en cualquier fondo:
     - /brand/logo-header.png       → dorado, para fondos oscuros (hero, footer)
     - /brand/logo-header-dark.png  → verde profundo, para el header claro
   `adaptive` hace un cruce suave entre ambas según el fondo (scroll del header).
   ========================================================================== */

const GOLD = "/brand/logo-header.png";
const DARK = "/brand/logo-header-dark.png";
const W = 1100;
const H = 298;

type Tone = "light" | "dark" | "gold";

const sizeH: Record<string, string> = {
  sm: "h-10 lg:h-12",
  md: "h-12",
  lg: "h-14 lg:h-16",
};

export function BrandLockup({
  tone = "dark",
  size = "sm",
  adaptive = false,
  priority = false,
  className,
}: {
  /** "light"/"gold" → logo dorado · "dark" → logo verde (fondo claro) */
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  /** true en el header: cruza dorado↔verde según el fondo */
  adaptive?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const h = sizeH[size];

  if (!adaptive) {
    return (
      <Image
        src={tone === "dark" ? DARK : GOLD}
        alt="Condominio Turístico Entre Guaduales"
        width={W}
        height={H}
        priority={priority}
        className={cn(h, "w-auto max-w-[60vw] object-contain", className)}
      />
    );
  }

  const showDark = tone === "dark";
  return (
    <span className={cn("relative inline-flex", className)}>
      <Image
        src={GOLD}
        alt="Condominio Turístico Entre Guaduales"
        width={W}
        height={H}
        priority={priority}
        className={cn(h, "w-auto object-contain transition-opacity duration-300", showDark && "opacity-0")}
      />
      <Image
        src={DARK}
        alt=""
        aria-hidden
        width={W}
        height={H}
        className={cn(h, "absolute inset-0 w-auto object-contain transition-opacity duration-300", !showDark && "opacity-0")}
      />
    </span>
  );
}
