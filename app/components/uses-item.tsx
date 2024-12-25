import { CardSpotlight } from "./card-spotlight";

interface UsesItemProps {
  title: string;
  description: string;
  icon?: string | null;
}

export const UsesItem = ({ title, description, icon }: UsesItemProps) => {
  return (
    <CardSpotlight>
      <div className="relative z-10 flex items-start gap-3">
        {icon ? (
          <img
            src={`/images/uses/${icon}`}
            alt=""
            className="mt-1 h-6 w-6 shrink-0 object-contain [filter:invert(1)]"
          />
        ) : (
          <div className="relative top-1 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
        )}
        <div>
          <h3 className="font-semibold text-gray-200">{title}</h3>
          <p className="mt-1 text-sm text-gray-300/90">{description}</p>
        </div>
      </div>
    </CardSpotlight>
  );
};
