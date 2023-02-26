import { PageTransition } from "~/components";

export const metadata = {
  title: "About - Naimul Haque",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <h1 className="font-semibold text-3xl md:text-4xl text-white mb-6">
        About
      </h1>
      <div className="prose md:prose-lg prose-invert prose-p:font-light space-y-6 prose-pre:bg-transparent prose-pre:border prose-pre:border-white/[0.15] prose-headings:font-semibold">
        <p>
          Hello, I&apos;m Naimul. Welcome to my personal site, which I maintain
          since 2017 mainly to keep notes of my study in Programming and other
          related stuffs.
        </p>
        <p>
          Over the years, I spent most of my time with the JavaScript /
          TypeScript ecosystem, primarily with React, Next.js and NestJS. I have
          a wide range of interests starting from Competitive Programming, Web
          Development, Software Engineering upto advanced fields like ML, AI,
          Data Science, Cloud Computing etc.
        </p>
        <p>
          These days I am exploring the vast area of software design and
          architecture and how to leverage cloud technologies to build scalable
          software solutions.
        </p>
        <h3>Expertise</h3>
        <ul>
          <li>Frontend Development (React, Next.js)</li>
          <li>RESTful API Development (NestJS / Express)</li>
          <li>Relational Database Design (PostgreSQL / MySQL)</li>
          <li>Algorithms and Data Structures</li>
        </ul>
      </div>
    </PageTransition>
  );
}
