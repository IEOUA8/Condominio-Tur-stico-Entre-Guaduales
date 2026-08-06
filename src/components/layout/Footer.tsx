import Link from "next/link";
import {
  site,
  footerNav,
  whatsappLink,
  DEFAULT_WHATSAPP_MESSAGE,
} from "@/content/site";
import { BrandLockup } from "@/components/layout/Brand";
import { Icon, type IconName } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks: { key: string; href: string; icon: IconName; label: string }[] = [
    { key: "instagram", href: site.social.instagram, icon: "instagram", label: "Instagram" },
    { key: "facebook", href: site.social.facebook, icon: "facebook", label: "Facebook" },
    { key: "google", href: site.social.google, icon: "google", label: "Google" },
  ];
  const socials = socialLinks.filter((s) => s.href);

  return (
    <footer className="bg-forest-950 text-ivory-50/80">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca + descripción (centrado en móvil, izquierda en desktop) */}
          <div className="text-center lg:text-left">
            <BrandLockup tone="gold" size="md" orientation="responsive" />
            <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-ivory-50/70 lg:mx-0">
              Condominio turístico boutique entre la guadua y la naturaleza.
              Experiencias privadas para crear recuerdos inolvidables en pareja,
              familia o con amigos.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 hidden gap-3 lg:flex">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory-50/80 transition-colors hover:border-gold-400 hover:text-gold-400"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Explorar */}
          <FooterColumn title="Explorar" items={footerNav.explorar} className="hidden lg:block" />
          {/* Reservar */}
          <FooterColumn title="Reservar" items={footerNav.reservar} className="hidden lg:block" />

          {/* Contacto */}
          <div className="hidden lg:block">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  className="inline-flex items-center gap-2 hover:text-gold-400"
                >
                  <Icon name="whatsapp" size={16} />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-gold-400">
                  <Icon name="mail" size={16} />
                  {site.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ivory-50/70">
                <Icon name="mapPin" size={16} />
                {site.contact.city}
              </li>
            </ul>
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
              {footerNav.legal.map((l) => (
                <Link key={l.href} href={l.href} className="block text-xs text-ivory-50/60 hover:text-ivory-50">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior (solo escritorio) */}
        <div className="mt-14 hidden flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ivory-50/55 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {site.legalName}.{" "}
            <a href={site.url} className="hover:text-ivory-50">
              {site.domain}
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              RNT:{" "}
              {site.legal.rnt ? (
                site.legal.rnt
              ) : (
                <span className="text-gold-400/80" title="Pendiente de confirmar por el cliente">
                  [pendiente de registro]
                </span>
              )}
            </span>
            <span aria-hidden>·</span>
            <span>Hecho con respeto por la naturaleza</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className,
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{title}</h3>
      <ul className="space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-ivory-50/75 transition-colors hover:text-gold-400">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
