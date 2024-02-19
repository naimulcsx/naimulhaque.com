import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  List,
  ListItem,
  Group,
  Box,
  Anchor,
  Image,
} from "@mantine/core";
import { MetaFunction } from "@remix-run/node";

const hardwareItems = [
  {
    title: "MacBook Pro (14.2-inch, 2023)",
    description: "The heart of my workspace.",
  },
  {
    title: "Xiaomi Mi 34 Inch Curved Monitor",
    description: "WQHD display and a butter-smooth 144Hz refresh rate.",
  },
  {
    title: "Akko 3084B Plus Black & Gold keyboard",
    description: "Satisfying typing experience with Cherry Purple switches.",
  },
  {
    title: "Logitech Pebble M350",
    description: "The most silent mouse I've ever used.",
  },
  {
    title: "FIFINE K678 Condenser Mic",
    description: "A top-tier, budget-friendly USB microphone.",
  },
];

const deskSetupItems = [
  {
    title: "GRID Industrious Work Desk",
    description: "Offers a spacious and organized surface.",
  },
  {
    title: "GRID Pro Tasker Chair",
    description: "My ideal companion for focused tasks.",
  },
];

const softwareItems = [
  {
    title: "Rectangle",
    description: "Helps me to arrange windows with snap areas.",
  },
  {
    title: "Google Chrome",
    description: "My go-to web browser.",
  },
  {
    title: "Cloudflare WARP",
    description: "WARP client makes Internet faster and safer.",
  },
  {
    title: "Visual Studio Code",
    description: "My go-to code editor. It's the BEST. Change my mind.",
  },
  {
    title: "iTerm 2",
    description: "It's simple, I use it with Oh My Zsh.",
  },
  {
    title: "Docker",
    description: "I heavily use Docker for local development.",
  },
  {
    title: "Figma",
    description: "I use it for all of my design tasks.",
  },
  {
    title: "Notion",
    description: "For note-taking or planning, it's my preferred app.",
  },
];

export const meta: MetaFunction = () => {
  return [{ title: "Uses - Naimul Haque" }];
};

export default function UsagePage() {
  return (
    <Container size="lg" mt={{ base: 64 }} mb={{ base: 32, md: 64 }}>
      <Stack gap="xs">
        <Group gap="xs">
          <Title order={1} fz={{ base: 32, md: 36 }}>
            Uses
          </Title>
          <Box
            style={{
              height: 10,
              width: 10,
              background: "hsl(var(--primary))",
              borderRadius: "50%",
              position: "relative",
              top: 8,
            }}
          ></Box>
        </Group>
        <Title order={2} lh={1.6} fz={18} fw={300}>
          A collection of stuff I use for programming, web development in my
          everyday life. Make sure to check out{" "}
          <Anchor
            size="lg"
            underline="always"
            href="https://uses.tech"
            target="_blank"
          >
            uses.tech
          </Anchor>{" "}
          for a list of everyone's /uses pages!
        </Title>
        <Image
          mt="xl"
          src="/images/uses.jpg"
          style={{ borderRadius: "var(--mantine-radius-md)" }}
        />
      </Stack>

      <Grid mt="xl" gutter={{ base: 40 }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Title order={3}>Hardware</Title>
            <Text>
              My main hardware is a MacBook Pro (Apple M2 Pro 10-Core Chip, 16GB
              RAM), which connects to a docking station with a bigger screen
              when I'm at my desk.
            </Text>
            <List spacing="md">
              {hardwareItems.map((item, index) => (
                <ListItem key={index}>
                  <Text component="span" variant="nh-ui-strong" fw={600}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </ListItem>
              ))}
            </List>

            <Title order={3}>Desk Setup</Title>
            <List spacing="md">
              {deskSetupItems.map((item, index) => (
                <ListItem key={index}>
                  <Text component="span" variant="nh-ui-strong" fw={600}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Title order={3}>Workflow</Title>
            <Text>
              Workflow is the most important part of a developer's life. Here is
              a list of apps and tools I use on a daily basis.
            </Text>
            <List spacing="md">
              {softwareItems.map((item, index) => (
                <ListItem key={index}>
                  <Text component="span" variant="nh-ui-strong" fw={600}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
