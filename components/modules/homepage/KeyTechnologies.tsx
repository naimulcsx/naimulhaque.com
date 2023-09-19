import {
  AmazonwebservicesPlainWordmark,
  BashPlain,
  DigitaloceanOriginal,
  DockerOriginal,
  ElasticsearchOriginal,
  ExpressOriginal,
  GitOriginal,
  GithubactionsOriginal,
  JestPlain,
  MongodbOriginal,
  NestjsPlain,
  NextjsOriginal,
  NodejsOriginal,
  PortainerOriginal,
  PostgresqlOriginal,
  PrometheusOriginal,
  ReactOriginal,
  RedisOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  UbuntuOriginal,
} from "devicons-react";

import { Container } from "~/components/common/Container";

export function KeyTechnologies() {
  return (
    <section className="my-16 lg:my-20">
      <Container>
        <h1 className="mb-8 text-2xl font-bold text-neutral-200 md:text-3xl">
          Key Technologies
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-md bg-card/50 p-6 lg:p-7">
            <h4 className="text-2xl font-medium text-neutral-200">
              Full Stack
            </h4>
            <p className="mt-2 text-base">
              TypeScript, React, Next.js, Node.js (Express / NestJS), BullMQ,
              REST, GraphQL, PostgreSQL, MongoDB, Redis, Elasticsearch
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <TypescriptOriginal size={24} />
              <ReactOriginal size={24} />
              <NextjsOriginal fill="#fff" size={24} />
              <TailwindcssOriginal size={24} />
              <JestPlain size={24} />
              <NodejsOriginal size={24} />
              <ExpressOriginal fill="#fff" size={24} />
              <NestjsPlain size={24} />
              <PostgresqlOriginal size={24} />
              <MongodbOriginal size={24} />
              <RedisOriginal size={24} />
              <ElasticsearchOriginal size={24} />
            </div>
          </div>
          <div className="rounded-md bg-card/50 p-6 lg:p-7">
            <h4 className="text-2xl font-medium text-neutral-200">
              Cloud and DevOps
            </h4>
            <p className="mt-2 text-base">
              Linux CLI, Git, Github, Github Actions, Husky, Prettier, ESLint,
              Commitizen, CommitLint, Docker, Prometheus, Node Exporter, Grafana
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <UbuntuOriginal size={24} />
              <BashPlain color="#fff" size={24} />
              <GitOriginal size={24} />
              <GithubactionsOriginal size={24} />
              <DockerOriginal size={24} />
              <PrometheusOriginal size={24} />
              <PortainerOriginal size={24} />
              <DigitaloceanOriginal size={24} />
              <AmazonwebservicesPlainWordmark size={24} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
