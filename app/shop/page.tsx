import { Container } from "@/components/layout/Container";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Shop</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Borse all’uncinetto (pezzi unici). Prezzo comprensivo di spedizione in Italia.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </Container>
  );
}
