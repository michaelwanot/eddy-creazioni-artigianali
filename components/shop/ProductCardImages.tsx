"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ProductCardImagesProps = {
  images: string[];
  name: string;
  isSoldOut: boolean;
};

export function ProductCardImages({ images, name, isSoldOut }: ProductCardImagesProps) {
  const [index, setIndex] = useState(0);
  const displayImages = images.length > 0 ? images : ["/products/placeholder-1.jpg"];

  // Cycle through images on hover when there are multiple
  useEffect(() => {
    if (displayImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % displayImages.length);
    }, 2500);
    return () => clearInterval(id);
  }, [displayImages.length]);

  return (
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={displayImages[index] ?? displayImages[0]}
        alt={name}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
      {isSoldOut ? (
        <div className="absolute left-3 top-3 rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-medium text-brand-sage backdrop-blur">
          Esaurito
        </div>
      ) : (
        <div className="absolute left-3 top-3 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-brand-sage backdrop-blur">
          Disponibile
        </div>
      )}
      {displayImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-black/30 px-2 py-1">
          {displayImages.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              aria-hidden
            />
          ))}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
