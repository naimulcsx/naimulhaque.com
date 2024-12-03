import { Briefcase, Building2, MapPin } from "lucide-react";

interface ExperienceCardProps {
  slug: string;
  logo: string | null;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  type: string;
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
    <div className="relative flex flex-col sm:flex-row gap-4 pb-10 group">
      {/* Timeline line */}
      <div className="absolute hidden sm:block left-6 top-12 h-[calc(100%-32px)] w-[2px] bg-gray-700/50 group-last:hidden" />

      {/* Company Logo and Mobile Timeline */}
      <div className="flex items-center sm:block">
        <div className="relative z-10 h-12 w-12 overflow-hidden rounded-md bg-gray-800 shrink-0">
          <img
            src={`/images/experiences/${slug}/${logo}`}
            alt={company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-px w-full sm:hidden ml-4 bg-gray-700/50 group-last:hidden" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="font-semibold text-lg text-gray-200">{role}</h3>
          <span className="text-xs sm:text-sm text-gray-500">{duration}</span>
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

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
