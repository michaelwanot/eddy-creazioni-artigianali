import { Container } from "@/components/layout/Container";

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">FAQ</h1>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-brand-beige p-5">
            <p className="text-sm font-semibold">I prodotti sono pezzi unici?</p>
            <p className="mt-2 text-sm text-brand-ink/70">
              Sì. Ogni borsa è realizzata a mano ed è un pezzo unico.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-beige p-5">
            <p className="text-sm font-semibold">La spedizione è inclusa?</p>
            <p className="mt-2 text-sm text-brand-ink/70">
              Sì, al momento i prezzi includono la spedizione in Italia.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-beige p-5">
            <p className="text-sm font-semibold">Come posso pagare?</p>
            <p className="mt-2 text-sm text-brand-ink/70">
              Il pagamento avviene online tramite Stripe (carte e metodi supportati).
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
