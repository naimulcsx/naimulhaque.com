import {
  Box,
  Container,
  Flex,
  Grid,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

import {
  IconUbuntu,
  IconAmazonWebServices,
  IconDigitalOcean,
  IconDocker,
  IconGit,
  IconGithub,
  IconPrometheus,
  IconTypeScript,
  IconReact,
  IconNext,
  IconRemix,
  IconNode,
  IconTailwind,
  IconExpress,
  IconNestJs,
  IconPostgres,
  IconMongo,
} from "~/assets";

const cloudAndDevopsItems = [
  {
    label: "Ubuntu",
    Icon: IconUbuntu,
  },
  {
    label: "Git",
    Icon: IconGit,
  },
  {
    label: "GitHub",
    Icon: IconGithub,
  },
  {
    label: "Docker",
    Icon: IconDocker,
  },
  {
    label: "Prometheus",
    Icon: IconPrometheus,
  },

  {
    label: "DigitalOcean",
    Icon: IconDigitalOcean,
  },
  {
    label: "Amazon Web Services",
    Icon: IconAmazonWebServices,
  },
];

const devItems = [
  {
    label: "TypeScript",
    Icon: IconTypeScript,
  },
  {
    label: "React",
    Icon: IconReact,
  },
  {
    label: "Next.js",
    Icon: IconNext,
  },
  {
    label: "Remix",
    Icon: IconRemix,
  },
  {
    label: "Tailwind CSS",
    Icon: IconTailwind,
  },
  {
    label: "Node.js",
    Icon: IconNode,
  },
  {
    label: "Express.js",
    Icon: IconExpress,
  },
  {
    label: "NestJS",
    Icon: IconNestJs,
  },
  {
    label: "PostgreSQL",
    Icon: IconPostgres,
  },
  {
    label: "MongoDB",
    Icon: IconMongo,
  },
];

export function Technologies() {
  return (
    <Box mb={{ base: 48 }}>
      <Container>
        <Title order={3} fz={{ base: 24, md: 30 }}>
          Key Technologies
        </Title>
        <Grid mt="xl" gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper p="lg">
              <Stack gap="xs">
                <Title order={3} fz={{ base: 20, md: 24 }}>
                  Full Stack
                </Title>
                <Text>
                  TypeScript, React, Next.js, Node.js (Express / NestJS),
                  BullMQ, REST, GraphQL, PostgreSQL, MongoDB, Redis,
                  Elasticsearch
                </Text>
                <Flex mt="sm" wrap="wrap" gap="xs">
                  {devItems.map((item, index) => {
                    return (
                      <Tooltip key={index} label={item.label}>
                        <Box>
                          <item.Icon size={24} />
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Flex>
              </Stack>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper p="lg">
              <Stack gap="xs">
                <Title order={3} fz={{ base: 20, md: 24 }}>
                  Cloud & DevOps
                </Title>
                <Text>
                  Git, Linux CLI, Docker, DigitalOcean, Caprover, NGINX,
                  CertBot, AWS (EC2, VPC, S3, RDS, ECS), Prometheus, Grafana,
                  Loki
                </Text>
                <Flex mt="sm" wrap="wrap" gap="xs">
                  {cloudAndDevopsItems.map((item, index) => {
                    return (
                      <Tooltip key={index} label={item.label}>
                        <Box>
                          <item.Icon size={24} />
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Flex>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
