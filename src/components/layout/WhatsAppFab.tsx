"use client";

import { usePathname } from "next/navigation";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";

export function WhatsAppFab() {
  const pathname = usePathname();
  // El flujo de reserva tiene su propia barra de acción fija.
  if (pathname.startsWith("/reservar")) return null;
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      onClick={() => track("whatsapp_click", { location: "fab" })}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#06381f] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 lg:flex"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
