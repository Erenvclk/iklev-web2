import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Sol — metin */}
        <div>
          <p className="mb-6 inline-block rounded-full border border-accent-ring bg-accent-light px-4 py-1.5 text-sm text-accent">
            1996&apos;dan bu yana İzmir&apos;de
          </p>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Karşıyaka Liseli öğrencilerin yanındayız
          </h1>

          <p className="mb-10 text-base leading-relaxed text-muted md:text-lg">
            İzmir&apos;deki üç lise eğitim vakfından biri olarak burs
            programları, kültürel etkinlikler ve okul destekleriyle her yıl
            onlarca öğrencinin geleceğine katkı sağlıyoruz.
          </p>

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
        </div>

        {/* Sağ — fotoğraf */}
        <div className="relative hidden overflow-hidden rounded-2xl lg:block">
          <Image
            src="/genel-kurul-2021.jpg"
            alt="İKLEV üyeleri Karşıyaka Lisesi bahçesinde"
            width={700}
            height={500}
            className="w-full object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
