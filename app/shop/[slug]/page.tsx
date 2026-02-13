import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { formatPriceEUR, getProductBySlug } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <Container>
      <div className="py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.images[0] ?? "/products/placeholder-1.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
            <div className="mt-2 text-lg text-neutral-800">
              {formatPriceEUR(product.priceCents)}
            </div>

            <p className="mt-4 text-neutral-700">{product.description}</p>

            {product.details?.length ? (
              <ul className="mt-5 list-disc pl-5 text-sm text-neutral-600">
                {product.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AddToCartButton productId={product.id} disabled={product.isSoldOut} />
              {product.isSoldOut ? (
                <span className="text-sm text-neutral-600">
                  Questo pezzo è già stato venduto.
                </span>
              ) : (
                <span className="text-sm text-neutral-600">
                  Aggiungi al carrello e completa l’acquisto con Stripe.
                </span>
              )}
            </div>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
              <p className="font-medium">Nota per i pezzi unici</p>
              <p className="mt-1">
                Lo stato “Esaurito” è gestito manualmente nel file <code className="px-1">lib/products.ts</code>.
                In futuro possiamo automatizzare con webhook Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
