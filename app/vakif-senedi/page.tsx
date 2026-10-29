import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vakıf Senedi — İKLEV",
  description:
    "İzmir Karşıyaka Lisesi Eğitim Vakfı'nın kuruluş senedi ve vakıf tüzüğü.",
};

export default function VakifSenediPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Vakıf Senedi
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Karşıyaka 2 Noterliğinin 25.04.1996 tarih 24226 yev.no. ile tanzim
          edilmiş olup Karşıyaka 4. Asliye Hukuk Mahkemesinin 1996/410 Esas,
          1996/441 Karar sayılı 29.05.1996 tarihli kararı ile tescil
          edilmiştir.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-foreground">

        <section aria-labelledby="madde2">
          <h2 id="madde2" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 2 — Vakfın Adı
          </h2>
          <p>
            Vakfın Adı: <strong>İzmir Karşıyaka Lisesi Eğitim Vakfı</strong>'dır.
            Kısaltılmış Adı <strong>(İKLEV)</strong>'dir. Bu senette yer alan
            "Vakıf" sözcüğü, İzmir Karşıyaka Lisesi Eğitim Vakfı'nı ifade
            edecektir.
          </p>
        </section>

        <section aria-labelledby="madde3">
          <h2 id="madde3" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 3 — Vakfın Merkezi ve Şubeleri
          </h2>
          <p>
            Tüzel kişiliğe sahip olan Vakfın Merkezi, İzmir İli Karşıyaka
            ilçesinde olup, adresi 1717 Sokak No. 144/501 (Osmanbey İşhanı)'dır.
            Vakıf Yönetim Kurulu kararı ve yetkili makamlardan izin almak
            kaydıyla Yurt içinde şubeler ve temsilcilikler açabilir.
          </p>
        </section>

        <section aria-labelledby="madde4">
          <h2 id="madde4" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 4 — Amaç
          </h2>
          <p className="mb-3">
            İzmir Karşıyaka Lisesi Öğrencilerini; özgür düşünce, çağdaş bilim
            anlayışı ve Atatürk ilkeleri ışığında yetiştirme, çalışma, inceleme,
            araştırma ve yönetime yeteneklerine sahip kılmak. Ülkeye ve insanlığa
            yararlı aydın kişiler olarak yetişmelerini sağlamaya çalışmak.
          </p>
          <p className="mb-3">
            Bu doğrultuda İzmir Karşıyaka Lisesi bina ve eğitim olanaklarının
            genişletilmesi, onarılması ve arttırılmasına katkıda bulunmak.
            Niteliği gereği genel ve katma bütçeli idareler içinde yer alan
            eğitimsel ve kültürel hizmetlere katkı sağlamak, böylece devletin
            kamu görevi yükünü azaltacak çalışmalar yapmaktadır.
          </p>
          <p>
            Vakıf herhangi bir şekilde dini ve siyasi faaliyette bulunamaz,
            dinsel siyasal ve kişiler amaçlara alet edilemez.
          </p>
        </section>

        <section aria-labelledby="madde5">
          <h2 id="madde5" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 5 — Kapsam
          </h2>
          <p className="mb-4">
            Yukarıda belirtilen amaçlar ve hedefler doğrultusunda aşağıdaki
            çalışma kapsamı oluşturulmuştur:
          </p>
          <ol className="space-y-3 list-none">
            {[
              { no: "5.1", text: "Karşıyaka Lisesi'nin tüm tarihsel, kültürel mirasına sahip çıkmak, korumak ve yaşatmak." },
              { no: "5.2", text: "Karşıyaka Lisesi bina ve tesislerinin yenileme ve onarımlarına katkıda bulunmak." },
              { no: "5.3", text: "Amaçta yer alan konuları gerçekleştirmek üzere her türlü tesisi kurmak ve çalıştırmak. Bunun için gerektiğinde, mevcut tesislerle, özel ve kamu kuruluşları ile işbirliği ve ortak çalışma yapmak, bu ilişkileri getiren koşulları düzenlemek." },
              { no: "5.4", text: "Eğitim, öğretim araç ve gereçlerinin sağlanmasında katkıda bulunmak ya da doğrudan gerçekleştirmek." },
              { no: "5.5", text: "Okul yönetiminin planlanması doğrultusunda dershaneler, laboratuvarlar kurmak, açmak ve geliştirmek." },
              { no: "5.6", text: "Öğrenciler için kütüphaneler, sağlık, dinlenme ve başkaca sosyal amaçlı (konferans, sergi, konser salonu gibi) kültür tesisleri kurmak ve işletmek." },
              { no: "5.7", text: "Amatör sporun gelişmesini sağlamak, amatör sporla uğraşmak isteyen Karşıyaka Lisesi mensuplarının yararına açık spor tesisleri kurmak, kurulmuş olanları onarmak, bakımlarını ve gelişmelerini sağlamak." },
              { no: "5.8", text: "Yetenekli ve çalışkan oldukları hâlde okuma olanakları sınırlı öğrencilerin, Milli Eğitim Bakanlığı'nın koyduğu esaslara uygun şekilde İzmir Karşıyaka Lisesi'nde ve Karşıyaka Lisesi'ni bitirenlerin kayıt yaptırdıkları yüksek okullarda ve gerektiğinde dış ülkelerde eğitim ve ihtisas yapmalarını sağlamak için öğretim süresince gereğine göre burs vermek." },
              { no: "5.9", text: "İzmir Karşıyaka Lisesi'nde öğrenim gören öğrenciler için ders programlarına uygun kurslar açmak, seminer ve konferanslar düzenlemek, gerektiğinde yurt dışından eğitici uzman getirmek." },
              { no: "5.10", text: "Öğrencilerin okul sonrası yaşamlarında da aralarındaki bağlılık ve dayanışmalarını sürdürecek önlemleri almak." },
              { no: "5.11", text: "İzmir Karşıyaka Lisesi'ni bitirenler ve hizmet verenlerin okul ile aralarındaki ilişkileri geliştirip sürdürülmesini sağlayıcı tesisler kurmak ve yaşatmak, ilişkileri geliştirici etkinlikleri düzenlemek. Öğrenci ve öğretmenlere sağlık ve sosyal sorunların çözümü için ilgili kuruluşların istemleri doğrultusunda maddi, manevi destek sağlamak." },
            ].map((item) => (
              <li key={item.no} className="flex gap-4">
                <span className="w-10 shrink-0 font-semibold text-accent">{item.no}</span>
                <span className="text-muted">{item.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="madde6">
          <h2 id="madde6" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 6 — Vakfın Mal Varlığı
          </h2>
          <p className="mb-3">
            Vakfın gelirleri aşağıdaki kaynaklardan oluşur:
          </p>
          <ol className="space-y-2 list-none">
            {[
              { no: "6.2", text: "Vakfın amaçlarına uygunluğu Yönetim Kurulunca saptanacak şartlı ya da şartsız özel kuruluşlar, gerçek veya tüzel kişiler tarafından yapılacak yardım veya bağışlar." },
              { no: "6.3", text: "Yayın, konser, balo, piyango, yarışmalar veya diğer sosyal etkinliklerden elde edilecek gelirler." },
              { no: "6.6", text: "Vakfın kurduğu, işlettiği veya işbirliği yaptığı her türlü kurs, hastane, poliklinik ve hizmetleriyle rehabilitasyon merkezi, kreş, laboratuvar, atölye, diğer merkez ve tesislerden elde edilen gelirler." },
              { no: "6.8", text: "Her çeşit diğer gelirler." },
            ].map((item) => (
              <li key={item.no} className="flex gap-4">
                <span className="w-10 shrink-0 font-semibold text-accent">{item.no}</span>
                <span className="text-muted">{item.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="madde7">
          <h2 id="madde7" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 7 — Vakfın Yönetimi
          </h2>
          <p>
            Vakıf, Vakıf Genel Kurulu tarafından Genel Kurul Üyelerinden seçilen
            Yönetim Kurulu tarafından yönetilir.
          </p>
        </section>

        <section aria-labelledby="madde8">
          <h2 id="madde8" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 8 — Vakfın Üyeleri
          </h2>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">8.1 Kurucu Üye</p>
              <p className="mt-1 text-muted">
                Vakfın kuruluşunda maddi ve manevi yardımları bulunan, vakıf
                senedinin kuruluş maddesindeki listede isimleri belirtilen gerçek
                ve tüzel kişilerden ibarettir.
              </p>
            </div>
            <div>
              <p className="font-semibold">8.2 Asil Üye</p>
              <p className="mt-1 text-muted">
                Vakfın kuruluşundan sonra kaydedilen üyeler ile vakfa üye olmak
                isteyen, bir defada en az yarım Cumhuriyet Altını karşılığı nakit
                veya ayni bağışta bulunan ya da bu değerde vakfın gelişmesine
                maddi ve manevi katkı sağlayan, Karşıyaka Lisesi'nde görev yapan
                veya eğitim görmüş olan gerçek kişiler Yönetim Kurulu kararıyla
                asli üye olurlar.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="madde12">
          <h2 id="madde12" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 12 — Vakıf Senedi Tadilatı
          </h2>
          <p>
            Bu Vakfın Senedinde gerekli görülecek değişiklikler, Vakıf Genel
            Kurulunda katılan üyelerin yarısından bir fazla oy çoğunluğu ile
            yapılır.
          </p>
        </section>

        <section aria-labelledby="madde13">
          <h2 id="madde13" className="mb-3 text-base font-bold uppercase tracking-wider text-accent">
            Madde 13 — Vakfın Feshi
          </h2>
          <p>
            Vakıf üyelerinin en az üçte ikisinin mevcut bulunduğu Genel Kurul
            Toplantısına katılan kurucu ve asli üyeler toplamının en az üçte
            ikisi ekseriyetinin kararı ile feshedilir. Vakfın feshi hâlinde
            bütün menkul ve gayrimenkul malları, nakit parası ve kıymetli
            senetleri, vergi muafiyeti tanınmış aynı amaçlarda faaliyetlerde
            bulunan bir veya birden fazla vakfa ya da bir resmî kuruma
            devredilebilir.
          </p>
        </section>

      </div>

      {/* Tescil Bilgisi */}
      <div className="mt-16 border-t border-border pt-8 text-xs leading-relaxed text-muted">
        <p>
          Vakıf senedimiz Karşıyaka 2 Noterliğinin 25.04.1996 tarih 24226
          yev.no. ile tanzim edilmiş olup Karşıyaka 4. Asliye Hukuk Mahkemesinin
          1996/410 Esas, 1996/441 Karar sayılı 29.05.1996 tarihli kararı ile
          vakfımızın tesciline karar verilmiştir.
        </p>
        <p className="mt-2">
          Belirli maddeler İzmir 11 Noterliğinin 21.05.2004 tarih 13548 yev.no.
          ile tanzim ve Karşıyaka 1. Asliye Hukuk Mahkemesinin 2004/241 Esas,
          2004/344 Karar sayılı 15.09.2004 tarihli kararı ile değiştirilmiştir.
          Madde 8 İzmir 11 Noterliğinin 04.05.2009 tarihli kararı ile
          değiştirilmiş olup bu değişiklikler vakıf senedi metnine işlenmiştir.
        </p>
      </div>
    </div>
  );
}
