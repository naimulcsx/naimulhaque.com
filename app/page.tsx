import { About, PageTransition } from "~/components";
import { RecentPosts } from "~/components/RecentPosts";

export default function Home() {
  return (
    <PageTransition>
      <About />
      <RecentPosts />
    </PageTransition>
  );
}
