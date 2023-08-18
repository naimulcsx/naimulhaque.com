"use client";

import { useEffect, useRef, useState } from "react";

export type TableOfContentProps = {
  headings: Array<{
    text: string;
    slug: string;
    level: number;
  }>;
};

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }
  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }
      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );
  return closest.index;
}

export function TableOfContents({ headings }: TableOfContentProps) {
  const [active, setActive] = useState(0);
  const slugs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    slugs.current = headings.map(
      (heading) => document.getElementById(heading.slug) as HTMLDivElement
    );
  }, [headings]);

  const handleScroll = () => {
    setActive(
      getActiveElement(slugs.current.map((d) => d.getBoundingClientRect()))
    );
  };

  useEffect(() => {
    setActive(
      getActiveElement(slugs.current.map((d) => d.getBoundingClientRect()))
    );
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <h6 className="mb-4 text-xl font-bold text-gray-300">
        Table of contents
      </h6>
      {headings.map((heading, idx) => {
        return (
          <div key={`#${heading.slug}`}>
            <a
              href={`#${heading.slug}`}
              style={{
                paddingLeft: heading.level <= 2 ? 16 : (heading.level - 1) * 16,
              }}
              className={`block border-l-2 py-1.5 text-base ${
                active === idx
                  ? "border-primary font-medium text-white"
                  : "border-gray-800 text-gray-400"
              }`}
            >
              {heading.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
