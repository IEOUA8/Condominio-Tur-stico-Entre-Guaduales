"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { cn } from "@/lib/cn";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/content/gallery";
import { track } from "@/lib/analytics";

export function GalleryExplorer() {
  const [active, setActive] = useState<GalleryCategory | "Todo">("Todo");

  const photos = useMemo(() => {
    const items = active === "Todo" ? galleryItems : galleryItems.filter((i) => i.category === active);
    return items.map((i) => ({ src: i.src, alt: i.alt }));
  }, [active]);

  const filters: (GalleryCategory | "Todo")[] = ["Todo", ...galleryCategories];

  return (
    <Container className="py-12 sm:py-16">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Categorías de la galería">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => {
              setActive(f);
              track("view_gallery", { category: f });
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f
                ? "border-guadua-700 bg-guadua-700 text-ivory-50"
                : "border-forest-900/12 text-forest-900/70 hover:border-forest-900/30",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <PhotoGrid key={active} photos={photos} />
    </Container>
  );
}
