"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartContext";

export function AddToCartButton({
  productId,
  disabled,
}: {
  productId: string;
  disabled?: boolean;
}) {
  const { add, state } = useCart();
  const inCart = state.items.some((i) => i.productId === productId);

  return (
    <Button
      type="button"
      variant={inCart ? "ghost" : "primary"}
      disabled={disabled || inCart}
      onClick={() => add(productId)}
      aria-disabled={disabled || inCart}
    >
      {disabled ? "Esaurito" : inCart ? "Nel carrello" : "Aggiungi al carrello"}
    </Button>
  );
}
