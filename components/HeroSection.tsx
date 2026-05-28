import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
      aria-labelledby="hero-heading"
    >
      {/* Etiket — açık kırmızı arka plan, kırmızı kenarlık */}
      <p className="mb-6 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
        1996&apos;dan bu yana İzmir&apos;de
      </p>

      {/* Başlık */}
      <h1
        id="hero-heading"
        className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
      >
        Karşıyaka Liseli öğrencilerin yanındayız
      </h1>

      {/* Açıklama */}
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        İzmir&apos;deki üç lise eğitim vakfından biri olarak burs programları,
        kültürel etkinlikler ve okul destekleriyle her yıl onlarca öğrencinin
        geleceğine katkı sağlıyoruz.
      </p>

      {/* Butonlar */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/bagis"
          className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          Bağış Yap
        </Link>
        <Link
          href="/vakfimiz"
          className="rounded-md border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
        >
          Faaliyetlerimizi Keşfet
        </Link>
      </div>
    </section>
  );
}
