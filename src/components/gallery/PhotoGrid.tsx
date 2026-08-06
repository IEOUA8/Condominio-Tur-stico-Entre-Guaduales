"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import type { Photo } from "@/content/experiences";

export function PhotoGrid({
  photos,
  className,
}: {
  photos: Photo[];
  className?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3", className)}>
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            onClick={() => setIndex(i)}
            className={cn(
              "group relative aspect-[4/3] overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-gold-500",
              i === 0 && "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]",
            )}
            aria-label={`Ampliar: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-forest-950/0 transition-colors group-hover:bg-forest-950/15" />
          </button>
        ))}
      </div>

      {open && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory-50 hover:bg-white/20"
          >
            <Icon name="close" size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-ivory-50 hover:bg-white/20 sm:left-6"
          >
            <Icon name="chevronLeft" size={26} />
          </button>

          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-ivory-50/80">
              {photos[index].alt} · {index + 1} / {photos.length}
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-ivory-50 hover:bg-white/20 sm:right-6"
          >
            <Icon name="chevronRight" size={26} />
          </button>
        </div>
      )}
    </>
  );
}
