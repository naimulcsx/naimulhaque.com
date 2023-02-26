import { About, PageTransition } from "~/components";
import { RecentPosts } from "~/components/RecentPosts";

export default function Home() {
  return (
    <PageTransition>
      <About />
      <RecentPosts />
      {/* <section className="mt-16">
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-white/[0.10] rounded-md p-8 rounded-lg h-48">
            <p className="text-2xl text-white">What I built</p>
          </div>
          <div className="bg-white/[0.10] text-white p-8 rounded-lg h-48">
            <p className="text-2xl">Read my story</p>
          </div>
          <div className="bg-white/[0.10] text-white p-8 rounded-lg h-48">
            <p className="text-2xl">Hire Me!</p>
          </div>
        </div>
      </section> */}
    </PageTransition>
  );
}
