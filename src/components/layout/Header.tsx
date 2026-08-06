"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { primaryNav, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { BrandLockup } from "@/components/layout/Brand";
import { track } from "@/lib/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al cambiar de ruta y bloquear scroll cuando está abierto.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled && !open; // texto claro sobre hero
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-forest-900/5 py-3 shadow-[0_8px_30px_-18px_rgba(11,33,27,0.45)]"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Entre Guaduales, inicio" className="shrink-0">
          <BrandLockup tone={dark ? "light" : "dark"} sublabel="Condominio turístico" size="sm" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors",
                  dark ? "text-ivory-50/85 hover:text-white" : "text-forest-800/90 hover:text-forest-900",
                  active && (dark ? "text-white" : "text-guadua-700"),
                )}
              >
                {item.label}
                {active && (
                  <span className={cn("absolute inset-x-3.5 -bottom-0.5 h-px", dark ? "bg-gold-400" : "bg-guadua-700")} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/experiencias#tarifas"
            className={cn(
              "whitespace-nowrap text-[0.9rem] font-medium transition-colors",
              dark ? "text-ivory-50/85 hover:text-white" : "text-forest-800/90 hover:text-guadua-700",
            )}
          >
            Tarifas
          </Link>
          <Button href="/reservar" variant="gold" size="sm" icon="arrowRight">
            Reservar
          </Button>
        </div>

        {/* Móvil */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/reservar" variant="gold" size="sm" className="px-4">
            Reservar
          </Button>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              dark ? "text-white hover:bg-white/10" : "text-forest-900 hover:bg-forest-900/8",
            )}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Panel móvil a pantalla completa */}
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-forest-950 text-ivory-50 transition-[transform,opacity] duration-300 ease-out lg:hidden",
        open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0",
      )}
      aria-hidden={!open}
    >
      {/* Barra superior del panel: marca + cerrar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <Link href="/" onClick={onClose} aria-label="Entre Guaduales, inicio">
          <BrandLockup tone="light" sublabel="Condominio turístico" size="sm" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory-50 transition-colors hover:bg-white/20 active:scale-95"
        >
          <Icon name="close" size={24} />
        </button>
      </div>

      <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-1">
          <li>
            <MobileLink href="/" label="Inicio" pathname={pathname} onClose={onClose} />
          </li>
          {primaryNav.map((item) => (
            <li key={item.href}>
              <MobileLink href={item.href} label={item.label} pathname={pathname} onClose={onClose} />
            </li>
          ))}
          <li>
            <MobileLink href="/preguntas-frecuentes" label="Preguntas frecuentes" pathname={pathname} onClose={onClose} />
          </li>
          <li>
            <MobileLink href="/reglamento" label="Reglamento" pathname={pathname} onClose={onClose} />
          </li>
          <li>
            <MobileLink href="/contacto" label="Contacto" pathname={pathname} onClose={onClose} />
          </li>
        </ul>

        <div className="safe-bottom mt-6 space-y-3 px-1 pb-6">
          <Button href="/reservar" variant="gold" size="lg" fullWidth icon="arrowRight" onClick={onClose}>
            Reservar estadía
          </Button>
          <Button
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            variant="whatsapp"
            size="lg"
            fullWidth
            icon="whatsapp"
            iconPosition="left"
            onClick={() => {
              track("whatsapp_click", { location: "mobile_menu" });
              onClose();
            }}
          >
            Escríbenos por WhatsApp
          </Button>
        </div>
      </nav>
    </div>
  );
}

function MobileLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string;
  label: string;
  pathname: string;
  onClose: () => void;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClose}
      className={cn(
        "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl transition-colors",
        active ? "bg-white/10 text-gold-400" : "text-ivory-50 hover:bg-white/5",
      )}
    >
      {label}
      <Icon name="arrowUpRight" size={20} className="opacity-50" />
    </Link>
  );
}
