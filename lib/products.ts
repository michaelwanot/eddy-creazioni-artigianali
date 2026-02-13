export type Product = {
  id: string;
  slug: string;
  name: string;
  priceCents: number; // prezzo comprensivo di spedizione
  description: string;
  images: string[]; // path in /public
  isSoldOut: boolean; // pezzi unici: se venduto => true
  details?: string[];
};

export const products: Product[] = [
  {
    id: "borsa-001",
    slug: "borsa-uncinetto-avorio",
    name: "Borsa all’uncinetto Avorio",
    priceCents: 6900,
    description:
      "Borsa all’uncinetto fatta a mano in stile elegante e minimal. Ideale per l’uso quotidiano.",
    images: ["/products/placeholder-1.jpg"],
    isSoldOut: false,
    details: ["Pezzo unico", "Fatta a mano", "Spedizione inclusa (Italia)"],
  },
  {
    id: "borsa-002",
    slug: "borsa-uncinetto-nero-notte",
    name: "Borsa all’uncinetto Nero Notte",
    priceCents: 7900,
    description:
      "Linee pulite e look raffinato. Un accessorio versatile per ogni occasione.",
    images: ["/products/placeholder-2.jpg"],
    isSoldOut: false,
    details: ["Pezzo unico", "Fatta a mano", "Spedizione inclusa (Italia)"],
  },
  {
    id: "borsa-003",
    slug: "borsa-uncinetto-sabbia",
    name: "Borsa all’uncinetto Sabbia",
    priceCents: 7200,
    description:
      "Tonalità neutra e texture artigianale: perfetta per la stagione primavera/estate.",
    images: ["/products/placeholder-3.jpg"],
    isSoldOut: true,
    details: ["Pezzo unico", "Fatta a mano", "Spedizione inclusa (Italia)"],
  },
];

// Helpers
export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPriceEUR(priceCents: number) {
  const euros = priceCents / 100;
  return euros.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
}
