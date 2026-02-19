"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useCart } from "@/components/shop/CartContext";
import { products, formatPriceEUR } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { CheckoutButton } from "@/components/shop/CheckoutButton";

export const dynamic = "force-dynamic";

export default function CartPage() {
  const { state, remove, clear } = useCart();

  const lines = state.items
    .map((i) => {
      const p = products.find((x) => x.id === i.productId);
      return p ? { product: p } : null;
    })
    .filter(Boolean) as { product: (typeof products)[number] }[];

  const totalCents = lines.reduce((sum, l) => sum + l.product.priceCents, 0);

  return (
    <Container>
      <div className="py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Carrello</h1>
            <p className="mt-2 text-sm text-brand-ink/70">
              Pagamento unico con Stripe. Prezzi comprensivi di spedizione in Italia.
            </p>
          </div>
          <Link href="/shop" className="text-sm hover:underline">
            Continua lo shopping
          </Link>
        </div>

        {lines.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-brand-beige p-6">
            <p className="text-brand-ink/70">Il carrello è vuoto.</p>
            <div className="mt-4">
              <Button href="/shop">Vai allo shop</Button>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-brand-beige">
              <div className="divide-y divide-neutral-200">
                {lines.map(({ product }) => (
                  <div key={product.id} className="flex items-start justify-between gap-4 p-4">
                    <div>
                      <div className="text-sm font-semibold">{product.name}</div>
                      <div className="mt-1 text-sm text-brand-ink/70">
                        {formatPriceEUR(product.priceCents)}
                      </div>
                      {product.isSoldOut ? (
                        <div className="mt-2 text-xs text-red-600">
                          Attenzione: questo articolo risulta “Esaurito” nel catalogo.
                          Rimuovilo dal carrello per evitare problemi.
                        </div>
                      ) : null}
                    </div>
                    <button
                      className="text-sm text-brand-ink/70 hover:underline"
                      onClick={() => remove(product.id)}
                    >
                      Rimuovi
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-fit rounded-2xl border border-brand-beige p-4">
              <div className="text-sm font-medium">Riepilogo</div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-brand-ink/70">Totale</span>
                <span className="font-semibold">{formatPriceEUR(totalCents)}</span>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <CheckoutButton />
                <Button type="button" variant="ghost" onClick={() => clear()}>
                  Svuota carrello
                </Button>
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                Dopo il pagamento verrai reindirizzato alla pagina di conferma.
              </p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
