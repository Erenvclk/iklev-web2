import { getAyarlar } from "@/lib/queries";

function toTelHref(phone: string): string {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `tel:+90${digits.slice(1)}` : `tel:${digits}`;
}

export default async function ContactGrid() {
  const ayarlar = await getAyarlar();

  const { adres, telefon1, telefon2, eposta, facebook, twitter, instagram } =
    ayarlar ?? {};

  return (
    <section
      className="border-t border-border bg-surface px-6 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="contact-heading"
          className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          İletişim
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {adres && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                Adres
              </h3>
              <address className="not-italic whitespace-pre-line text-sm leading-relaxed text-muted">
                {adres}
              </address>
            </div>
          )}

          {(telefon1 ?? telefon2) && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                Telefon
              </h3>
              <div className="flex flex-col gap-1">
                {telefon1 && (
                  <a
                    href={toTelHref(telefon1)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {telefon1}
                  </a>
                )}
                {telefon2 && (
                  <a
                    href={toTelHref(telefon2)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {telefon2}
                  </a>
                )}
              </div>
            </div>
          )}

          {(eposta ?? facebook ?? twitter ?? instagram) && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                E-posta & Sosyal
              </h3>
              <div className="flex flex-col gap-2">
                {eposta && (
                  <a
                    href={`mailto:${eposta}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {eposta}
                  </a>
                )}
                {(facebook ?? twitter ?? instagram) && (
                  <div className="flex gap-4">
                    {facebook && (
                      <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-foreground"
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
                        className="text-sm text-muted transition-colors hover:text-foreground"
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
                        className="text-sm text-muted transition-colors hover:text-foreground"
                        aria-label="Instagram sayfamız"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
