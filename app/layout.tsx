import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { FloatingWhatsAppButton } from "@/components/contact/FloatingWhatsAppButton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/shop/CartContext";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: site.locale,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
