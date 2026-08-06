import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
  tone = "sand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "sand" | "forest" | "glass" | "gold" | "outline";
}) {
  const tones: Record<string, string> = {
    sand: "bg-sand-200/60 text-forest-900",
    forest: "bg-forest-800 text-ivory-50",
    glass: "glass text-forest-900",
    gold: "bg-gold-500/20 text-clay-600",
    outline: "border border-forest-900/15 text-forest-800",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
