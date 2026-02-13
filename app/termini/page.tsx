import { Container } from "@/components/layout/Container";

export const metadata = { title: "Termini e condizioni" };

export default function Page() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Termini e condizioni</h1>
        <div className="mt-6 space-y-4 text-sm text-neutral-700">
          <p>
            <span className="text-neutral-500">Template:</span> questa pagina è un segnaposto.
            Va completata con i dati del titolare del sito, riferimenti GDPR e dettagli del trattamento.
          </p>
          <p>
            Se vuoi, posso fornirti anche versioni più complete allineate alle tue esigenze (cookie banner, consent mode, ecc.).
          </p>
        </div>
      </div>
    </Container>
  );
}
