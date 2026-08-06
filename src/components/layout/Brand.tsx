import Image from "next/image";
import { cn } from "@/lib/cn";

/* Marca tipográfica (alto contraste garantizado en header/inner pages). */
export function BrandWordmark({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LeafMark
        className={cn("h-7 w-7 shrink-0", tone === "light" ? "text-gold-400" : "text-guadua-700")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg tracking-tight sm:text-xl",
            tone === "light" ? "text-white" : "text-forest-900",
          )}
        >
          Entre Guaduales
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.22em]",
            tone === "light" ? "text-ivory-50/70" : "text-guadua-700/80",
          )}
        >
          Condominio turístico
        </span>
      </span>
    </span>
  );
}

/* Marca gráfica: logo oficial (sobre fondos oscuros). */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt="Condominio Turístico Entre Guaduales"
      width={200}
      height={250}
      className={cn("h-auto w-auto", className)}
    />
  );
}

/* Árbol/guadua estilizado inspirado en el logo, como marca gráfica ligera. */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 44V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 30c-3-1-6-3-7-6M24 26c3-1 6-3 7-6M24 22c-2.5-1.5-4.5-4-5-7M24 20c2.5-1.5 4.5-4 5-7M24 16c-1.5-2-2-4.5-1.5-7M24 15c1.5-2 2-4.5 1.5-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="7" r="2.2" fill="currentColor" />
    </svg>
  );
}
