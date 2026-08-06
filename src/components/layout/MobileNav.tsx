"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

type Item = { href: string; label: string; icon: IconName };

const items: Item[] = [
  { href: "/", label: "Inicio", icon: "cabin" },
  { href: "/experiencias", label: "Experiencias", icon: "sparkles" },
  { href: "/reservar", label: "Reservar", icon: "calendar" },
  { href: "/galeria", label: "Galería", icon: "leaf" },
  { href: "/contacto", label: "Contacto", icon: "phone" },
];

export function MobileNav() {
  const pathname = usePathname();

  // No mostrar sobre el flujo de reserva (el wizard tiene su propio CTA sticky).
  if (pathname.startsWith("/reservar")) return null;

  return (
    <nav
      aria-label="Navegación rápida"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="glass mx-3 mb-3 flex items-stretch justify-around rounded-2xl border border-white/40 px-1.5 py-1.5 shadow-[0_12px_40px_-12px_rgba(11,33,27,0.5)]">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const isReservar = item.href === "/reservar";

          if (isReservar) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className="flex flex-1 flex-col items-center justify-center gap-1"
              >
                <span className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-forest-950 shadow-[0_10px_24px_-6px_rgba(198,161,91,0.8)] ring-4 ring-ivory-50">
                  <Icon name={item.icon} size={24} />
                </span>
                <span className="text-[11px] font-semibold text-forest-900">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5 transition-colors",
                active ? "text-guadua-700" : "text-forest-900/60",
              )}
            >
              <Icon name={item.icon} size={22} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
