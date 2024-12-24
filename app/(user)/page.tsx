import { Metadata } from "next";

import { AboutSection } from "@/components/about-section";
import { ArticlesList } from "@/components/articles-list";
import { ExperienceSection } from "@/components/experience-section";
import { KeyTechSection } from "@/components/key-tech-section";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "AKM Naimul Haque — Software Craftsman and AI Enthusiast",
  description:
    "AKM Naimul Haque is a full-stack software engineer with expertise in JavaScript, TypeScript, React, and AWS. Explore his portfolio, projects, and blog for insights into technology, programming, and personal growth.",
  openGraph: {
    images: "/author.jpg"
  }
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
