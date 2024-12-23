import {
  siAmazonwebservices,
  siAwselasticloadbalancing,
  siAwslambda,
  siDocker,
  siElasticsearch,
  siExpress,
  siGit,
  siGithub,
  siGrafana,
  siGraphql,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPrometheus,
  siReact,
  siRedis,
  siTypescript
} from "simple-icons";

const fullStackTech = [
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siNestjs,
  siPostgresql,
  siMongodb,
  siRedis,
  siElasticsearch,
  siGraphql
];

const cloudDevOpsTech = [
  siAmazonwebservices,
  siGit,
  siGithub,
  siDocker,
  siPrometheus,
  siGrafana,
  siNginx,
  siAwselasticloadbalancing,
  siAwslambda
];

export function KeyTechSection() {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <h3 className="text-xl font-semibold text-gray-100 md:text-2xl">
          Key Technologies
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
          <div className="mt-4 space-y-2 rounded-lg border border-primary-400/20 bg-primary-400/5 p-3 md:mt-6 md:p-6">
            <h4 className="text-base font-semibold text-gray-200 md:text-lg">
              Full Stack
            </h4>
            <p className="text-xs leading-5 text-gray-400 md:text-sm md:leading-6">
              TypeScript, React, Next.js, Node.js, Express.js, NestJS, REST,
              GraphQL, PostgreSQL, MongoDB, Redis, BullMQ, RabbitMQ,
              Elasticsearch
            </p>
            <div className="flex flex-wrap gap-2 pt-2 md:gap-3 md:pt-3">
              {fullStackTech.map((item, index) => {
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.svg }}
                    className="h-4 w-4 fill-slate-300 md:h-5 md:w-5"
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-6 space-y-2 rounded-lg border border-primary-400/20 bg-primary-400/5 p-4 md:p-6">
            <h4 className="text-lg font-semibold text-gray-200">
              Cloud & DevOps
            </h4>
            <p className="text-sm leading-6 text-gray-400">
              AWS (VPC, EC2, S3, RDS, ECS, CodeCommit, CodeBuild, CodePipeline),
              UNIX, Bash, Git, Github, Docker, NGINX, Certbot, Caprover,
              Prometheus, Grafana, Loki
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              {cloudDevOpsTech.map((item, index) => {
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.svg }}
                    className="h-5 w-5 fill-slate-300"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
