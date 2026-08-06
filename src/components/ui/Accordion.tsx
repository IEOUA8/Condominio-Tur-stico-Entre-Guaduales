"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export type AccordionItem = {
  q: string;
  a: React.ReactNode;
  badge?: string;
};

export function Accordion({
  items,
  className,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-forest-900/10 rounded-2xl border border-forest-900/10 bg-white/60", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="flex items-center gap-2 font-medium text-forest-900">
                  {item.q}
                  {item.badge && (
                    <span className="rounded-full bg-sand-200/70 px-2 py-0.5 text-[11px] font-medium text-clay-600">
                      {item.badge}
                    </span>
                  )}
                </span>
                <Icon
                  name="chevronDown"
                  size={20}
                  className={cn("shrink-0 text-guadua-700 transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-forest-900/80 sm:px-6"
            >
              <div className="max-w-prose leading-relaxed">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
