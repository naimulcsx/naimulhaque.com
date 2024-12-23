"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/select";
import { reader } from "@/reader";

interface ProjectsFilterProps {
  projects: Awaited<ReturnType<typeof reader.collections.projects.all>>;
  techStacks: string[];
  years: number[];
  initialTech?: string;
  initialYear?: string;
}

export function ProjectsFilter({
  projects,
  techStacks,
  years,
  initialTech,
  initialYear
}: ProjectsFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateURL = (tech?: string, year?: string) => {
    const params = new URLSearchParams(searchParams);
    if (tech) {
      params.set("tech", tech);
    } else {
      params.delete("tech");
    }
    if (year) {
      params.set("year", year);
    } else {
      params.delete("year");
    }
    router.push(`?${params.toString()}`);
  };

  // Count occurrences of each tech stack from all projects
  const techCounts = techStacks.reduce(
    (acc, tech) => {
      const count = projects.filter((project) =>
        project.entry.techStack.includes(tech)
      ).length;
      acc[tech] = count;
      return acc;
    },
    {} as Record<string, number>
  );

  // Count occurrences of each year from all projects
  const yearCounts = years.reduce(
    (acc, year) => {
      const count = projects.filter(
        (project) => project.entry.year === year
      ).length;
      acc[year] = count;
      return acc;
    },
    {} as Record<number, number>
  );

  // Sort tech stacks and years by count
  const sortedTechStacks = [...techStacks].sort(
    (a, b) => techCounts[b] - techCounts[a]
  );
  const sortedYears = [...years].sort((a, b) => yearCounts[b] - yearCounts[a]);

  return (
    <div className="mb-8 flex justify-center gap-4">
      <div className="flex flex-col gap-2">
        <SelectGroup>
          <SelectLabel className="text-gray-200">Filter by Tech</SelectLabel>
          <Select
            name="tech"
            value={initialTech || ""}
            onValueChange={(value) => {
              updateURL(value === "all" ? undefined : value, initialYear);
            }}
          >
            <SelectTrigger className="w-[150px] text-gray-300 md:w-[180px]">
              <SelectValue placeholder="Select Tech" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ({techStacks.length})</SelectItem>
              {sortedTechStacks.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech} ({techCounts[tech]})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>

      <div className="flex flex-col gap-2">
        <SelectGroup>
          <SelectLabel className="text-gray-200">Filter by Year</SelectLabel>
          <Select
            name="year"
            value={initialYear || ""}
            onValueChange={(value) => {
              updateURL(initialTech, value === "all" ? undefined : value);
            }}
          >
            <SelectTrigger className="w-[150px] text-gray-300 md:w-[180px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ({years.length})</SelectItem>
              {sortedYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year} ({yearCounts[year]})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
    </div>
  );
}
