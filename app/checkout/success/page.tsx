import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Pagamento completato" };

export default function SuccessPage() {
  return (
    <Container>
      <div className="py-14">
        <div className="mx-auto max-w-2xl rounded-3xl border border-brand-beige p-8">
          <h1 className="text-2xl font-semibold tracking-tight">Grazie! Pagamento completato ✅</h1>
          <p className="mt-3 text-brand-ink/70">
            Abbiamo ricevuto il tuo ordine. Riceverai una conferma via email da Stripe.
          </p>
          <p className="mt-2 text-sm text-brand-ink/70">
            Se vuoi aggiungere note (es. preferenze di consegna), scrivici dalla pagina contatti.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/shop">Torna allo shop</Button>
            <Link href="/contatti" className="text-sm self-center hover:underline">
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
