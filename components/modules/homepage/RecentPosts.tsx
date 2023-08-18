import Link from "next/link";
import { allBlogs } from "~/.contentlayer/generated";
import { Container } from "../../common/Container";
import moment from "moment";

export function RecentPosts() {
  return (
    <section className="my-16 lg:my-20">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white md:text-3xl">Latest</h1>
          <Link
            className="border-b-2 border-dark pb-1 text-sm font-medium text-primary underline underline-offset-4 lg:text-base"
            href="/blog"
          >
            Show all
          </Link>
        </div>
        <div className="space-y-10">
          {allBlogs
            .filter((post) => !post.draft)
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .slice(0, 5)
            .map((post) => (
              <div key={post._id} className="flex w-full flex-col md:flex-row">
                <div className="mb-2 shrink-0 text-base text-gray-400 dark:text-gray-400 md:basis-[256px]">
                  {moment(post.publishedAt).format("MMMM Do, YYYY")}
                </div>
                <div className="space-y-4">
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {post.title}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.summary}
                  </p>
                  <Link
                    className="relative block w-fit no-underline duration-300 before:absolute before:bottom-[-2px] before:left-0 before:block before:h-0.5 before:w-full before:scale-x-0 before:bg-black before:transition-transform before:content-[''] hover:before:scale-x-100 dark:before:bg-white"
                    href={`/blog/${post.slug}`}
                  >
                    <span className="font-medium text-black dark:text-white">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
