import Image from "next/image";
import type { Metadata } from "next";
import { getYonetimKurulu } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Vakfımız — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı hakkında bilgi, tarihçe ve yönetim kurulu.",
};

export const revalidate = 3600;

const milestones = [
  { year: "1914", text: "Karşıyaka Lisesi'nin temelleri, Karşıyaka Kız Muallim Mektebi'nin kuruluşuna dayanmaktadır." },
  { year: "1945", text: "Okul, bugünkü adı ve yapısıyla öğretime başladı." },
  { year: "1996", text: "Fikret Sezer'in emekli ödeneğini koşullu bağış olarak aktarmasıyla ilham alan 84 kurucu üye, vakfı 25 Nisan 1996'da İzmir Karşıyaka'da kurdu." },
  { year: "2000", text: "İlk Vefa Günü düzenlendi; mezunları bir araya getiren bu etkinlik her yıl sürdürülmektedir." },
  { year: "2000'ler", text: "Burs programları genişletildi, her yıl düzenli olarak onlarca öğrenciye destek sağlandı." },
  { year: "2010'lar", text: "Okul altyapı projeleri başlatıldı; kütüphane ve laboratuvar yenilemeleri gerçekleştirildi." },
  { year: "2021", text: "Yaşar Aksoy Sokak No:83 D.1 adresinde vakfın idari merkezi açıldı." },
  { year: "2026", text: "200'ün üzerinde üyesiyle faaliyetlerini sürdürmektedir." },
];

export default async function VakfimizPage() {
  const kurulUyeleri = await getYonetimKurulu();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      {/* Başlık */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
          25 Nisan 1996
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Vakfımız hakkında
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Tarih öğretmeni Fikret Sezer&apos;in emekli ödeneğini vakfa koşullu
          bağış olarak bırakmasıyla ilham alan 84 kurucu üye tarafından
          kurulan İKLEV; İzmir&apos;de bulunan üç lise eğitim vakfından biri
          olarak 200&apos;ün üzerinde üyesiyle öğrencilerimizin yanındadır.
        </p>
      </div>

      {/* Misyon alıntısı */}
      <section className="mb-20" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="sr-only">Misyon</h2>
        <blockquote className="border-l-4 border-positive pl-8">
          <p className="text-xl italic leading-relaxed text-foreground md:text-2xl">
            &ldquo;İzmir Karşıyaka Lisesi öğrencilerini; özgür düşünce, çağdaş
            bilim anlayışı ve Atatürk ilkeleri ışığında yetiştirme, ülkeye ve
            insanlığa yararlı aydın kişiler olarak yetişmelerini sağlamaya
            çalışmak.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted">— Vakıf Senedi</footer>
        </blockquote>
      </section>

      <div className="grid gap-20 lg:grid-cols-2">

        {/* Tarihçe */}
        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground">
            Tarihçe
          </h2>
          <ol className="space-y-6" role="list">
            {milestones.map((m) => (
              <li key={m.year} className="flex gap-6">
                <span className="w-20 shrink-0 text-sm font-semibold text-accent">
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-muted">{m.text}</p>
              </li>
            ))}
          </ol>
          <figure className="mt-8 overflow-hidden rounded-lg">
            <Image
              src="/genel-kurul-2021.jpg"
              alt="İKLEV 25. Seçimli Genel Kurul toplantısı, Mart 2021"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <figcaption className="mt-2 text-xs text-muted">
              25. Seçimli Genel Kurul, Mart 2021 — Karşıyaka Lisesi
            </figcaption>
          </figure>
        </section>

        {/* Yönetim Kurulu */}
        <section aria-labelledby="board-heading">
          <h2 id="board-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground">
            Yönetim Kurulu
          </h2>

          {kurulUyeleri.length === 0 ? (
            <p className="text-sm text-muted">
              Yönetim kurulu bilgileri güncellenmektedir.
            </p>
          ) : (
            <ul className="space-y-4" role="list">
              {kurulUyeleri.map((uye) => (
                <li
                  key={uye._id}
                  className="flex items-center gap-4 border-t border-border pt-4"
                >
                  {uye.foto?.asset?.url && (
                    <Image
                      src={uye.foto.asset.url}
                      alt={uye.foto.alt ?? uye.ad}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {uye.gorev}
                    </span>
                    <p className="text-base font-medium text-foreground">
                      {uye.ad}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Faaliyetler */}
      <section className="mt-20 border-t border-border pt-16" aria-labelledby="activities-heading">
        <h2 id="activities-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          Faaliyetlerimiz
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              baslik: "Burs Programları",
              aciklama: "Her yıl maddi desteğe ihtiyaç duyan, başarılı Karşıyaka Liseli öğrencilere burs verilmektedir.",
            },
            {
              baslik: "Okul Destekleri",
              aciklama: "Kütüphane, laboratuvar ve diğer okul altyapı projelerine katkı sağlanmaktadır.",
            },
            {
              baslik: "Vefa Günleri",
              aciklama: "Mezunları bir araya getiren yıllık vefa günleri ve özel yıl törenleri düzenlenmektedir.",
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
