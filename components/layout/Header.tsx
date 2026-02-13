import Link from "next/link";
import { site } from "@/lib/site";
import { CartButton } from "@/components/shop/CartButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight">{site.name}</span>
            <span className="text-xs text-neutral-500 hidden sm:inline">Borse all’uncinetto</span>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/chi-sono" className="hover:underline hidden sm:inline">Chi sono</Link>
          <Link href="/contatti" className="hover:underline hidden sm:inline">Contatti</Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
