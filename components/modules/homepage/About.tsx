import { Highlight } from "~/components/common/Highlight";
import { Container } from "~/components/common/Container";

export function About() {
  return (
    <section className="relative mb-16 mt-36 lg:mb-20 lg:mt-44">
      <Container>
        <div className="space-y-6 leading-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-neutral-200 lg:text-5xl">
              <span className="wave">👋</span> Hi, I&apos;m Naimul
            </h2>
            <h4 className="text-2xl font-light text-neutral-300 lg:text-[30px]">
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
          <div className="flex flex-col gap-[6px] text-neutral-300">
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
