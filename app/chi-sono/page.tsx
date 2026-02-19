import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata = { title: "Chi sono" };

export default function AboutPage() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Chi sono</h1>
        <p className="mt-4 text-brand-ink/70">
          Benvenuti su <strong>{site.name}</strong>. Realizzo borse all’uncinetto fatte a mano,
          con uno stile semplice ed elegante.
        </p>
        <p className="mt-3 text-brand-ink/70">
          Qui puoi trovare pezzi unici: ogni borsa è lavorata con cura, attenzione ai dettagli
          e materiali selezionati.
        </p>

        <div className="mt-8 rounded-2xl border border-brand-beige bg-brand-ivory p-5">
          <p className="text-sm font-medium">Da personalizzare</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-brand-ink/70">
            <li>Storia dell’artigiana</li>
            <li>Materiali utilizzati</li>
            <li>Tempi medi di realizzazione</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
