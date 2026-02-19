"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "Errore di invio.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Errore di connessione. Riprova.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-sage">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === "loading"}
          className="mt-1 w-full rounded-xl border border-brand-beige bg-white px-4 py-2.5 text-sm focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-sage">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "loading"}
          className="mt-1 w-full rounded-xl border border-brand-beige bg-white px-4 py-2.5 text-sm focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-sage">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          disabled={status === "loading"}
          className="mt-1 w-full resize-y rounded-xl border border-brand-beige bg-white px-4 py-2.5 text-sm focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage"
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-brand-sage">Messaggio inviato. Ti risponderò al più presto.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brand-sage px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-sage-light disabled:opacity-60"
      >
        {status === "loading" ? "Invio in corso…" : "Invia messaggio"}
      </button>
    </form>
  );
}
