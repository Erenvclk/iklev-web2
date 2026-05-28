import Image from "next/image";
import { notFound } from "next/navigation";
import { getHaberBySlug, getHaberSlugs } from "@/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getHaberSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const haber = await getHaberBySlug(slug);
  if (!haber) return {};
  return {
    title: `${haber.title} — İKLEV`,
    description: haber.summary,
    openGraph: haber.coverImage?.asset?.url
      ? { images: [{ url: haber.coverImage.asset.url }] }
      : undefined,
  };
}

export default async function HaberDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const haber = await getHaberBySlug(slug);

  if (!haber) notFound();

  const formatted = new Date(haber.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <time dateTime={haber.date} className="mb-3 block text-sm text-muted">
          {formatted}
        </time>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {haber.title}
        </h1>
        {haber.summary && (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {haber.summary}
          </p>
        )}
      </header>

      {haber.coverImage?.asset?.url && (
        <div className="mb-10 overflow-hidden rounded-lg">
          <Image
            src={haber.coverImage.asset.url}
            alt={haber.coverImage.alt ?? haber.title}
            width={800}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>
      )}

      {haber.content && haber.content.length > 0 && (
        <div>
          {(haber.content as Array<{ _type: string; _key: string; children?: Array<{ text: string }> }>).map((block) => {
            if (block._type !== "block") return null;
            const text = block.children?.map((child) => child.text).join("") ?? "";
            return (
              <p key={block._key} className="mb-4 text-base leading-relaxed text-foreground">
                {text}
              </p>
            );
          })}
        </div>
      )}
    </article>
  );
}
