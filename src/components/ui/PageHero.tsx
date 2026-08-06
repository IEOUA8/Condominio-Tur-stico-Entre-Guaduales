import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
  children,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { name: string; href: string }[];
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 text-ivory-50">
      {image && (
        <>
          <Image src={image} alt={imageAlt || ""} fill sizes="100vw" className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/60" />
        </>
      )}
      <Container className={compact ? "relative pb-10 pt-28 sm:pt-32" : "relative pb-14 pt-28 sm:pb-20 sm:pt-36"}>
        {breadcrumbs && (
          <div className="mb-5">
            <Breadcrumbs items={breadcrumbs} tone="light" />
          </div>
        )}
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{eyebrow}</span>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-ivory-50/80 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  );
}
