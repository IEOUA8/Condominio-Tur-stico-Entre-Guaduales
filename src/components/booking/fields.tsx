"use client";

import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function Stepper({
  label,
  value,
  min = 0,
  max = 26,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-forest-900/10 bg-white px-4 py-3">
      <div>
        <p className="text-sm font-medium text-forest-900">{label}</p>
        {hint && <p className="text-xs text-forest-900/55">{hint}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Disminuir ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15 disabled:opacity-40"
          disabled={value <= min}
        >
          <Icon name="minus" size={16} />
        </button>
        <span className="tnum w-6 text-center font-semibold text-forest-900">{value}</span>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15 disabled:opacity-40"
          disabled={value >= max}
        >
          <Icon name="plus" size={16} />
        </button>
      </div>
    </div>
  );
}

export function ChipOption({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: IconName;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
        active
          ? "border-guadua-700 bg-guadua-700/10 text-guadua-700"
          : "border-forest-900/12 text-forest-900/70 hover:border-forest-900/30",
      )}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

export function Field({
  label,
  htmlFor,
  error,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 flex items-center gap-1 text-xs text-clay-600" role="alert">
          <Icon name="info" size={13} /> {error}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-2.5 text-sm text-forest-900 outline-none transition-colors placeholder:text-forest-900/40 focus:border-guadua-700 focus:ring-2 focus:ring-guadua-700/20";
