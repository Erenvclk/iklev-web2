import HeroSection from "@/components/HeroSection";
import DonateBar from "@/components/DonateBar";
import NewsGrid from "@/components/NewsGrid";
import ContactGrid from "@/components/ContactGrid";
import { getRecentHaberler } from "@/lib/queries";

export const revalidate = 3600;

export default async function HomePage() {
  const haberler = await getRecentHaberler(3);

  return (
    <>
      <HeroSection />
      <DonateBar />
      <NewsGrid news={haberler} />
      <AboutSection />
      <ContactGrid />
    </>
  );
}

function AboutSection() {
  return (
    <section
      className="border-t border-border px-6 py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Vakfımız hakkında
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          Vakfımız, İzmir&apos;de bulunan üç lise eğitim vakfından biri olarak 25
          Nisan 1996&apos;dan bu yana 200&apos;ün üzerinde üyesiyle faaliyetlerini
          sürdürmektedir.
        </p>
        <blockquote className="border-l-4 border-positive pl-6">
          <p className="text-base italic leading-relaxed text-foreground md:text-lg">
            &ldquo;İzmir Karşıyaka Lisesi öğrencilerini; özgür düşünce, çağdaş
            bilim anlayışı ve Atatürk ilkeleri ışığında yetiştirme, ülkeye ve
            insanlığa yararlı aydın kişiler olarak yetişmelerini sağlamaya
            çalışmak.&rdquo;
          </p>
        </blockquote>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          Her yıl onlarca öğrenciye burs veren, 50. ve 60. yıl törenleri ile
          vefa günleri düzenleyen vakfımız; okulumuzun ihtiyaçlarını karşılamak
          için de çalışmalarını sürdürmektedir.
        </p>
      </div>
    </section>
  );
}
