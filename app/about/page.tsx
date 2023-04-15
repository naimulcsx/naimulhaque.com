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
        <h4>Key Technologies and Methodologies</h4>
        <ul className="font-light">
          <li>
            JavaScript (ES6/ES2015), TypeScript, React (Hook, Context API,
            Component Design Patterns), Redux, React Query, Jest, Mocha,
            Cypress, Vite, Vitest
          </li>
          <li>
            Next.js, Remix, Node.js (Express / NestJS), BullMQ, REST, GraphQL,
            TRPC, TypeORM, Prisma, PostgreSQL, Redis, Elasticsearch
          </li>
          <li>
            Linux CLI, Git, Github, Github Actions, Husky, Prettier, ESLint,
            Commitizen, CommitLint, Docker, Docker Compose, Docker Swarm
          </li>
          <li>
            DigitalOcean, AWS EC2, ECS, Fargate, S3, RDS, SQS, ECR, CodeCommit,
            CodeBuild, CodePipeline
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}
