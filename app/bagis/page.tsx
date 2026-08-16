import type { Metadata } from "next";
import { getAyarlar } from "@/lib/queries";
import DonationForm from "@/components/DonationForm";

export const metadata: Metadata = {
  title: "Bağış Yap — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı'na bağış yaparak öğrencilerin geleceğine katkı sağlayın.",
};

export const revalidate = 3600;

export default async function BagisPage() {
  const ayarlar = await getAyarlar();

  const iban = ayarlar?.iban;
  const banka = ayarlar?.banka;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      {/* Başlık */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
          Bir fark yarat
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Bağış Yap
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Bağışlarınız doğrudan maddi desteğe ihtiyaç duyan, başarılı
          Karşıyaka Liseli öğrencilere burs olarak ulaşıyor.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Havale / EFT */}
        <section aria-labelledby="havale-heading">
          <h2
            id="havale-heading"
            className="mb-6 text-xl font-bold tracking-tight text-foreground"
          >
            Havale / EFT ile bağış
          </h2>

          <div className="rounded-lg border border-border p-8">
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Aşağıdaki banka hesabına havale veya EFT yaparak bağışınızı
              gerçekleştirebilirsiniz. Açıklama kısmına &ldquo;Bağış&rdquo;
              yazmayı unutmayın.
            </p>

            <dl className="space-y-5">
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
                  Hesap Adı
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  İzmir Karşıyaka Lisesi Eğitim Vakfı
                </dd>
              </div>

              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
                  Banka
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  {banka ?? "Halkbank Karşıyaka Şubesi"}
                </dd>
              </div>

              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
                  IBAN
                </dt>
                <dd className="font-mono text-base font-semibold tracking-wider text-foreground">
                  {iban ?? "TR40 0001 2009 7100 0016 0000 61"}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Online ödeme */}
        <section aria-labelledby="online-heading">
          <h2
            id="online-heading"
            className="mb-6 text-xl font-bold tracking-tight text-foreground"
          >
            Online ödeme
          </h2>

          <DonationForm />
        </section>

      </div>

      {/* Neden Bağış? */}
      <section
        className="mt-20 border-t border-border pt-16"
        aria-labelledby="why-heading"
      >
        <h2
          id="why-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-foreground"
        >
          Bağışınız nereye gidiyor?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              baslik: "Burs Programı",
              aciklama:
                "Maddi desteğe ihtiyaç duyan başarılı öğrencilere yıllık burs sağlanmaktadır.",
            },
            {
              baslik: "Okul Altyapısı",
              aciklama:
                "Kütüphane, laboratuvar ve diğer okul altyapı projelerine katkı sağlanmaktadır.",
            },
            {
              baslik: "Kültürel Etkinlikler",
              aciklama:
                "Mezun buluşmaları, vefa günleri ve öğrenciler için kültürel etkinlikler düzenlenmektedir.",
            },
          ].map((item) => (
            <div key={item.baslik} className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-semibold text-foreground">{item.baslik}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.aciklama}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
