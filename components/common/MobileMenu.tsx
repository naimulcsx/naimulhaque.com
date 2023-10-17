"use client";

import { Variants, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Blog", "/blog"],
];

const sidebarVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

const list: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { y: 100 },
  show: { y: 0 },
};

export function MobileMenu({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="absolute top-0 right-0 left-0 z-40 min-h-screen bg-[#111]/80 p-8 backdrop-blur-md"
    >
      <div className="flex justify-end">
        <button onClick={() => setMenuOpen(false)} className="text-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-8"
      >
        {links.map(([name, href], i) => (
          <motion.li
            key={i}
            variants={listItem}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              bounce: 0,
              stiffness: 500,
              duration: 0.3,
              damping: 40,
            }}
          >
            <Link
              href={href}
              className="text-2xl font-semibold leading-6 text-slate-200"
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
