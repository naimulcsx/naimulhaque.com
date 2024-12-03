import { AboutSection } from "@/components/about-section";
import { ArticlesList } from "@/components/articles-list";
import { ExperienceSection } from "@/components/experience-section";
import { KeyTechSection } from "@/components/key-tech-section";
import { Sidebar } from "@/components/sidebar";

export const metadata = {
  title: "Naimul Haque — Software Engineer, Competitive Programmer"
};

export default async function Homepage() {
  return (
    <div>
      <AboutSection />

      <KeyTechSection />

      <div className="container py-6 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <div className="flex-1 overflow-auto">
            <ExperienceSection />
            <ArticlesList />
          </div>
          <div className="w-full lg:sticky lg:top-16 lg:h-fit lg:shrink-0 lg:basis-72">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
