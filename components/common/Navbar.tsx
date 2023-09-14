"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

const links = [
  ["Home", "/"],
  ["Uses", "/uses"],
  ["Snippet", "/snippets"],
  ["Blog", "/blog"],
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  let height = useMotionValue(96);
  let [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      setActive(current > 50);
      let diff = current - scrollY.getPrevious();
      if (diff > 0) {
        height.set(Math.max(80, height.get() - diff));
      } else {
        height.set(Math.min(90, height.get() - diff));
      }
    });
  }, []); // eslint-disable-line

  return (
    <motion.header
      style={{ height }}
      transition={{ delay: 0 }}
      className={`fixed top-0 left-0 right-0 z-20 h-20 border-b bg-dark/50 transition-all duration-300 ${
        active ? "border-white/10 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center justify-between text-xl font-medium">
            <Link
              className="font-heading flex items-center text-base md:text-lg"
              href="/"
            >
              <Image
                src="/images/naimul-haque.jpg"
                className="mx-auto h-12 w-12 rounded-full"
                alt="Naimul Haque"
                width={256}
                height={256}
                quality={100}
              />
              <div className="ml-4 lg:block">
                <span className="text-xl font-bold text-neutral-200">
                  Naimul Haque
                </span>
              </div>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M3 6h18M3 18h18"
                ></path>
              </svg>
            </button>
            <AnimatePresence>
              {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
            </AnimatePresence>
          </div>
          <ul className="hidden lg:flex">
            {links.map(([text, href], idx) => {
              const active =
                (pathname?.includes(href) && href !== "/") || pathname === href;
              return (
                <li key={idx}>
                  <Link
                    href={href}
                    className={clsx(
                      "link-underline relative rounded px-3 py-2 text-base font-medium tracking-tighter md:px-4",
                      active ? "text-neutral-200" : ""
                    )}
                  >
                    {text}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-px h-[2px] bg-primary"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </motion.header>
  );
}
