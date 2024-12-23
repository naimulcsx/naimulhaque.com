import { reader } from "@/reader";

import { ExperienceCard } from "./experience-card";

export async function ExperienceSection() {
  const experiences = await reader.collections.experiences.all();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  };

  return (
    <section id="experiences">
      <div>
        <h3 className="text-xl font-semibold text-gray-100 sm:text-2xl">
          Experiences
        </h3>
        <div className="mt-6 space-y-2 sm:mt-10">
          {experiences
            .sort((a, b) => {
              // First check if both have order values
              if (
                typeof a.entry.order === "number" &&
                typeof b.entry.order === "number"
              ) {
                return a.entry.order - b.entry.order;
              }
              // Push items with order to the top
              if (typeof a.entry.order === "number") return -1;
              if (typeof b.entry.order === "number") return 1;

              // Fall back to date-based sorting
              if (a.entry.fromDate === b.entry.fromDate) {
                if (!a.entry.toDate) return -1;
                if (!b.entry.toDate) return 1;
                return (
                  new Date(b.entry.toDate).getTime() -
                  new Date(a.entry.toDate).getTime()
                );
              }
              return (
                new Date(b.entry.fromDate).getTime() -
                new Date(a.entry.fromDate).getTime()
              );
            })
            .map((experience) => {
              const duration = experience.entry.toDate
                ? `${formatDate(experience.entry.fromDate!)} - ${formatDate(experience.entry.toDate!)}`
                : `${formatDate(experience.entry.fromDate!)} - Present`;

              return (
                <ExperienceCard
                  slug={experience.slug}
                  key={experience.slug}
                  logo={experience.entry.logo}
                  company={experience.entry.company}
                  role={experience.entry.role}
                  duration={duration}
                  location={experience.entry.location}
                  description={experience.entry.description}
                  type={experience.entry.type}
                  isCurrent={experience.entry.isCurrent}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
