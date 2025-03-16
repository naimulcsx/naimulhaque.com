import { Briefcase, Building2, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

interface RoleInfo {
  role: string;
  duration: string;
  description: string;
  type: string;
}

interface ExperienceCardProps {
  slug: string;
  logo: string | null;
  company: string;
  location: string;
  isCurrent: boolean;
  roles: RoleInfo[];
}

export function ExperienceCard({
  slug,
  logo,
  company,
  location,
  roles
}: ExperienceCardProps) {
  const hasMultipleRoles = roles.length > 1;

  return (
    <div className={cn("group relative flex flex-col gap-4 sm:flex-row")}>
      {/* Company Logo and Mobile Timeline */}
      <div className="flex items-center sm:block">
        <div className="relative z-10 h-11 w-11 shrink-0 overflow-hidden rounded-md bg-gray-800">
          <img
            src={`/images/experiences/${slug}/${logo}`}
            alt={company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-4 h-px w-full bg-gray-700/50 group-last:hidden sm:hidden" />
      </div>

      {/* Content */}
      <div className="flex-1">
        {hasMultipleRoles ? (
          /* Multi-role layout - Company name first, then roles */
          <>
            {/* Company Info */}
            <div className="mb-3">
              <h2 className="text-lg font-semibold tracking-[-0.25px] text-gray-100">
                {company}
              </h2>
              <div className="mt-[2.5px] flex flex-row gap-2 md:gap-4">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-xs">{location}</span>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div className="relative pl-6">
              <div className="space-y-4">
                {roles.map((roleInfo, index) => (
                  <div key={index} className="relative space-y-1">
                    {/* Timeline circle for each role */}
                    <div className="absolute -left-6 top-2 h-[9px] w-[9px] rounded-full border-2 border-gray-700 bg-gray-700" />

                    {/* Timeline line segment - only show between circles (not after the last one) */}
                    {index < roles.length - 1 && (
                      <div className="absolute -left-[20px] top-[12px] h-[calc(100%+12px)] w-[1px] bg-gray-700/50" />
                    )}

                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-base font-medium text-gray-200">
                        {roleInfo.role}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {roleInfo.duration}
                      </span>
                    </div>

                    <div className="!mb-2 flex items-center gap-1.5 text-gray-500">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      <span className="text-xs">{roleInfo.type}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {roleInfo.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Single-role layout - Role title first, then company name */
          <>
            <div className="space-y-1">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold tracking-[-0.25px] text-gray-100">
                  {roles[0].role}
                </h3>
                <span className="text-xs text-gray-500">
                  {roles[0].duration}
                </span>
              </div>

              <div className="!mb-2 flex flex-row gap-2 md:gap-4">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Building2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-xs font-medium">{company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Briefcase className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-xs">{roles[0].type}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-xs">{location}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                {roles[0].description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
