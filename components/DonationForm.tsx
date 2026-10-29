"use client";

import { FormEvent, useState } from "react";

const inputClass = "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-ring";

export default function DonationForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await fetch("/api/iyzico/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json() as { paymentPageUrl?: string; error?: string };
      if (!response.ok || !data.paymentPageUrl) throw new Error(data.error || "Ödeme başlatılamadı.");
      window.location.assign(data.paymentPageUrl);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Beklenmeyen bir hata oluştu.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">Ad<input className={inputClass} name="name" autoComplete="given-name" required maxLength={50} /></label>
        <label className="text-sm font-medium">Soyad<input className={inputClass} name="surname" autoComplete="family-name" required maxLength={50} /></label>
        <label className="text-sm font-medium sm:col-span-2">Bağış tutarı (TL)<input className={inputClass} name="amount" type="number" min="1" max="1000000" step="0.01" inputMode="decimal" required /></label>
        <label className="text-sm font-medium">E-posta<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={100} /></label>
        <label className="text-sm font-medium">Telefon<input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="05xxxxxxxxx" required maxLength={18} /></label>
        <label className="text-sm font-medium sm:col-span-2">T.C. kimlik numarası<input className={inputClass} name="identityNumber" inputMode="numeric" pattern="[0-9]{11}" required maxLength={11} /></label>
        <label className="text-sm font-medium">Şehir<input className={inputClass} name="city" autoComplete="address-level2" required maxLength={50} /></label>
        <label className="text-sm font-medium">Posta kodu <span className="font-normal text-muted">(isteğe bağlı)</span><input className={inputClass} name="zipCode" autoComplete="postal-code" maxLength={10} /></label>
        <label className="text-sm font-medium sm:col-span-2">Fatura adresi<textarea className={`${inputClass} min-h-24 resize-y`} name="address" autoComplete="street-address" required minLength={10} maxLength={250} /></label>
      </div>
      {error && <p role="alert" className="mt-4 rounded-md bg-accent-light px-4 py-3 text-sm text-accent">{error}</p>}
      <button type="submit" disabled={loading} className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
        {loading ? "iyzico'ya yönlendiriliyor…" : "Güvenli ödemeye geç"}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">Kart bilgileriniz iyzico&apos;nun güvenli ödeme sayfasında alınır.</p>
    </form>
  );
}
