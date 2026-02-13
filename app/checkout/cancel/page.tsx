import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Pagamento annullato" };

export default function CancelPage() {
  return (
    <Container>
      <div className="py-14">
        <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 p-8">
          <h1 className="text-2xl font-semibold tracking-tight">Pagamento annullato</h1>
          <p className="mt-3 text-neutral-700">
            Nessun addebito è stato effettuato. Puoi riprovare quando vuoi.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/carrello">Torna al carrello</Button>
            <Link href="/shop" className="text-sm self-center hover:underline">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
