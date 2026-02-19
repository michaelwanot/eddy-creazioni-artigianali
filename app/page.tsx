import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { site } from "@/lib/site";

export default function HomePage() {
  const newArrivals = products.slice(0, 6);
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-beige bg-brand-ivory">
        <Container>
          <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-sage">
                Borse fatte a mano • Pezzi unici
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Pezzi unici.
                <br />
                Fatti a mano.
              </h1>
              <p className="mt-4 text-brand-ink/70">
                Borse all’uncinetto create una alla volta, con cura. Spedizione inclusa in Italia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/shop">Scopri lo shop</Button>
                <Button href="/chi-sono" variant="ghost">Chi sono</Button>
              </div>

              <div className="mt-8 rounded-2xl border border-brand-beige bg-white/60 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-brand-ink">Seguici su Instagram</div>
                    <div className="mt-1 text-xs text-brand-ink/70">
                      Nuove borse, dettagli e aggiornamenti.
                    </div>
                  </div>
                  <a
                    href={site.social.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-sage px-4 py-2 text-sm font-medium text-brand-ivory no-underline transition hover:opacity-95"
                  >
                    Instagram <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-brand-beige bg-white shadow-soft">
                <Image
                  src="/hero.jpg"
                  alt="Borse all’uncinetto"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 hidden rounded-2xl border border-brand-beige bg-white/80 p-4 text-sm text-brand-ink shadow-soft backdrop-blur md:block">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Spedizione inclusa</span>
                  <span className="text-brand-terracotta">Italia</span>
                </div>
                <div className="mt-1 text-xs text-brand-ink/70">
                  Pagamento sicuro con carta (Stripe).
                </div>
              </div>
            </div>
          </div>
        </Container>
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
