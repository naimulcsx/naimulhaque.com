import { About } from "~/components/modules/homepage/About";
import { KeyTechnologies } from "~/components/modules/homepage/KeyTechnologies";
import { RecentPosts } from "~/components/modules/homepage/RecentPosts";

export default function Home() {
  return (
    <>
      <About />
      <KeyTechnologies />
      <RecentPosts />
    </>
  );
}
