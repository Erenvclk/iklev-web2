import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Üyelik — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı'na üye olmak için gerekli şartlar ve başvuru bilgileri.",
};

export default function UyelikPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">

      <div className="mb-12">
        <p className="mb-4 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
          Vakfımıza katılın
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Üyelik
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Karşıyaka Lisesi mezunu veya okulla bağlantılı her birey vakfımıza
          üye olabilir. Üyeliğinizle öğrencilerimizin geleceğine doğrudan katkı
          sağlarsınız.
        </p>
      </div>

      <div className="grid gap-12">

        {/* Üyelik Şartları */}
        <section aria-labelledby="sartlar-heading">
          <h2 id="sartlar-heading" className="mb-6 text-xl font-bold tracking-tight text-foreground">
            Üyelik Şartları
          </h2>
          <div className="rounded-lg border border-border p-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Vakıf ana senedinin hükümlerini kabul etmek kaydıyla üyelik
              başvurusunda bulunulabilir. Asil üyelik için aşağıdaki
              koşullardan birinin sağlanması gerekir:
            </p>
            <ul className="space-y-2 list-none">
              {[
                "Karşıyaka Lisesi'nde eğitim görmüş olmak",
                "Karşıyaka Lisesi'nde görev yapmış veya yapmakta olmak",
                "En az yarım Cumhuriyet Altını karşılığı nakit veya ayni bağışta bulunmak",
                "Vakfın gelişmesine maddi ve manevi katkıda bulunmak",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Başvuru, iki vakıf ortağının önerisiyle yapılır ve Yönetim Kurulu
              kararıyla kesinleşir.
            </p>
          </div>
        </section>

        {/* Başvuru Belgeleri */}
        <section aria-labelledby="belgeler-heading">
          <h2 id="belgeler-heading" className="mb-6 text-xl font-bold tracking-tight text-foreground">
            Gerekli Belgeler
          </h2>
          <ol className="space-y-4">
            {[
              { no: "1", baslik: "Üyelik Başvuru Formu", aciklama: "Ad-soyad, TC kimlik numarası, doğum yeri/tarihi, meslek, iletişim bilgileri ve liseden mezuniyet yılı ile sınıf/okul numarasını içerir." },
              { no: "2", baslik: "Nüfus Fotoğrafı", aciklama: "Güncel nüfus cüzdanı veya pasaport fotoğrafı." },
              { no: "3", baslik: "İki Adet Vesikalık Fotoğraf", aciklama: "Son altı ay içinde çekilmiş." },
              { no: "4", baslik: "Ödeme Dekontu", aciklama: "Ortaklık bedelinin Halkbank Karşıyaka Şubesi'ne yatırıldığına dair banka dekontu. IBAN: TR40 0001 2009 7100 0016 0000 61" },
            ].map((item) => (
              <li key={item.no} className="flex gap-5 border-t border-border pt-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-semibold text-accent">
                  {item.no}
                </span>
                <div>
                  <p className="font-medium text-foreground">{item.baslik}</p>
                  <p className="mt-1 text-sm text-muted">{item.aciklama}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Başvuru */}
        <section aria-labelledby="basvuru-heading" className="rounded-lg border border-border bg-surface p-8">
          <h2 id="basvuru-heading" className="mb-4 text-xl font-bold tracking-tight text-foreground">
            Başvuru için Bize Ulaşın
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Başvuru formunu ve gerekli belgeleri aşağıdaki adrese iletebilir
            ya da e-posta ile gönderebilirsiniz.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-medium text-foreground w-16 shrink-0">Adres</span>
              <address className="not-italic text-muted">
                Yaşar Aksoy Sokak No:83 D.1, Karşıyaka, İzmir
              </address>
            </div>
            <div className="flex gap-3">
              <span className="font-medium text-foreground w-16 shrink-0">Telefon</span>
              <a href="tel:+902323681912" className="text-muted hover:text-foreground transition-colors">
                0232 368 1912
              </a>
            </div>
            <div className="flex gap-3">
              <span className="font-medium text-foreground w-16 shrink-0">E-posta</span>
              <a href="mailto:info@iklev.org.tr" className="text-muted hover:text-foreground transition-colors">
                info@iklev.org.tr
              </a>
            </div>
          </div>
          <Link
            href="/iletisim"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            İletişim Sayfasına Git →
          </Link>
        </section>

      </div>
    </div>
  );
}
