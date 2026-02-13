import Image from "next/image";
import Link from "next/link";
import { formatPriceEUR, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group no-underline"
      aria-label={product.name}
    >
      <div className="overflow-hidden rounded-2xl border border-brand-beige bg-white transition-shadow hover:shadow-lg">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.images[0] ?? "/products/placeholder-1.jpg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
          {product.isSoldOut ? (
            <div className="absolute left-3 top-3 rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-medium text-brand-sage backdrop-blur">
              Esaurito
            </div>
          ) : null}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold leading-snug text-brand-sage">
              {product.name}
            </h3>
            <div className="text-sm text-brand-sage/80 font-medium">
              {formatPriceEUR(product.priceCents)}
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-brand-sage/70">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
