"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  name: string;
  priority?: boolean;
};

export function ProductImageGallery({ images, name, priority = false }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayImages = images.length > 0 ? images : ["/products/placeholder-1.jpg"];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-beige bg-white">
        <Image
          src={displayImages[selectedIndex] ?? displayImages[0]}
          alt={`${name} - immagine ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {displayImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                selectedIndex === i
                  ? "border-brand-sage ring-2 ring-brand-sage/30"
                  : "border-brand-beige hover:border-brand-sage-light"
              }`}
              aria-label={`Vedi immagine ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
