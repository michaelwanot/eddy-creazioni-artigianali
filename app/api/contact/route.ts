import { NextResponse } from "next/server";

export type ContactBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori." },
        { status: 400 }
      );
    }

    // TODO: invio email via provider (es. Resend, SendGrid, Nodemailer)
    // Per ora log in console; in produzione collegare il servizio scelto.
    console.log("[Contact form]", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Errore durante l'invio. Riprova più tardi." },
      { status: 500 }
    );
  }
}
