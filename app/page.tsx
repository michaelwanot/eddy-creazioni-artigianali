import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export default function HomePage() {
  const newArrivals = products.slice(0, 6);
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero — like hero.png: full-width image, headline + CTA overlay */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-brand-beige bg-brand-blush/30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent"
          aria-hidden
        />
        <div className="relative flex min-h-[85vh] flex-col items-center justify-end px-4 pb-12 pt-24 text-center sm:pb-16">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-white drop-shadow-md md:text-4xl lg:text-5xl">
            Morbidezza che si fa stile
          </h1>

          <div className="mt-6 w-full max-w-lg rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
            <p className="text-lg font-semibold tracking-tight text-brand-ink md:text-xl">
              Pezzi unici. Fatti a mano.
            </p>
            <p className="mt-2 text-sm text-brand-ink/80">
              Borse all&apos;uncinetto create una alla volta, con cura. Spedizione inclusa in Italia.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-sage">
              Vuoi una borsa su misura? Scrivici e la realizziamo per te.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/shop"
                className="inline-flex w-full justify-center rounded-2xl bg-brand-sage px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-brand-sage/90 sm:w-auto"
              >
                Scopri la collezione
              </Link>
              <Link
                href="/contatti"
                className="inline-flex w-full justify-center rounded-2xl border-2 border-brand-sage bg-transparent px-6 py-3 text-sm font-medium text-brand-sage no-underline transition hover:bg-brand-sage/10 sm:w-auto"
              >
                Richiedi una borsa su misura
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="bg-brand-beige/60">
        <Container>
          <div className="py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-sage">Disponibili ora</p>
                <h2 className="mt-2 text-2xl font-semibold">Nuovi arrivi</h2>
                <p className="mt-1 text-sm text-brand-ink/70">
                  Selezione aggiornata: pezzi unici, pronti a partire.
                </p>
              </div>
              <Link href="/shop" className="text-sm text-brand-ink/70 hover:underline">
                Vedi tutto
              </Link>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section>
        <Container>
          <div className="py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-sage">Selezione</p>
                <h2 className="mt-2 text-2xl font-semibold">In evidenza</h2>
                <p className="mt-1 text-sm text-brand-ink/70">
                  Alcuni modelli rappresentativi: stile semplice ed elegante.
                </p>
              </div>
              <Link href="/shop" className="text-sm text-brand-ink/70 hover:underline">
                Vedi tutto
              </Link>
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
