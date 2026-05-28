import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burslar — İKLEV",
  description:
    "İKLEV burs programları, başvuru koşulları ve gerekli belgeler hakkında bilgi.",
};

const requirements = [
  "İzmir Karşıyaka Lisesi öğrencisi olmak",
  "Maddi desteğe ihtiyaç duymak",
  "Akademik başarı koşullarını sağlamak",
  "Başvuru formunu eksiksiz doldurmak",
  "Gerekli belgeleri teslim etmek",
];

const documents = [
  "Nüfus cüzdanı fotokopisi",
  "Öğrenci belgesi",
  "Son dönem karne / not belgesi",
  "Aile gelir durumunu gösteren belge",
  "İkametgah belgesi",
  "Başvuru formu (imzalı)",
];

export default function BurslarPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      {/* Başlık */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
          Her yıl yenilenen program
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Burs programı
        </h1>
        <p className="text-base leading-relaxed text-muted">
          İKLEV olarak her yıl maddi olanakları kısıtlı, başarılı Karşıyaka
          Liseli öğrencilere burs desteği sağlıyoruz.
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">

        {/* Başvuru Koşulları */}
        <section aria-labelledby="requirements-heading">
          <h2
            id="requirements-heading"
            className="mb-6 text-xl font-bold tracking-tight text-foreground"
          >
            Başvuru koşulları
          </h2>
          <ul className="space-y-3" role="list">
            {requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted">{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gerekli Belgeler */}
        <section aria-labelledby="documents-heading">
          <h2
            id="documents-heading"
            className="mb-6 text-xl font-bold tracking-tight text-foreground"
          >
            Gerekli belgeler
          </h2>
          <ul className="space-y-3" role="list">
            {documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-muted">{doc}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Başvuru CTA */}
      <section
        className="mt-16 rounded-lg border border-border bg-surface p-8 md:p-12"
        aria-labelledby="apply-heading"
      >
        <h2
          id="apply-heading"
          className="mb-3 text-2xl font-bold tracking-tight text-foreground"
        >
          Başvuru için iletişime geç
        </h2>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
          Başvuru tarihleri ve detaylar için vakfımızla iletişime geçebilir ya
          da doğrudan e-posta gönderebilirsiniz. Her yıl başvuru dönemi
          duyurusu haberler bölümünde yayınlanır.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/iletisim"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            İletişime Geç
          </Link>
          <Link
            href="/haberler"
            className="rounded-md border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Duyuruları Takip Et
          </Link>
        </div>
      </section>
    </div>
  );
}
