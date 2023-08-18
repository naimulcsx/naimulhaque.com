import Image from "next/image";
import { IconBriefcase, IconExternalLink } from "./Icons";
import { Highlight } from "./Highlight";
import { Container } from "./Container";

export function AboutNew() {
  return (
    <section className="relative mb-16 mt-36 lg:mb-20 lg:mt-44">
      <Container>
        <div className="space-y-6 leading-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              <span className="wave">👋</span> Hi, I&apos;m Naimul
            </h2>
            <h4 className="text-2xl font-light text-gray-300 lg:text-[30px]">
              A passionate Full-stack{" "}
              <span className="relative z-10 font-semibold text-primary underline underline-offset-4">
                Software Engineer
              </span>
            </h4>
          </div>
          <p className="">
            I am a software engineer specializing in full-stack software
            development, particularly using React, Node.js and TypeScript. I am
            passionate about <Highlight>system design</Highlight>, crafting{" "}
            <Highlight>user interfaces</Highlight>, and writing{" "}
            <Highlight>clean code.</Highlight>
          </p>
          <p>
            In my free time, I like developing side projects, learning new
            technologies and writing articles. This is my place for my Thoughts
            and Reflections. Happy reading! 🥂
          </p>
          <div className="flex flex-col gap-[6px] text-gray-300">
            <a href="" className="font-medium underline underline-offset-4">
              🛠️ What have I built?
            </a>
            <a href="" className="font-medium underline underline-offset-4">
              👨‍💻 Snippets collection
            </a>
            <a href="" className="font-medium underline underline-offset-4">
              🧐 More about me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function About() {
  return (
    <section className="relative bg-indigo-50 pb-20 pt-24 lg:pt-40">
      {/* <Image
        fill
        src="/images/hero-bg-light.webp"
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        alt=""
      /> */}
      <Container>
        <div className="relative flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="order-2 grow lg:order-1">
            <div className="space-y-6 leading-8">
              <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                <span className="wave">👋</span> Hi, I&apos;m Naimul
              </h2>
              <h4 className="text-2xl font-light lg:text-[30px]">
                A passionate Full-stack{" "}
                <span className="relative z-10 font-semibold text-indigo-600 underline underline-offset-4">
                  Software Engineer
                </span>
              </h4>
              <p className="">
                I am a software engineer specializing in full-stack software
                development, particularly using React, Node.js and TypeScript. I
                am passionate about <Highlight>system design</Highlight>,
                crafting <Highlight>user interfaces</Highlight>, and writing{" "}
                <Highlight>clean code.</Highlight>
              </p>
              <p>
                In my free time, I like developing side projects, learning new
                technologies and writing articles. This is my place for my
                Thoughts and Reflections. Happy reading! 🥂
              </p>
              <div className="flex flex-col gap-[6px] text-dark">
                <a href="" className="font-medium underline">
                  🛠️ What have I built?
                </a>
                <a href="" className="font-medium underline">
                  👨‍💻 Snippets collection
                </a>
                <a href="" className="font-medium underline">
                  🧐 More about me
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 shrink-0 basis-[312px] lg:order-2">
            <div className="overflow-hidden rounded-xl bg-white p-8 shadow-md shadow-indigo-900/[0.1] shadow-slate-700/10">
              <Image
                src="/images/naimul-haque.jpg"
                className="mx-auto h-[160px] w-[160px] rounded-full"
                alt="Naimul Haque"
                width={256}
                height={256}
                quality={100}
              />
              <div className="mt-[22px]">
                <h2 className="text-xl font-semibold text-gray-900">
                  AKM NAIMUL HAQUE
                </h2>
                <p className="text-lg font-medium text-indigo-600">
                  Software Engineer
                </p>
                <div className="mt-5 space-y-2 text-gray-700">
                  <div className="flex items-center gap-[10px]">
                    <IconBriefcase />
                    <span>NETMARK</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <IconExternalLink />
                    <a href="https://github.com/naimulcsx">gh/naimulcsx</a>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <IconExternalLink />
                    <a href="https://www.linkedin.com/in/naimulcsx/">
                      in/naimulcsx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
