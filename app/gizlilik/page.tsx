import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı kişisel verilerin korunması ve gizlilik politikası.",
};

export default function GizlilikPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-muted">Son güncelleme: Mayıs 2026</p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-foreground">

        <section aria-labelledby="giris-heading">
          <h2 id="giris-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            1. Giriş
          </h2>
          <p className="text-muted">
            İzmir Karşıyaka Lisesi Eğitim Vakfı (İKLEV) olarak kişisel
            verilerinizin güvenliği ve gizliliği en öncelikli konularımızdan
            biridir. Bu politika, 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (KVKK) kapsamında kişisel verilerinizin nasıl toplandığını,
            kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
        </section>

        <section aria-labelledby="toplanan-heading">
          <h2 id="toplanan-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            2. Toplanan Veriler
          </h2>
          <p className="mb-3 text-muted">
            Web sitemizi kullanmanız sırasında aşağıdaki veriler toplanabilir:
          </p>
          <ul className="space-y-2 text-muted">
            {[
              "İletişim formu aracılığıyla ilettiğiniz ad-soyad, e-posta adresi ve mesaj içeriği",
              "Üyelik başvurusunda sağlanan kişisel bilgiler (ad-soyad, TC kimlik numarası, iletişim bilgileri)",
              "Web sitesi ziyareti sırasında oluşan teknik veriler (tarayıcı türü, IP adresi — yalnızca sistem günlüklerinde)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="kullanim-heading">
          <h2 id="kullanim-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            3. Verilerin Kullanım Amacı
          </h2>
          <p className="mb-3 text-muted">
            Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla kullanılır:
          </p>
          <ul className="space-y-2 text-muted">
            {[
              "Gönderilen mesajlara yanıt vermek ve talepleri karşılamak",
              "Üyelik başvurularını değerlendirmek",
              "Burs başvurularını işleme almak",
              "Yasal yükümlülüklerin yerine getirilmesi",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="paylasim-heading">
          <h2 id="paylasim-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            4. Veri Paylaşımı
          </h2>
          <p className="text-muted">
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla
            paylaşılmaz, satılmaz veya kiralanmaz. Vakıf faaliyetleri
            kapsamında zorunlu hizmet sağlayıcılarla (barındırma, e-posta gibi)
            yalnızca gerekli ölçüde paylaşım yapılabilir.
          </p>
        </section>

        <section aria-labelledby="haklariniz-heading">
          <h2 id="haklariniz-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            5. KVKK Kapsamında Haklarınız
          </h2>
          <p className="mb-3 text-muted">
            6698 sayılı KVKK'nın 11. maddesi uyarınca aşağıdaki haklara
            sahipsiniz:
          </p>
          <ul className="space-y-2 text-muted">
            {[
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
              "İşlenmişse buna ilişkin bilgi talep etme",
              "İşlenme amacını ve bu amaca uygun kullanılıp kullanılmadığını öğrenme",
              "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme",
              "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
              "Kanuna aykırı işlenmesi hâlinde silinmesini talep etme",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="iletisim-heading" className="rounded-lg border border-border bg-surface p-6">
          <h2 id="iletisim-heading" className="mb-3 text-base font-bold tracking-tight text-foreground">
            6. İletişim
          </h2>
          <p className="text-muted">
            Kişisel verilerinizle ilgili talepleriniz ve sorularınız için
            aşağıdaki iletişim bilgilerini kullanabilirsiniz:
          </p>
          <div className="mt-4 space-y-2 text-muted">
            <p>
              <strong className="text-foreground">Veri Sorumlusu:</strong>{" "}
              İzmir Karşıyaka Lisesi Eğitim Vakfı (İKLEV)
            </p>
            <p>
              <strong className="text-foreground">Adres:</strong>{" "}
              Yaşar Aksoy Sokak No:83 D.1, Karşıyaka, İzmir
            </p>
            <p>
              <strong className="text-foreground">E-posta:</strong>{" "}
              <a
                href="mailto:info@iklev.org.tr"
                className="hover:text-foreground transition-colors"
              >
                info@iklev.org.tr
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
