import { sanityClient } from "@/lib/sanity";

// ─── Haber ───────────────────────────────────────────────────────────────────

export type Haber = {
  _id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  coverImage?: {
    asset: { url: string };
    alt?: string;
  };
  content?: unknown[];
};

const haberListeFields = `
  _id,
  "slug": slug.current,
  "title": baslik,
  "summary": ozet,
  "date": yayinTarihi,
  "coverImage": kapakGorseli { asset->{ url }, alt }
`;

export async function getHaberler(): Promise<Haber[]> {
  return sanityClient.fetch(
    `*[_type == "haber"] | order(yayinTarihi desc) [0...12] { ${haberListeFields} }`
  );
}

export async function getRecentHaberler(count = 3): Promise<Haber[]> {
  return sanityClient.fetch(
    `*[_type == "haber"] | order(yayinTarihi desc) [0...${count}] { ${haberListeFields} }`
  );
}

export async function getHaberBySlug(slug: string): Promise<Haber | null> {
  return sanityClient.fetch(
    `*[_type == "haber" && slug.current == $slug][0] { ${haberListeFields}, content }`,
    { slug }
  );
}

export async function getHaberSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(
    `*[_type == "haber"] { "slug": slug.current }`
  );
}

// ─── Yönetim Kurulu ──────────────────────────────────────────────────────────

export type YonetimKuruluUye = {
  _id: string;
  ad: string;
  gorev: string;
  sira?: number;
  foto?: {
    asset: { url: string };
    alt?: string;
  };
};

export async function getYonetimKurulu(): Promise<YonetimKuruluUye[]> {
  return sanityClient.fetch(
    `*[_type == "yonetimKurulu"] | order(sira asc) {
      _id,
      ad,
      gorev,
      sira,
      "foto": foto { asset->{ url }, alt }
    }`
  );
}

// ─── Ayarlar (Singleton) ─────────────────────────────────────────────────────

export type Ayarlar = {
  adres?: string;
  telefon1?: string;
  telefon2?: string;
  eposta?: string;
  iban?: string;
  banka?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

export async function getAyarlar(): Promise<Ayarlar | null> {
  return sanityClient.fetch(
    `*[_type == "ayarlar"][0] {
      adres, telefon1, telefon2, eposta, iban, banka,
      facebook, twitter, instagram
    }`
  );
}
