"use client";

import Link from "next/link";
import { formatCOP } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";
import type { Experience } from "@/content/experiences";

/* Barra CTA sticky en móvil, ubicada sobre la navegación inferior. */
export function StickyExperienceCTA({ exp }: { exp: Experience }) {
  return (
    <div className="fixed inset-x-0 bottom-[5.25rem] z-30 px-3 lg:hidden">
      <div className="glass flex items-center justify-between gap-3 rounded-2xl border border-white/50 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(11,33,27,0.5)]">
        <div className="min-w-0">
          <p className="truncate text-xs text-forest-900/60">{exp.name}</p>
          <p className="tnum text-sm font-semibold text-forest-900">
            {exp.startingAt && <span className="text-xs font-normal text-forest-900/50">desde </span>}
            {formatCOP(exp.oneNightPrice)}
            <span className="text-xs font-normal text-forest-900/50"> / noche</span>
          </p>
        </div>
        <Link
          href={`/reservar?exp=${exp.slug}`}
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-forest-950"
        >
          Consultar
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
}
