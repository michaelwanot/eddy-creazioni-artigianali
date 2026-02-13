import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-beige bg-brand-beige/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-brand-sage">{site.name}</div>
            <div className="mt-2 text-sm text-brand-sage/70 max-w-md">
              {site.description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-brand-sage">
            <div className="flex flex-col gap-2">
              <span className="font-medium">Menu</span>
              <Link href="/shop" className="hover:underline hover:text-brand-sage-light transition">Shop</Link>
              <Link href="/chi-sono" className="hover:underline hover:text-brand-sage-light transition">Chi sono</Link>
              <Link href="/contatti" className="hover:underline hover:text-brand-sage-light transition">Contatti</Link>
              <a href={site.social.tiktokUrl} className="hover:underline hover:text-brand-sage-light transition" target="_blank" rel="noreferrer">
                TikTok
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium">Info</span>
              <Link href="/faq" className="hover:underline hover:text-brand-sage-light transition">FAQ</Link>
              <Link href="/spedizioni-resi" className="hover:underline hover:text-brand-sage-light transition">Spedizioni & Resi</Link>
              <Link href="/termini" className="hover:underline hover:text-brand-sage-light transition">Termini</Link>
              <Link href="/privacy" className="hover:underline hover:text-brand-sage-light transition">Privacy</Link>
              <Link href="/cookie" className="hover:underline hover:text-brand-sage-light transition">Cookie</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-brand-sage/60">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
