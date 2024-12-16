import { ProjectCard } from "@/components/project-card";
import { ProjectsFilter } from "@/components/projects-filter";
import { reader } from "@/reader";

type SearchParams = { tech?: string; year?: string };

export const dynamic = "force-dynamic";

export function generateMetadata({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  return {
    title: "Projects - Naimul Haque"
  };
}

export default async function ProjectsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  console.log("Search Params:", searchParams);
  const projects = await reader.collections.projects.all();
  console.log("projects", projects);

  // Sort projects by year
  const sortedProjects = projects.sort((a, b) => b.entry.year - a.entry.year);
  console.log("sortedProjects", sortedProjects);

  // Extract unique tech stacks and years
  const techStacks = Array.from(
    new Set(sortedProjects.flatMap((project) => project.entry.techStack))
  ).sort();

  const years = Array.from(
    new Set(sortedProjects.map((project) => project.entry.year))
  ).sort((a, b) => b - a);
  console.log("years", years);
  console.log("techStacks", techStacks);

  // Filter projects based on search params
  const filteredProjects = sortedProjects.filter((project) => {
    const techMatch =
      !searchParams.tech || project.entry.techStack.includes(searchParams.tech);
    const yearMatch =
      !searchParams.year || project.entry.year === parseInt(searchParams.year);
    return techMatch && yearMatch;
  });
  console.log("filteredProjects", filteredProjects);

  return (
    <div className="container py-8 sm:py-12 lg:py-16">
      <div className="mx-auto mb-6 max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
          Projects
        </h1>
        <p className="text-sm leading-6 text-gray-300 md:text-base md:leading-7">
          A subset of the projects that I have worked in the past.
        </p>
      </div>

      <ProjectsFilter
        techStacks={techStacks}
        years={years}
        initialTech={searchParams.tech}
        initialYear={searchParams.year}
      />

      <div className="-mx-4 md:-mx-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
