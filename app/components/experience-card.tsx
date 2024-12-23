import { Briefcase, Building2, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  slug: string;
  logo: string | null;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  type: string;
  isCurrent: boolean;
}

export function ExperienceCard({
  slug,
  logo,
  company,
  role,
  duration,
  location,
  description,
  type
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 pb-6 sm:flex-row md:pb-10"
      )}
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-12 hidden h-[calc(100%-32px)] w-[2px] bg-gray-700/50 group-last:hidden sm:block" />

      {/* Company Logo and Mobile Timeline */}
      <div className="flex items-center sm:block">
        <div className="relative z-10 h-12 w-12 shrink-0 overflow-hidden rounded-md bg-gray-800">
          <img
            src={`/images/experiences/${slug}/${logo}`}
            alt={company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-4 h-px w-full bg-gray-700/50 group-last:hidden sm:hidden" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <h3 className="text-lg font-semibold text-gray-200">{role}</h3>
          <span className="text-xs text-gray-500 sm:text-sm">{duration}</span>
        </div>

        <div className="flex flex-row gap-2 md:gap-4">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Building2 className="h-4 w-4 shrink-0" />
            <span className="text-xs sm:text-sm">{company}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Briefcase className="h-4 w-4 shrink-0" />
            <span className="text-xs sm:text-sm">{type}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-xs sm:text-sm">{location}</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </div>
  );
}
