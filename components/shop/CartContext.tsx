"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { CART_STORAGE_KEY, safeParseCart, type CartState } from "@/lib/cart";

type Action =
  | { type: "ADD"; productId: string }
  | { type: "REMOVE"; productId: string }
  | { type: "CLEAR" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      if (state.items.some((i) => i.productId === action.productId)) return state;
      return { items: [...state.items, { productId: action.productId, qty: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.productId !== action.productId) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  state: CartState;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  clear: () => void;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Load initial state
  useEffect(() => {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    const loaded = safeParseCart(raw);
    // Replace state by dispatching adds (simple approach)
    loaded.items.forEach((i) => dispatch({ type: "ADD", productId: i.productId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist
  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    return {
      state,
      add: (productId) => dispatch({ type: "ADD", productId }),
      remove: (productId) => dispatch({ type: "REMOVE", productId }),
      clear: () => dispatch({ type: "CLEAR" }),
      count: state.items.length,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve essere usato dentro CartProvider");
  return ctx;
}
