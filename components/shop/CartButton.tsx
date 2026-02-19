"use client";

import Link from "next/link";
import { useCart } from "@/components/shop/CartContext";

export function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/carrello"
      className="relative rounded-full border border-brand-beige bg-white/60 px-3 py-1.5 text-sm no-underline backdrop-blur hover:bg-white/80"
      aria-label={`Carrello, ${count} articoli`}
    >
      Carrello
      {count > 0 ? (
        <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-terracotta px-1.5 text-xs text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
