import Link from "next/link";
import NewsCard from "@/components/NewsCard";

type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  coverImage?: {
    asset: { url: string };
    alt?: string;
  };
};

type NewsGridProps = {
  news: NewsItem[];
};

export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20"
      aria-labelledby="news-heading"
    >
      <div className="mb-10 flex items-baseline justify-between">
        <h2
          id="news-heading"
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Son haberler
        </h2>
        <Link
          href="/haberler"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          Tümünü gör →
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}
