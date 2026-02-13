import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <Container>
          <div className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Borse all’uncinetto · Pezzi unici
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Artigianato semplice, elegante, fatto a mano.
              </h1>
              <p className="mt-4 text-neutral-700">
                Borse all’uncinetto realizzate con cura, una alla volta. Spedizione inclusa in Italia.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/shop">Scopri lo shop</Button>
                <Button href="/chi-sono" variant="ghost">Chi sono</Button>
              </div>
              <p className="mt-6 text-xs text-neutral-500">
                Foto e prodotti sono segnaposto: sostituiscili con le immagini reali in <code className="px-1">/public/products</code>.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white">
              <Image
                src="/hero.jpg"
                alt="Borse all’uncinetto"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">In evidenza</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Una selezione di borse disponibili (pezzi unici).
                </p>
              </div>
              <Link href="/shop" className="text-sm hover:underline">Vedi tutto</Link>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
