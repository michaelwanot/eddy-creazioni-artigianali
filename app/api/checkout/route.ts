import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe";
import { products } from "@/lib/products";
import type { CartItem } from "@/lib/cart";

type Body = {
  items: CartItem[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const items = Array.isArray(body?.items) ? body.items : [];

    // Build line items from product list (pezzi unici => qty 1)
    const selected = items
      .map((i) => products.find((p) => p.id === i.productId))
      .filter(Boolean);

    if (selected.length === 0) {
      return NextResponse.json({ error: "Carrello vuoto." }, { status: 400 });
    }

    const sold = selected.find((p) => p!.isSoldOut);
    if (sold) {
      return NextResponse.json(
        { error: `L’articolo "${sold!.name}" risulta esaurito. Rimuovilo dal carrello.` },
        { status: 400 }
      );
    }

    const stripe = getStripeServer();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/checkout/success`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      shipping_address_collection: { allowed_countries: ["IT"] },
      line_items: selected.map((p) => ({
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: p!.priceCents,
          product_data: {
            name: p!.name,
            description: p!.description,
            images: p!.images
              .filter((src) => src.startsWith("http"))
              .slice(0, 1), // opzionale: se hai URL pubblici
            metadata: {
              productId: p!.id,
              slug: p!.slug,
            },
          },
        },
      })),
      metadata: {
        productIds: selected.map((p) => p!.id).join(","),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Errore imprevisto." },
      { status: 500 }
    );
  }
}
