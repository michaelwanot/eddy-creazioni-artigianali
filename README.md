# Eddy creazioni artigianali — Next.js + Tailwind + Stripe Checkout

Sito e-commerce leggero per borse all’uncinetto (pezzi unici) con:
- Catalogo prodotti (file TS in repo)
- Carrello (localStorage)
- Checkout unico con Stripe (Checkout Session server-side)
- Deploy facile su Vercel

## Requisiti
- Node.js 18+ (consigliato 20)

## Setup rapido

1) Installa dipendenze
```bash
npm install
```

2) Crea `.env.local` a partire da `.env.example`
```bash
cp .env.example .env.local
```

3) Imposta le variabili:
- `NEXT_PUBLIC_SITE_URL` (in locale: `http://localhost:3000`)
- `STRIPE_SECRET_KEY` (da Stripe dashboard)

4) Avvia
```bash
npm run dev
```

Apri: http://localhost:3000

## Prodotti
Modifica `lib/products.ts`.
- `isSoldOut: true` per mostrare “Esaurito” e disabilitare l’acquisto
- `priceCents` include la spedizione (Italia)

## Immagini
Metti le immagini in `public/products/` e aggiorna i path in `lib/products.ts`.

## Stripe
Questo progetto usa **Stripe Checkout Session** (pagamento unico).
- Non serve creare Product/Price su Stripe per partire: i prezzi sono inviati come `price_data`.
- Per i pezzi unici, la gestione dello stock è manuale (per ora).
  In futuro: webhook Stripe → aggiornare automaticamente `isSoldOut` in un DB.

## Deploy su Vercel
- Importa la repo su Vercel
- Aggiungi Env Vars:
  - `NEXT_PUBLIC_SITE_URL` = URL del sito Vercel
  - `STRIPE_SECRET_KEY`
- Deploy

## Note
Pagine legali (Privacy/Cookie/Termini) sono template da completare.
