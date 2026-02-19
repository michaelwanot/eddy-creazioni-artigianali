import Link from "next/link";
import { formatPriceEUR, type Product } from "@/lib/products";
import { ProductCardImages } from "@/components/shop/ProductCardImages";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group no-underline"
      aria-label={product.name}
    >
      <div className="overflow-hidden rounded-2xl border border-brand-beige bg-white shadow-soft transition-transform duration-200 group-hover:-translate-y-0.5">
        <div className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          <ProductCardImages
            images={product.images}
            name={product.name}
            isSoldOut={product.isSoldOut}
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold leading-snug text-brand-sage">
              {product.name}
            </h3>
            <div className="text-sm text-brand-sage font-medium">
              {formatPriceEUR(product.priceCents)}
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-brand-sage/70">
            {product.description}
          </p>
          <div className="mt-3 text-xs text-brand-sage-light opacity-0 transition-opacity group-hover:opacity-100">
            Scopri →
          </div>
        </div>
      </div>
    </Link>
  );
}
