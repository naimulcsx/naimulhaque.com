import { HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="mb-8 mt-16">
      <div className="flex flex-col items-center gap-4 text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span>
            &copy; {new Date().getFullYear()} Naimul Haque. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            target="_blank"
            href="https://twitter.com/naimulcsx"
            className="underline underline-offset-4 transition hover:text-primary-500"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="https://github.com/naimulcsx"
            className="underline underline-offset-4 transition hover:text-primary-500"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/naimulcsx/"
            className="underline underline-offset-4 transition hover:text-primary-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
