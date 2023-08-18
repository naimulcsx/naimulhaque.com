import { Container } from "~/components/common";

export const metadata = {
  title: "About - Naimul Haque",
};

export default function AboutPage() {
  return (
    <section className="mb-16 mt-32 lg:mb-20 lg:mt-40">
      <Container>
        <h1 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
          About
        </h1>
        <div className="prose prose-invert space-y-6 md:prose-lg prose-headings:font-semibold prose-p:font-light prose-pre:border prose-pre:border-white/[0.15] prose-pre:bg-transparent">
          <p>
            Hello, I&apos;m Naimul. Welcome to my personal site, which I
            maintain since 2017 mainly to keep notes of my study in Programming
            and other related stuffs.
          </p>
          <p>
            I spent most of my time with the JavaScript / TypeScript ecosystem,
            primarily with React, Next.js and NestJS. I have a wide range of
            interests starting from Competitive Programming, Web Development,
            Software Engineering upto advanced fields like ML, AI, Data Science,
            Cloud Computing etc.
          </p>
          <p>
            These days I am exploring the vast area of software design and
            architecture and how to leverage cloud technologies to build
            scalable software solutions.
          </p>
        </div>
      </Container>
    </section>
  );
}
