"use client";

import Link from "next/link";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const links = [
  ["Home", "/"],
  ["Blog", "/blog"],
  ["About", "/about"],
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  let height = useMotionValue(72);
  let [active, setActive] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      setActive(current > 100);
      let diff = current - scrollY.getPrevious();
      if (diff > 0) {
        height.set(Math.max(64, height.get() - diff));
      } else {
        height.set(Math.min(72, height.get() - diff));
      }
    });
  }, []); // eslint-disable-line

  return (
    <motion.header
      style={{ height }}
      transition={{ delay: 0 }}
      className={`fixed inset-x-0 h-20 text-white z-20 transition-all border-b duration-300 ${
        active
          ? "bg-[#1C1C22]/50 backdrop-blur-md border-white/5"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6 sm:px-8 md:px-16">
        <div className="flex items-center justify-between text-xl font-medium">
          <Link
            className="flex items-center font-heading text-base md:text-lg"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 rounded-lg"
            />
            <div className="ml-2">
              <span className="relative bottom-px text-emerald-500">
                ~/naimul
              </span>
              <span className="ml-1 animate-ping">_</span>
            </div>
          </Link>
        </div>
        <ul className="flex">
          {links.map(([text, href], idx) => {
            return (
              <li key={idx}>
                <Link
                  href={href}
                  className={clsx(
                    "link-underline text-[15px] relative rounded px-3 md:px-4 py-3 text-light hover:text-emerald-400 transition duration-300",
                    pathname === href ? "text-emerald-400" : ""
                  )}
                >
                  {text}
                  {pathname === href && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.header>
  );
}
