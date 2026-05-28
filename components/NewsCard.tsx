import Link from "next/link";

type NewsCardProps = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export default function NewsCard({ slug, title, summary, date }: NewsCardProps) {
  const formatted = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col gap-3 border-t border-border pt-5">
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
    </article>
  );
}
