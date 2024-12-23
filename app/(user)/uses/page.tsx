import { Armchair, Monitor, Workflow } from "lucide-react";
import Markdown from "react-markdown";

import { UsesItem } from "@/components/uses-item";
import { reader } from "@/reader";

export const metadata = {
  title: "Uses — Naimul Haque"
};

export default async function UsesPage() {
  const uses = await reader.singletons.uses.read();

  if (!uses) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container py-8 sm:py-12 lg:py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
          {uses.title}
        </h1>
        <Markdown className="prose prose-invert mx-auto text-center prose-p:text-sm prose-p:leading-6 prose-p:text-gray-300 prose-p:md:text-base prose-p:md:leading-7">
          {uses.description}
        </Markdown>
      </div>

      <div className="space-y-16">
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Monitor className="h-6 w-6 text-gray-200" />
            <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Hardware
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uses.items
              .filter((item) => item.category === "Hardware")
              .map((item, index) => (
                <UsesItem
                  key={index}
                  title={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-3">
            <Armchair className="h-6 w-6 text-gray-200" />
            <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Desk Setup
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uses.items
              .filter((item) => item.category === "Desk Setup")
              .map((item, index) => (
                <UsesItem
                  key={index}
                  title={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-3">
            <Workflow className="h-6 w-6 text-gray-200" />
            <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Workflow
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uses.items
              .filter((item) => item.category === "Workflow")
              .map((item, index) => (
                <UsesItem
                  key={index}
                  title={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
