import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/content/experiences";
import { formatCOP } from "@/lib/format";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

const accentRing: Record<Experience["accent"], string> = {
  clay: "group-hover:ring-clay-500/40",
  guadua: "group-hover:ring-guadua-700/40",
  gold: "group-hover:ring-gold-500/50",
  forest: "group-hover:ring-forest-800/40",
  sage: "group-hover:ring-sage-500/50",
};

export function ExperienceCard({
  exp,
  priority = false,
}: {
  exp: Experience;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-24px_rgba(11,33,27,0.45)] ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(11,33,27,0.5)] hover:ring-2",
        accentRing[exp.accent],
      )}
    >
      <Link href={`/experiencias/${exp.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={exp.featured.src}
          alt={exp.featured.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-forest-900 backdrop-blur">
          {exp.groupLabel}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-ivory-50">
          <Icon name="users" size={16} />
          <span className="text-sm font-medium">
            {exp.minGuests === exp.maxGuests
              ? `${exp.maxGuests} huéspedes`
              : `${exp.minGuests}–${exp.maxGuests} huéspedes`}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl text-forest-900">
          <Link href={`/experiencias/${exp.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {exp.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-forest-900/70">{exp.shortDescription}</p>

        <div className="mt-4 flex items-baseline gap-1.5">
          {exp.startingAt && <span className="text-xs font-medium text-forest-900/60">desde</span>}
          <span className="tnum font-display text-2xl text-guadua-700">{formatCOP(exp.oneNightPrice)}</span>
          <span className="text-xs text-forest-900/50">/ noche</span>
        </div>

        <div className="mt-5 flex items-center gap-2 pt-1">
          <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-4 py-2 text-sm font-semibold text-ivory-50 transition-colors group-hover:bg-guadua-700">
            Ver experiencia
            <Icon name="arrowRight" size={16} />
          </span>
          <Link
            href={`/reservar?exp=${exp.slug}`}
            className="relative z-10 rounded-full px-3 py-2 text-sm font-medium text-guadua-700 hover:bg-guadua-700/8"
          >
            Consultar
          </Link>
        </div>
      </div>
    </article>
  );
}
