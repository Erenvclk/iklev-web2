import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  coverImage?: {
    asset: { url: string };
    alt?: string;
  };
};

export default function NewsCard({ slug, title, summary, date, coverImage }: NewsCardProps) {
  const formatted = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border">
      {coverImage?.asset?.url ? (
        <div className="aspect-video overflow-hidden">
          <Image
            src={coverImage.asset.url}
            alt={coverImage.alt ?? title}
            width={600}
            height={338}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video bg-surface" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <time dateTime={date} className="text-xs text-muted">
          {formatted}
        </time>
        <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-3">
          {summary}
        </p>
        <Link
          href={`/haberler/${slug}`}
          className="mt-auto text-sm font-medium text-accent transition-opacity hover:opacity-70"
          aria-label={`${title} haberini oku`}
        >
          Devamını gör →
        </Link>
      </div>
    </article>
  );
}
