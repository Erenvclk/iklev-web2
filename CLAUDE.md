# İKLEV Web Sitesi — Proje Rehberi

Bu dosya Claude Code için hazırlanmıştır. Tüm kararlar kesinleşmiştir, değiştirme.

---

## Proje Özeti

İzmir Karşıyaka Lisesi Eğitim Vakfı (İKLEV) web sitesinin yenilenmesi.
Mevcut site: https://www.iklev.org.tr/tr
Hedef: Modern, güven veren, erişilebilir, aktif görünen bir vakıf sitesi.

---

## Tech Stack (Değiştirme)

| Katman | Araç | Notlar |
|--------|------|--------|
| Framework | Next.js 14 App Router | Pages Router kullanma |
| Dil | TypeScript | JS dosyası oluşturma |
| Stil | Tailwind CSS | Ek CSS kütüphanesi ekleme |
| CMS | Sanity.io | Headless, bulut tabanlı |
| Hosting | Vercel | Ücretsiz plan |
| Bağış | iyzico | Türkiye yerel ödeme sağlayıcısı |

---

## Klasör Yapısı

```
iklev-web2/
├── app/
│   ├── layout.tsx          # Root layout, Navbar + Footer
│   ├── page.tsx            # Ana sayfa
│   ├── haberler/
│   │   ├── page.tsx        # Haber listesi
│   │   └── [slug]/
│   │       └── page.tsx    # Haber detay
│   ├── vakfimiz/
│   │   └── page.tsx        # Hakkımızda, tarihçe, yönetim kurulu
│   ├── burslar/
│   │   └── page.tsx        # Burs bilgisi ve başvuru
│   ├── bagis/
│   │   └── page.tsx        # iyzico bağış sayfası
│   └── iletisim/
│       └── page.tsx        # İletişim formu
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── DonateBar.tsx
│   ├── NewsCard.tsx
│   ├── NewsGrid.tsx
│   └── ContactGrid.tsx
├── lib/
│   ├── sanity.ts           # Sanity client
│   ├── queries.ts          # GROQ sorguları
│   └── iyzico.ts           # iyzico yardımcı fonksiyonlar
├── sanity/
│   └── schemas/
│       ├── haber.ts
│       ├── etkinlik.ts
│       └── sayfa.ts
└── public/
    └── logo.png
```

---

## Tasarım Kararları

### Genel Tarz
- Modern / clean, beyaz arka plan ağırlıklı
- Bold tipografi, bol beyaz alan
- Sıfırdan özel tasarım — hazır tema veya component kütüphanesi yok
- Mobil öncelikli (mobile-first) yaklaşım

### Renkler
```
### Renkler
Ana arka plan:        #FFFFFF
Ana metin:            #0A0A0A
İkincil metin:        #6B7280
Kenarlık:             #E5E7EB

Kırmızı (ana vurgu):  #B91C1C  ← butonlar, logo, linkler, aksan çizgiler
Kırmızı açık (bg):    #FEF2F2  ← etiket arka planı
Kırmızı çerçeve:      #FECACA  ← etiket kenarlığı

Yeşil (yalnızca):     #15803D  ← blockquote sol çizgi, "aktif" durumu
Yeşil açık (bg):      #F0FDF4  ← aktif etiket arka planı
Yeşil çerçeve:        #BBF7D0  ← aktif etiket kenarlığı

Kural: Kırmızı ve yeşil asla yan yana veya aynı bileşende kullanılmaz.
Yeşil yalnızca durum göstergesi (aktif, başarılı) ve alıntı vurgusu içindir.
```

### Tipografi
- Font: Inter (Google Fonts)
- Başlık: font-weight 500, letter-spacing -0.02em
- Body: font-size 15px, line-height 1.7

### Erişilebilirlik
- Semantik HTML zorunlu (nav, main, section, article, footer)
- Her görselde alt attribute olacak
- Klavye navigasyonu çalışacak
- Kontrast oranı WCAG AA standardında olacak
- ARIA etiketleri gerekli yerlerde eklenecek

---

## Ana Sayfa Bölümleri (Sıra Değişmez)

### 1. Navbar
```
[İKLEV logosu + "İzmir Karşıyaka Lisesi Eğitim Vakfı" alt başlık]
[Vakfımız] [Burslar] [Karşıyaka Lisesi] [Haberler] [İletişim] [Üyelik]
[Bağış Yap butonu → /bagis]
```
- Sticky, scroll'da hafif gölge
- Mobilde hamburger menü

### 2. Hero
```
Etiket: "1996'dan bu yana İzmir'de"
Başlık: "Karşıyaka Liseli öğrencilerin yanındayız"
Alt metin: "İzmir'deki üç lise eğitim vakfından biri olarak burs programları,
            kültürel etkinlikler ve okul destekleriyle her yıl onlarca
            öğrencinin geleceğine katkı sağlıyoruz."
Buton 1: "Bağış Yap" (koyu, dolu) → /bagis
Buton 2: "Faaliyetlerimizi Keşfet" (kenarlıklı, şeffaf) → /vakfimiz
```

