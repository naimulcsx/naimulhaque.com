"use client";

import Link from "next/link";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
];

export function Navbar() {
  const { scrollY } = useScroll();
  let height = useMotionValue(80);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let diff = current - scrollY.getPrevious();
      if (diff > 0) {
        height.set(Math.max(60, height.get() - diff));
      } else {
        height.set(Math.min(80, height.get() - diff));
      }
    });
  }, []); // eslint-disable-line

  return (
    <motion.header
      style={{ height }}
      transition={{ delay: 1 }}
      className="fixed inset-x-0 h-20 border-b bg-white"
    >
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6">
        <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
          <h2 className="font-heading text-xl">
            <span className="text-gray-900">&gt;</span>{" "}
            <span className="text-blue-500">~/naimul</span>{" "}
            <span className="animate-ping">_</span>
          </h2>
        </div>
        <ul className="flex">
          {links.map(([text, href], idx) => {
            return (
              <li key={idx}>
                <Link
                  href={href}
                  className="link-underline rounded px-6 py-3 hover:bg-gray-100"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.header>
  );
}
