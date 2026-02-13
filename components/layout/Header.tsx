import Link from "next/link";
import { site } from "@/lib/site";
import { CartButton } from "@/components/shop/CartButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-beige bg-brand-pink/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight text-brand-sage">{site.name}</span>
            <span className="text-xs text-brand-sage/70 hidden sm:inline">Borse all&apos;uncinetto</span>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-brand-sage">
          <Link href="/shop" className="hover:underline hover:text-brand-sage-light transition">Shop</Link>
          <Link href="/chi-sono" className="hover:underline hover:text-brand-sage-light transition hidden sm:inline">Chi sono</Link>
          <Link href="/contatti" className="hover:underline hover:text-brand-sage-light transition hidden sm:inline">Contatti</Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
