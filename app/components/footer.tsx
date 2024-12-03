import { HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="mb-8 mt-16">
      <div className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>•</span>
          <span>
            Crafted with{" "}
            <HeartIcon className="inline-block h-4 w-4 fill-primary-400 text-primary-400" />{" "}
            using Next.js
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://twitter.com/yourusername"
            className="transition hover:text-primary-500"
          >
            Twitter
          </a>
          <a
            href="https://github.com/yourusername"
            className="transition hover:text-primary-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
