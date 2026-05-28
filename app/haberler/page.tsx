import { getHaberler } from "@/lib/queries";
import NewsCard from "@/components/NewsCard";

export const metadata = {
  title: "Haberler — İKLEV",
  description: "İzmir Karşıyaka Lisesi Eğitim Vakfı'nın son haberleri ve duyuruları.",
};

export const revalidate = 3600;

export default async function HaberlerPage() {
  const haberler = await getHaberler();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Haberler
      </h1>

      {haberler.length === 0 ? (
        <p className="text-muted">Henüz haber eklenmemiş.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {haberler.map((haber) => (
            <NewsCard
              key={haber._id}
              slug={haber.slug}
              title={haber.title}
              summary={haber.summary}
              date={haber.date}
            />
          ))}
        </div>
      )}
    </div>
  );
}
