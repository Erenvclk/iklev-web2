# İKLEV Web Sitesi

İzmir Karşıyaka Lisesi Eğitim Vakfı (İKLEV) web sitesinin yenilenmesi için geliştirdiğim modern ve mobil uyumlu site. İçerikler Sanity CMS üzerinden yönetilir, bağışlar iyzico ile alınır.

**Canlı demo:** [iklev-web2.vercel.app](https://iklev-web2.vercel.app)

> iyzico entegrasyonu **sandbox (test) ortamında** çalışır, gerçek ödeme alınmaz.

## Özellikler

- **İçerik yönetimi:** Haberler, yönetim kurulu üyeleri ve site ayarları (adres, iletişim, banka bilgileri, sosyal medya) Sanity şemalarıyla yönetilir. Sanity Studio sitenin içinde `/studio` adresinde çalışır.
- **Sayfalar:** Ana sayfa, haber listesi ve haber detayı, vakfımız, burslar, iletişim, üyelik, gizlilik, vakıf senedi.
- **Online bağış:** iyzico Checkout Form ile bağış akışı ve bağış sonuç sayfası.
- **Sunucu tarafı ödeme akışı:** Bağış başlatma ve geri dönüş (callback) işlemleri Next.js API route'larında (`app/api/iyzico`) çalışır.
  - Gelen veriler sunucuda doğrulanır: tutar (1 TL – 1.000.000 TL), e-posta, telefon, T.C. kimlik numarası biçimi, adres.
  - iyzico yanıtlarının imzası HMAC-SHA256 ile doğrulanır.
  - API anahtarları yalnızca ortam değişkenlerinden okunur, repoda tutulmaz.
- **Tasarım:** Tailwind CSS ile mobil öncelikli arayüz.

## Teknolojiler

| Katman | Araç |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Dil | TypeScript |
| Stil | Tailwind CSS 4, styled-components |
| CMS | Sanity (`next-sanity`, `@sanity/client`) |
| Ödeme | iyzico (`iyzipay`) |
| Kalite | ESLint |
| Yayın | Vercel |

## Proje Yapısı

```
app/
  api/iyzico/       Bağış başlatma ve callback route'ları
  bagis/            Bağış sayfası ve sonuç sayfası
  haberler/         Haber listesi ve [slug] detay sayfası
  studio/           Gömülü Sanity Studio
  vakfimiz/ burslar/ iletisim/ uyelik/ gizlilik/ vakif-senedi/
components/         Navbar, Footer, HeroSection, DonationForm, NewsCard vb.
lib/                Sanity client, GROQ sorguları, iyzico yardımcıları
sanity/schemas/     ayarlar, haber, yonetimKurulu şemaları
```

## Kurulum

Gereksinimler: Node.js 20+, bir Sanity projesi ve iyzico sandbox hesabı.

```bash
git clone https://github.com/Erenvclk/iklev-web2.git
cd iklev-web2
npm install
```

Kök dizinde `.env.local` dosyası oluştur:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=sanity_proje_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_APP_URL=http://localhost:3000
IYZICO_API_KEY=sandbox_api_key
IYZICO_SECRET_KEY=sandbox_secret_key
IYZICO_URI=https://sandbox-api.iyzipay.com
```

Geliştirme sunucusunu başlat:

```bash
npm run dev
```

Site [http://localhost:3000](http://localhost:3000), Sanity Studio [http://localhost:3000/studio](http://localhost:3000/studio) adresinde açılır.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run start` | Production sunucusu |
| `npm run lint` | ESLint kontrolü |

## iyzico Sandbox ile Test

Bağış akışını denemek için iyzico sandbox hesabından aldığın API anahtarlarını `.env.local` dosyasına ekle ve iyzico dokümantasyonundaki test kartlarını kullan. Sandbox'ta yapılan işlemlerde gerçek para hareketi olmaz.

## Durum

Aktif geliştirme aşamasında.
