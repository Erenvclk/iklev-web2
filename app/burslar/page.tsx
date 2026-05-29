import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burslar — İKLEV",
  description:
    "İKLEV burs programları, başvuru koşulları ve gerekli belgeler hakkında bilgi.",
};

const bursTypes = [
  {
    baslik: "Orta Öğretim Bursu",
    aciklama: "Karşıyaka Lisesi'nde öğrenim gören, maddi desteğe ihtiyaç duyan başarılı öğrencilere verilir.",
    donem: "9 ay (Ekim–Haziran)",
    basvuru: "30 Ağustos – 30 Eylül",
  },
  {
    baslik: "Yüksek Öğretim Bursu",
    aciklama: "Karşıyaka Lisesi mezunu olup üniversitede öğrenim gören öğrencilere verilir.",
    donem: "9 ay (Ekim–Haziran)",
    basvuru: "30 Ağustos – 30 Eylül",
  },
  {
    baslik: "Başarı Destek Bursu",
    aciklama: "Akademik, sportif veya sanatsal alanda üstün başarı gösteren öğrencilere durum bazında verilir.",
    donem: "Durum bazında belirlenir",
    basvuru: "Yıl içinde herhangi bir zamanda",
  },
];

const ortaOgretimBelgeleri = [
  "Başvuru formu (imzalı)",
  "Nüfus cüzdanı fotokopisi",
  "Öğrenci belgesi",
  "Son dönem karne fotokopisi",
  "Aile gelir durumunu gösteren belge (maaş bordrosu, SGK dökümü vb.)",
  "İkametgâh belgesi",
  "Sosyal güvence bilgileri",
];

const yuksekOgretimBelgeleri = [
  "Başvuru formu (imzalı)",
  "Nüfus cüzdanı fotokopisi",
  "Öğrenci belgesi",
  "Güncel transkript",
  "Sabıka kaydı",
  "Aile gelir durumunu gösteren belge",
  "İkametgâh belgesi",
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
          Liseli öğrencilere burs desteği sağlıyoruz. Burs miktarları her yıl
          Ekim ayı Yönetim Kurulu toplantısında belirlenir.
        </p>
      </div>

      {/* Burs Türleri */}
      <section aria-labelledby="types-heading" className="mb-20">
        <h2
          id="types-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-foreground"
        >
          Burs türleri
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bursTypes.map((burs) => (
            <div key={burs.baslik} className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-semibold text-foreground">{burs.baslik}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">{burs.aciklama}</p>
              <dl className="space-y-1 text-xs text-muted">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Süre:</dt>
                  <dd>{burs.donem}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Başvuru:</dt>
                  <dd>{burs.basvuru}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Gerekli Belgeler */}
      <section aria-labelledby="documents-heading" className="mb-20">
        <h2
          id="documents-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-foreground"
        >
          Başvuru belgeleri
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Orta Öğretim Başvurusu
            </h3>
            <ul className="space-y-2.5" role="list">
              {ortaOgretimBelgeleri.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Yüksek Öğretim Başvurusu
            </h3>
            <ul className="space-y-2.5" role="list">
              {yuksekOgretimBelgeleri.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Başvuru CTA */}
      <section
        className="rounded-lg border border-border bg-surface p-8 md:p-12"
        aria-labelledby="apply-heading"
      >
        <h2
          id="apply-heading"
          className="mb-3 text-2xl font-bold tracking-tight text-foreground"
        >
          Başvuru için iletişime geç
        </h2>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
          Başvuru formlarını vakıftan temin edebilir ya da e-posta ile
          talep edebilirsiniz. Her yıl Eylül ayında başvuru duyurusu
          haberler bölümünde yayınlanır. Ödemeler her ayın 5'inde banka
          hesabınıza yapılır.
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
