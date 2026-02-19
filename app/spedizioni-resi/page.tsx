import { Container } from "@/components/layout/Container";

export const metadata = { title: "Spedizioni & Resi" };

export default function ShippingReturnsPage() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Spedizioni & Resi</h1>

        <div className="mt-6 space-y-6 text-sm text-brand-ink/70">
          <section className="rounded-2xl border border-brand-beige p-5">
            <h2 className="text-sm font-semibold">Spedizioni</h2>
            <p className="mt-2">
              Spediamo in Italia. I prezzi indicati includono la spedizione (da confermare in base ai costi reali).
            </p>
            <p className="mt-2">
              <span className="text-neutral-500">TODO:</span> inserire corriere, tempi medi e tracking.
            </p>
          </section>

          <section className="rounded-2xl border border-brand-beige p-5">
            <h2 className="text-sm font-semibold">Resi</h2>
            <p className="mt-2">
              <span className="text-neutral-500">TODO:</span> definire la politica di reso (tempi, condizioni, costi).
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
