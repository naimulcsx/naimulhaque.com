import {
  Box,
  Container,
  Flex,
  Grid,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
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
                <Flex mt="sm" wrap="wrap" gap={6}>
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
                <Flex mt="sm" wrap="wrap" gap={6}>
                  <UbuntuOriginal size={24} />
                  <BashPlain color="#fff" size={24} />
                  <GitOriginal size={24} />
                  <GithubactionsOriginal size={24} />
                  <DockerOriginal size={24} />
                  <PrometheusOriginal size={24} />
                  <PortainerOriginal size={24} />
                  <DigitaloceanOriginal size={24} />
                  <AmazonwebservicesPlainWordmark size={24} />
                </Flex>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
