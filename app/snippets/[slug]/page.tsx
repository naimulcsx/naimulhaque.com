import { notFound } from "next/navigation";
import { allPosts, allSnippets } from "contentlayer/generated";
import { MdxContent, TableOfContents } from "~/components/modules/blog";
import { Container } from "~/components/common";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);
  return {
    title: `${snippet?.title} - Naimul Haque`,
    openGraph: {
      type: "article",
      title: `${snippet?.title} - Naimul Haque`,
      description: snippet?.summary,
      publishedTime: new Date(snippet!.publishedAt),
      images: [
        {
          url: `https://www.naimulhaque.com/api/og?title=${snippet?.title}`,
          width: 1920,
          height: 1080,
        },
      ],
    },
    locale: "en-US",
    type: "website",
  };
}

export async function generateStaticParams() {
  return allSnippets.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const snippet = allSnippets.find((post) => post.slug === params.slug);
  if (!snippet) {
    notFound();
  }
  return (
    <>
      <section>
        <Container>
          <div className="mt-32 lg:mt-40 lg:mb-20">
            <div className="space-y-4">
              <h1 className="pb-0 text-5xl font-bold text-stone-200">
                {snippet.title}
              </h1>
              <p>{snippet.summary}</p>
            </div>
            <article className="prose col-span-7 max-w-none space-y-6 dark:prose-invert lg:prose-lg lg:col-span-5">
              <MdxContent code={snippet.body.code} />
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
