import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "ivory",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "ivory" | "white" | "forest" | "sand" | "none";
}) {
  const tones: Record<string, string> = {
    ivory: "bg-ivory-50 text-ink-900",
    white: "bg-white text-ink-900",
    forest: "bg-forest-950 text-ivory-50",
    sand: "bg-sand-200/40 text-ink-900",
    none: "",
  };
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "guadua",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "guadua" | "gold" | "ivory";
}) {
  const tones = {
    guadua: "text-guadua-700",
    gold: "text-gold-500",
    ivory: "text-sage-400",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}
