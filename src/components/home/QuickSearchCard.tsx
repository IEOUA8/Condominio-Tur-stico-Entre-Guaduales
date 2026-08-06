"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function QuickSearchCard() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    track("open_booking", { source: "hero_quick_search", guests });
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    params.set("guests", String(guests));
    router.push(`/reservar?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className="glass w-full rounded-3xl border border-white/50 p-4 shadow-[0_24px_60px_-24px_rgba(11,33,27,0.7)] sm:p-5"
    >
      <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.16em] text-forest-900/70">
        Encuentra tu experiencia
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto_auto] sm:items-end">
        <Field label="Llegada" icon="calendar">
          <input
            type="date"
            min={todayISO()}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (checkOut && e.target.value >= checkOut) setCheckOut("");
            }}
            aria-label="Fecha de llegada"
            className="w-full bg-transparent text-sm font-medium text-forest-900 outline-none"
          />
        </Field>
        <Field label="Salida" icon="calendar">
          <input
            type="date"
            min={checkIn || todayISO()}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            aria-label="Fecha de salida"
            className="w-full bg-transparent text-sm font-medium text-forest-900 outline-none"
          />
        </Field>
        <Field label="Huéspedes" icon="users">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Menos huéspedes"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
            >
              <Icon name="minus" size={14} />
            </button>
            <span className="tnum w-6 text-center text-sm font-semibold text-forest-900">{guests}</span>
            <button
              type="button"
              aria-label="Más huéspedes"
              onClick={() => setGuests((g) => Math.min(26, g + 1))}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
            >
              <Icon name="plus" size={14} />
            </button>
          </div>
        </Field>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950 shadow-[0_10px_24px_-8px_rgba(198,161,91,0.8)] transition-colors hover:bg-gold-400 sm:h-[52px]"
        >
          Ver opciones
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: "calendar" | "users";
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 rounded-2xl bg-white/60 px-3.5 py-2.5">
      <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-forest-900/60">
        <Icon name={icon} size={13} />
        {label}
      </span>
      {children}
    </label>
  );
}
