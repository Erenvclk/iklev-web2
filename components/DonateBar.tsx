import Link from "next/link";

export default function DonateBar() {
  return (
    <section
      className="bg-foreground px-6 py-12"
      aria-labelledby="donate-bar-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Sol: metin */}
        <div className="max-w-xl">
          <h2
            id="donate-bar-heading"
            className="mb-3 text-2xl font-bold tracking-tight text-background md:text-3xl"
          >
            Bir öğrencinin yanında ol
          </h2>
          <p className="text-sm leading-relaxed text-background/70">
            Bağışlarınız doğrudan yetenekli ve çalışkan, ancak maddi olanakları
            kısıtlı Karşıyaka Liseli öğrencilere burs olarak ulaşıyor.
          </p>
          <p className="mt-3 text-xs text-background/40">
            IBAN: TR40 0001 2009 7100 0016 0000 61 — Halkbank Karşıyaka
          </p>
        </div>

        {/* Sağ: buton */}
        <Link
          href="/bagis"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
        >
          Hemen Bağış Yap
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
