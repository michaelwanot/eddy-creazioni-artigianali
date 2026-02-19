import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-sage text-brand-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="mt-2 text-sm text-brand-ivory/80 max-w-md">
              {site.description}
            </div>
            <div className="mt-4 text-xs text-brand-ivory/70">
              Ogni borsa è un pezzo unico: creata una alla volta, con cura.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-brand-ivory/90">Menu</span>
              <Link href="/shop" className="hover:underline">Shop</Link>
              <Link href="/chi-sono" className="hover:underline">Chi sono</Link>
              <Link href="/contatti" className="hover:underline">Contatti</Link>
              <a
                href={site.social.instagramUrl}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-brand-ivory/90">Info</span>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/spedizioni-resi" className="hover:underline">Spedizioni & Resi</Link>
              <Link href="/termini" className="hover:underline">Termini</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/cookie" className="hover:underline">Cookie</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-brand-ivory/70">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
