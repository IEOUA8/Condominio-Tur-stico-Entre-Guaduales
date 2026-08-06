import { Icon } from "@/components/ui/Icon";
import { ANTIFRAUD_NOTICE } from "@/content/site";
import { cn } from "@/lib/cn";

export function AntifraudNotice({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
        tone === "dark"
          ? "border-white/15 bg-white/5 text-ivory-50/80"
          : "border-clay-500/25 bg-clay-500/8 text-forest-900/80",
        className,
      )}
    >
      <Icon name="shield" size={20} className={cn("mt-0.5 shrink-0", tone === "dark" ? "text-gold-400" : "text-clay-600")} />
      <p className="leading-relaxed">{ANTIFRAUD_NOTICE}</p>
    </div>
  );
}
