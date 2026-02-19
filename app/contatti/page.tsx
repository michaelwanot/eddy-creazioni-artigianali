import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contatti" };

export default function ContactPage() {
  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-brand-sage">Contatti</h1>
        <p className="mt-4 text-brand-sage/80">
          Per domande su prodotti, ordini o spedizioni, scrivimi:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-beige bg-white p-5">
            <p className="text-sm font-medium text-brand-sage">Email</p>
            <p className="mt-2 text-sm text-brand-sage/70">
              eddycreazioniartigianali&#64;gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-brand-beige bg-white p-5">
            <p className="text-sm font-medium text-brand-sage">Instagram</p>
            <p className="mt-2 text-sm text-brand-sage/70">
              <a href={site.social.instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {site.social.instagramUrl}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-brand-beige bg-brand-cream/50 p-5">
          <h2 className="text-lg font-semibold text-brand-sage">Invia un messaggio</h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
