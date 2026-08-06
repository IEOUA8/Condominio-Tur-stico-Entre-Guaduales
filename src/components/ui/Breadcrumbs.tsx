import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: { name: string; href: string }[];
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-ivory-50/70" : "text-forest-900/60";
  return (
    <nav aria-label="Ruta de navegación" className={`flex flex-wrap items-center gap-1.5 text-xs ${color}`}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={it.href} className="flex items-center gap-1.5">
            {last ? (
              <span aria-current="page" className={tone === "light" ? "text-ivory-50" : "text-forest-900"}>
                {it.name}
              </span>
            ) : (
              <Link href={it.href} className="hover:underline">
                {it.name}
              </Link>
            )}
            {!last && <Icon name="chevronRight" size={12} className="opacity-50" />}
          </span>
        );
      })}
    </nav>
  );
}