### 3. Bağış Çubuğu
```
Sol: "Bir öğrencinin yanında ol" başlık
     "Bağışlarınız doğrudan yetenekli ve çalışkan, ancak maddi olanakları
      kısıtlı Karşıyaka Liseli öğrencilere burs olarak ulaşıyor." metin
     IBAN: TR40 0001 2009 7100 0016 0000 61 (Halkbank) — küçük, soluk
Sağ: "Hemen Bağış Yap →" butonu
```
- Koyu arka plan (#0A0A0A), beyaz metin

### 4. Son Haberler
```
Başlık: "Son haberler" + "Tümünü gör →" linki
3 sütun NewsCard grid (Sanity'den dinamik)
Her kart: tarih, başlık, özet, "Devamını gör →"
```

### 5. Vakfımız Hakkında
```
Başlık: "Vakfımız hakkında"
Paragraf: "Vakfımız, İzmir'de bulunan üç lise eğitim vakfından biri olarak
           25 Nisan 1996'dan bu yana 200'ün üzerinde üyesiyle
           faaliyetlerini sürdürmektedir."
Alıntı bloğu (blockquote):
  "İzmir Karşıyaka Lisesi öğrencilerini; özgür düşünce, çağdaş bilim
   anlayışı ve Atatürk ilkeleri ışığında yetiştirme, ülkeye ve insanlığa
   yararlı aydın kişiler olarak yetişmelerini sağlamaya çalışmak."
Paragraf: "Her yıl onlarca öğrenciye burs veren, 50. ve 60. yıl törenleri
           ile vefa günleri düzenleyen vakfımız; okulumuzun ihtiyaçlarını
           karşılamak için de çalışmalarını sürdürmektedir."
```

### 6. İletişim
```
3 sütun:
  [Adres] Yaşar Aksoy Sokak No:83 D.1, Karşıyaka, İzmir
  [Telefon] 0232 368 1912 / 0532 379 1912
  [E-posta & Sosyal] info@iklev.org.tr + Facebook, Instagram, X linkleri
```

### 7. Footer
```
Sol: "İKLEV Vakfı © 2026"
Orta: [Vakıf Senedi] [Gizlilik] [Üyelik]
```

---

## Gerçek İçerik Verileri

```
Vakıf tam adı:  İzmir Karşıyaka Lisesi Eğitim Vakfı
Kısa adı:       İKLEV
Kuruluş tarihi: 25.04.1996
Şehir:          İzmir / Karşıyaka

Adres:    Yaşar Aksoy Sokak No:83 D.1, Karşıyaka, İzmir
Telefon1: 0232 368 1912
Telefon2: 0532 379 1912
E-posta:  info@iklev.org.tr

Banka:    Halkbank Karşıyaka Şubesi
IBAN:     TR40 0001 2009 7100 0016 0000 61

Facebook:  https://www.facebook.com/iklev/
Twitter/X: https://twitter.com/iklev
Instagram: https://instagram.com/karsiyaka_lisesi_egitim_vakfi

Mevcut site: https://www.iklev.org.tr/tr
```

---

## Sanity Şema Yapısı

### haber.ts
```typescript
{
  name: 'haber',
  fields: [
    { name: 'baslik', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'baslik' } },
    { name: 'ozet', type: 'text' },
    { name: 'icerik', type: 'array', of: [{ type: 'block' }] },
    { name: 'kapakGorseli', type: 'image' },
    { name: 'yayinTarihi', type: 'datetime' },
    { name: 'yayinda', type: 'boolean' }
  ]
}
```

### etkinlik.ts
```typescript
{
  name: 'etkinlik',
  fields: [
    { name: 'baslik', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'baslik' } },
    { name: 'aciklama', type: 'text' },
    { name: 'tarih', type: 'datetime' },
    { name: 'konum', type: 'string' },
    { name: 'etiket', type: 'string' },
    { name: 'yayinda', type: 'boolean' }
  ]
}
```

---

## Çalışma Kuralları (Kesinlikle Uy)

1. **Her adımda dur, onay bekle** — tek seferde çok ilerleme
2. **Bir dosyayı bitir, sonra diğerine geç**
3. **Tailwind dışında CSS kütüphanesi ekleme** (framer-motion istisna)
4. **Gereksiz npm paketi kurma** — her yeni paket için onay al
5. **TypeScript strict mode** — any kullanma
6. **Bileşenler küçük ve tek sorumlu olsun**
7. **Türkçe içerik, İngilizce kod ve değişken isimleri**
8. **Console.log bırakma** — production'a gitmesin
9. **Güvenlik:** input validation, XSS koruması, rate limiting
10. **Erişilebilirlik:** her bileşende semantic HTML ve ARIA

---

## Sprint Planı

| Sprint | Konu | Durum |
|--------|------|-------|
| Sprint 0 | Analiz ve kararlar | ✅ Tamamlandı |
| Sprint 1 | Mimari + temel UI | 🔄 Devam ediyor |
| Sprint 2 | Haber/etkinlik modülleri | Bekliyor |
| Sprint 3 | iyzico bağış entegrasyonu | Bekliyor |
| Sprint 4 | Erişilebilirlik + güvenlik | Bekliyor |
| Sprint 5 | Vercel deploy + canlıya alma | Bekliyor |

---

## İlk Görev (Sprint 1 Başlangıç)

Şu sırayla ilerle, her adımda dur ve onay bekle:

1. `package.json` dosyasını göster
2. `tailwind.config.ts` dosyasını özelleştir (renkler, font)
3. `app/globals.css` dosyasını temizle ve temel stilleri ekle
4. `components/Navbar.tsx` bileşenini oluştur
5. `components/Footer.tsx` bileşenini oluştur
6. `app/layout.tsx` dosyasına Navbar ve Footer'ı ekle
7. `components/HeroSection.tsx` bileşenini oluştur
8. `components/DonateBar.tsx` bileşenini oluştur
9. `app/page.tsx` ana sayfayı birleştir

**Başla: önce `package.json` dosyasını göster.**
