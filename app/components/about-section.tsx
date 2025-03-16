"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { CardBody, CardContainer, CardItem } from "./3d-card";

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[url('/bg_about.png')] bg-cover bg-center bg-no-repeat py-14 md:py-20">
      {/* <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-gray-900/80 [mask-image:radial-gradient(transparent,white)]" />
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-gray-900 from-5% to-transparent" /> */}

      {/* <Boxes /> */}

      <div className="container relative z-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="order-2 w-full lg:order-1 lg:w-[69%]">
            <motion.h1 className="max-w-xl text-3xl font-semibold md:text-4xl dark:text-gray-100">
              <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">
                👋
              </span>{" "}
              Hello! I am Naimul
            </motion.h1>
            <motion.h2 className="mt-4 text-xl tracking-[-1px] text-gray-200 md:text-2xl">
              Helping Startups Build & Scale SaaS Products with{" "}
              <span className="relative -z-10 bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text font-bold text-transparent">
                TypeScript, AI & Cloud
              </span>{" "}
              🚀
            </motion.h2>
            <motion.p className="mt-6 text-sm leading-6 text-gray-300/90 md:mt-8 md:text-base md:leading-7">
              I am a Software Engineer with over 4 years of experience in
              building apps with JavaScript / TypeScript. In my past, I used to
              be a{" "}
              <span className="border-b border-gray-200/20 text-gray-200">
                competitive programmer
              </span>
              , that heled me grow my problem solving skill — the ability I now
              bring into crafting{" "}
              <span className="border-b border-gray-200/20 text-gray-200">
                efficient systems
              </span>{" "}
              and{" "}
              <span className="border-b border-gray-200/20 text-gray-200">
                software products
              </span>
              .
            </motion.p>
            <motion.p className="mt-4 text-sm leading-6 text-gray-300/90 md:text-base md:leading-7">
              I enjoy exploring new technologies, developments in AI, and diving
              into challenges that inspire growth. This is my place for my
              Thoughts and Reflections. Happy reading! 🥂
            </motion.p>

            <ul className="mt-6 space-y-2 text-sm text-gray-300/90 md:text-base">
              <li>
                <Link
                  href="https://github.com/naimulcsx"
                  target="_blank"
                  className="border-b border-gray-200/20 text-gray-200"
                >
                  🛠️ What have I built?
                </Link>
              </li>
              <li>
                <Link
                  href="/snippets"
                  className="border-b border-gray-200/20 text-gray-200"
                >
                  👨‍💻 Snippets collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="border-b border-gray-200/20 text-gray-200"
                >
                  🧐 More about me
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-1 hidden w-full sm:block lg:order-2 lg:w-[31%]">
            <AuthorCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorCard() {
  return (
    <CardContainer>
      <CardBody className="max-w-auto mx-auto w-full rounded-2xl border border-black/[0.1] p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="relative flex flex-col items-center text-center">
          <CardItem translateZ="20">
            <Image
              width={256}
              height={256}
              quality={90}
              src="/author.jpg"
              className="mx-auto mb-4 w-24 rounded-full border-4 border-gray-200/20 md:w-32"
              alt="Naimul Haque"
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-lg font-semibold tracking-wide dark:text-gray-200"
          >
            Naimul Haque
          </CardItem>
          <CardItem translateZ="40">
            <p className="mt-2 text-sm text-gray-300/90">
              Software Engineer, Competitive Programmer and AI Enthusiast
            </p>
          </CardItem>

          <CardItem translateZ="30" className="w-full">
            <a
              href="https://github.com/naimulcsx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-xs text-gray-200 transition-colors hover:bg-gray-700 md:text-sm"
            >
              <svg
                className="h-3 w-3 md:h-4 md:w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Github
            </a>
          </CardItem>

          <CardItem translateZ="30" className="w-full">
            <a
              href="https://www.linkedin.com/in/naimulcsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-xs text-gray-200 transition-colors hover:bg-gray-700 md:text-sm"
            >
              <svg
                className="h-3 w-3 md:h-4 md:w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
