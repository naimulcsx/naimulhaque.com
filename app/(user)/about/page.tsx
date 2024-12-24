import { Metadata } from "next";
import Image from "next/image";

import { compileMDX } from "next-mdx-remote/rsc";

import { AchievementsSection } from "@/components/achievements-section";
import { ExperienceSection } from "@/components/experience-section";
import { SidebarAbout } from "@/components/sidebar-about";
import { reader } from "@/reader";

export const metadata: Metadata = {
  title: "About — Naimul Haque",
  description:
    "Learn more about Naimul Haque - his professional journey, experiences, achievements, and personal story. Software engineer and technology enthusiast.",
  openGraph: {
    images: "/og_image.png"
  }
};

export default async function AboutPage() {
  const about = await reader.singletons.about.read();
  if (!about) {
    return <div>Page not found</div>;
  }

  const markdown = await about.content();

  const { content } = await compileMDX({
    source: markdown
  });

  return (
    <>
      <div className="container animate-[fade-in_1s_ease-in-out] pt-8 sm:pt-12 lg:pt-16">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
            {about.title}
          </h1>
          <p className="text-sm leading-6 text-gray-300 md:text-base md:leading-7">
            {about.description}
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-clip py-4 sm:gap-8">
          {about.gallery.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[9/10] w-44 flex-none bg-transparent ${
                index % 2 ? "-rotate-2" : "rotate-2"
              } group overflow-clip rounded-xl sm:w-72 sm:rounded-2xl`}
            >
              <Image
                alt={image.caption || ""}
                width={1080}
                height={1080}
                className="h-full w-full object-cover"
                src={`/images/about/${image.image}`}
              />
              <div className="absolute inset-0 bg-primary-700/10"></div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-primary-950/75 p-2 text-center text-xs text-primary-100 opacity-0 backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-12 overflow-auto">
            <div
              id="about"
              className="prose prose-invert mx-auto mt-8 prose-headings:mb-8 prose-headings:mt-8 prose-headings:text-gray-100 prose-p:my-4 prose-p:text-gray-400 prose-em:text-gray-300 prose-code:text-gray-300 prose-pre:bg-gray-800/70 prose-pre:text-sm prose-li:text-gray-300"
            >
              {content}
            </div>
            <div className="space-y-4">
              <ExperienceSection />
              <AchievementsSection />
            </div>
          </div>
          <div className="w-full lg:sticky lg:top-16 lg:h-fit lg:shrink-0 lg:basis-72">
            <SidebarAbout />
          </div>
        </div>
      </div>
    </>
  );
}
