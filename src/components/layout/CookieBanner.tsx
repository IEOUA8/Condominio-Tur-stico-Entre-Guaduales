"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const KEY = "eg_cookie_consent";

/* Banner de cookies no invasivo (§14.1, §18.3). No bloquea la navegación. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(KEY, value);
      // Notifica a la analítica (Meta Pixel) para activarse sin recargar.
      window.dispatchEvent(new Event("eg-cookie-consent"));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-3 bottom-24 z-50 lg:inset-x-auto lg:bottom-6 lg:left-6 lg:max-w-sm"
    >
      <div className="glass rounded-2xl border border-white/50 p-5 shadow-[0_18px_50px_-20px_rgba(11,33,27,0.6)]">
        <p className="text-sm leading-relaxed text-forest-900">
          Usamos cookies esenciales y, con tu permiso, de analítica para mejorar tu
          experiencia. Consulta nuestra{" "}
          <Link href="/politica-de-cookies" className="font-semibold text-guadua-700 underline">
            política de cookies
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="primary" onClick={() => decide("accepted")} className="flex-1">
            Aceptar
          </Button>
          <Button size="sm" variant="secondary" onClick={() => decide("rejected")} className="flex-1">
            Solo esenciales
          </Button>
        </div>
      </div>
    </div>
  );
}
