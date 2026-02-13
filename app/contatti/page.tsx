import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata = { title: "Contatti" };

export default function ContactPage() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Contatti</h1>
        <p className="mt-4 text-neutral-700">
          Per domande su prodotti, ordini o spedizioni, scrivimi:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Email</p>
            <p className="mt-2 text-sm text-neutral-700">
              <span className="text-neutral-500">TODO:</span> inserisci l’email
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">TikTok</p>
            <p className="mt-2 text-sm text-neutral-700">
              <a href={site.social.tiktokUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {site.social.tiktokUrl}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-700">
          <p className="font-medium">Suggerimento</p>
          <p className="mt-1">
            Se vuoi, posso aggiungere un bottone WhatsApp fisso e un modulo contatti (con invio email via provider).
          </p>
        </div>
      </div>
    </Container>
  );
}
