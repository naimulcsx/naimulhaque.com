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
        position: item.y
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
    setActive(0);
    setTimeout(() => {
      slugs.current = headings.map(
        (heading) => document.getElementById(heading.slug) as HTMLDivElement
      );
    }, 400);
  }, [headings]);

  const handleScroll = () => {
    setActive(
      getActiveElement(slugs.current.map((d) => d.getBoundingClientRect()))
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {headings.map((heading, idx) => {
        const isActive = active === idx;
        return (
          <div key={`#${heading.slug}`} className="py-1">
            <a
              className="py-2 text-sm"
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#" + heading.slug);
                if (element) {
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    -100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  window.history.pushState(
                    null,
                    "",
                    window.location.pathname + "#" + heading.slug
                  );
                }
              }}
              style={{
                paddingLeft: heading.level <= 2 ? 16 : (heading.level - 1) * 16,
                borderLeft: "2px solid",
                borderColor: isActive
                  ? "var(--primary-400)"
                  : "var(--slate-700)",
                color: isActive ? "var(--white)" : "var(--slate-500)"
              }}
            >
              {heading.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
