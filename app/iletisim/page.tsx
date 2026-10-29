import type { Metadata } from "next";
import { getAyarlar } from "@/lib/queries";

export const metadata: Metadata = {
  title: "İletişim — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı iletişim bilgileri ve iletişim formu.",
};

export const revalidate = 3600;

function toTelHref(phone: string): string {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `tel:+90${digits.slice(1)}` : `tel:${digits}`;
}

export default async function IletisimPage() {
  const ayarlar = await getAyarlar();

  const { adres, telefon1, telefon2, eposta, iban, banka, facebook, twitter, instagram } =
    ayarlar ?? {};

  const safeEposta =
    eposta && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)
      ? eposta
      : "info@iklev.org.tr";

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      {/* Başlık */}
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          İletişim
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Burs, üyelik veya diğer konularda bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">

        {/* İletişim Bilgileri */}
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="mb-8 text-xl font-bold tracking-tight text-foreground"
          >
            Bize ulaşın
          </h2>

          <div className="space-y-8">
            {adres && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Adres
                </h3>
                <address className="not-italic whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {adres}
                </address>
              </div>
            )}

            {(telefon1 ?? telefon2) && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Telefon
                </h3>
                <div className="flex flex-col gap-1">
                  {telefon1 && (
                    <a
                      href={toTelHref(telefon1)}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {telefon1}
                    </a>
                  )}
                  {telefon2 && (
                    <a
                      href={toTelHref(telefon2)}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {telefon2}
                    </a>
                  )}
                </div>
              </div>
            )}

            {eposta && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  E-posta
                </h3>
                <a
                  href={`mailto:${eposta}`}
                  className="text-sm text-foreground transition-colors hover:text-accent"
                >
                  {eposta}
                </a>
              </div>
            )}

            {(facebook ?? twitter ?? instagram) && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Sosyal Medya
                </h3>
                <div className="flex gap-4">
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                      aria-label="Facebook sayfamız"
                    >
                      Facebook
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                      aria-label="X (Twitter) sayfamız"
                    >
                      X
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                      aria-label="Instagram sayfamız"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}

            {(iban ?? banka) && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Banka / IBAN
                </h3>
                {banka && (
                  <p className="text-sm text-foreground">{banka}</p>
                )}
                {iban && (
                  <p className="mt-1 font-mono text-sm text-muted">{iban}</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* İletişim Formu */}
        <section aria-labelledby="contact-form-heading">
          <h2
            id="contact-form-heading"
            className="mb-8 text-xl font-bold tracking-tight text-foreground"
          >
            Mesaj gönder
          </h2>

          <form
            className="space-y-5"
            action={`mailto:${safeEposta}`}
            method="get"
            aria-label="İletişim formu"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Adınız Soyadınız"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="ornek@mail.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Konu
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Mesajınızın konusu"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="body"
                rows={5}
                required
                className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              Gönder
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
