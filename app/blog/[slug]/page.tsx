import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { MdxContent, TableOfContents } from "~/components/modules/blog";
import { Container } from "~/components/common";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return {
    title: `${post?.title} - Naimul Haque`,
    openGraph: {
      type: "article",
      title: `${post?.title} - Naimul Haque`,
      description: post?.summary,
      publishedTime: new Date(post!.publishedAt),
      images: [
        {
          url: `https://www.naimulhaque.com/api/og?title=${post?.title}`,
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
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <section>
        <Container>
          <div className="mt-32 grid grid-cols-7 gap-12 lg:mt-40 lg:mb-20">
            <article className="prose col-span-7 max-w-none space-y-6 dark:prose-invert lg:prose-lg lg:col-span-5">
              <h1>{post.title}</h1>
              <MdxContent code={post.body.code} />
            </article>
            <div className="hidden lg:col-span-2 lg:block">
              <aside className="sticky top-28">
                <TableOfContents headings={post.headings} />
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
