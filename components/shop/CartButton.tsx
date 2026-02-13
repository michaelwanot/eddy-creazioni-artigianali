"use client";

import Link from "next/link";
import { useCart } from "@/components/shop/CartContext";

export function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/carrello"
      className="relative rounded-full border border-brand-beige px-3 py-1.5 text-sm no-underline hover:bg-brand-beige/50 transition flex items-center gap-2"
      aria-label={`Carrello, ${count} articoli`}
    >
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>
      <span>Carrello</span>
      {count > 0 ? (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-sage px-1.5 text-xs text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
