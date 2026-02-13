"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartContext";

export function CheckoutButton() {
  const { state } = useCart();
  const [loading, setLoading] = useState(false);
  const disabled = state.items.length === 0;

  async function startCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: state.items }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Errore durante la creazione del checkout.");
      }
      window.location.href = data.url;
    } catch (e: any) {
      alert(e?.message ?? "Errore imprevisto.");
      setLoading(false);
    }
  }

  return (
    <Button type="button" onClick={startCheckout} disabled={disabled || loading}>
      {loading ? "Apertura checkout…" : "Vai al pagamento"}
    </Button>
  );
}
