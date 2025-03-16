import { reader } from "@/reader";

import { ExperienceCard } from "./experience-card";

interface RoleInfo {
  role: string;
  duration: string;
  description: string;
  type: string;
}

interface GroupedExperience {
  slug: string;
  company: string;
  logo: string | null;
  location: string;
  isCurrent: boolean;
  roles: RoleInfo[];
}

export async function ExperienceSection() {
  const experiences = await reader.collections.experiences.all();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  };

  // Group experiences by company
  const groupedExperiences: Record<string, GroupedExperience> = {};

  experiences.forEach((experience) => {
    const company = experience.entry.company;
    const duration = experience.entry.toDate
      ? `${formatDate(experience.entry.fromDate!)} - ${formatDate(experience.entry.toDate!)}`
      : `${formatDate(experience.entry.fromDate!)} - Present`;

    const roleInfo: RoleInfo = {
      role: experience.entry.role,
      duration,
      description: experience.entry.description,
      type: experience.entry.type
    };

    if (!groupedExperiences[company]) {
      groupedExperiences[company] = {
        slug: experience.slug,
        company,
        logo: experience.entry.logo,
        location: experience.entry.location,
        isCurrent: experience.entry.isCurrent,
        roles: [roleInfo]
      };
    } else {
      groupedExperiences[company].roles.push(roleInfo);
    }
  });

  // Sort roles within each company by date (newest first)
  Object.values(groupedExperiences).forEach((groupedExp) => {
    groupedExp.roles.sort((a, b) => {
      const dateA = new Date(a.duration.split(" - ")[0]);
      const dateB = new Date(b.duration.split(" - ")[0]);
      return dateB.getTime() - dateA.getTime();
    });
  });

  // Convert to array and sort companies
  const sortedGroupedExperiences = Object.values(groupedExperiences).sort(
    (a, b) => {
      // Sort by isCurrent first (current jobs at top)
      if (a.isCurrent && !b.isCurrent) return -1;
      if (!a.isCurrent && b.isCurrent) return 1;

      // Then sort by most recent role's start date
      const dateA = new Date(a.roles[0].duration.split(" - ")[0]);
      const dateB = new Date(b.roles[0].duration.split(" - ")[0]);
      return dateB.getTime() - dateA.getTime();
    }
  );

  return (
    <section id="experiences">
      <div>
        <h3 className="text-xl font-semibold text-gray-100 sm:text-2xl">
          Experiences
        </h3>
        <div className="divide my-6 sm:my-10">
          {sortedGroupedExperiences.map((groupedExp, index) => (
            <div key={groupedExp.slug}>
              <ExperienceCard
                slug={groupedExp.slug}
                logo={groupedExp.logo}
                company={groupedExp.company}
                location={groupedExp.location}
                isCurrent={groupedExp.isCurrent}
                roles={groupedExp.roles}
              />
              {index < sortedGroupedExperiences.length - 1 && (
                <div className="my-[18px] h-px w-full bg-gray-800/70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
