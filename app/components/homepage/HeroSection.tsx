import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { TextHightlight } from "~/components/common/TextHighlight";

export function HeroSection() {
  return (
    <Box
      component="section"
      py={{ base: 48, md: 80 }}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container style={{ position: "relative" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 36, md: 48 }}
          align="flex-start"
        >
          <AuthorCard />
          <AuthorAbout />
        </Flex>
      </Container>
    </Box>
  );
}

function AuthorCard() {
  return (
    <Box
      maw={{ base: "100%", md: 290 }}
      p="lg"
      style={{
        position: "relative",
        borderRadius: "var(--mantine-radius-md)",
        textAlign: "center",
        overflow: "hidden",
        flexShrink: 0,
        flexGrow: 0,
        border: "1px solid hsl(var(--border))",
      }}
    >
      <Image
        src="/images/cover.png"
        p={-24}
        h={128}
        style={{
          position: "absolute",
          top: -20,
          left: 0,
          right: 0,
        }}
      />
      <Stack style={{ position: "relative" }}>
        <Image
          mt={20}
          src="/images/naimul-haque.jpg"
          style={{
            borderRadius: "50%",
            width: 120,
            margin: "0 auto",
          }}
        />

        <Flex direction="column">
          <Title order={3}>Naimul Haque</Title>
          <Text size="sm">
            Software Engineer, Competitive Programmer and DevOps Enthusiast
          </Text>

          <Stack gap="xs" mt="sm">
            <Button
              size="xs"
              component={Link}
              to="https://github.com/naimulcsx"
              target="_blank"
              variant="nh-ui-outline"
              leftSection={<IconBrandGithub size={16} />}
              fullWidth
            >
              Github
            </Button>
            <Button
              size="xs"
              component={Link}
              to="https://www.linkedin.com/in/naimulcsx/"
              target="_blank"
              variant="nh-ui-outline"
              leftSection={<IconBrandLinkedin size={16} />}
              fullWidth
            >
              LinkedIn
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}

function AuthorAbout() {
  return (
    <Stack gap="lg">
      <Group>
        <Text
          style={{ color: "hsl(var(--foreground))" }}
          component="span"
          lh={1}
          fz={{ base: 32 }}
          role="img"
        >
          👋
        </Text>
        <Title order={1} fz={{ base: 32, md: 36 }}>
          Hi, I'm Naimul
        </Title>
      </Group>
      <Title order={3} fw={400} fz={{ base: 24, md: 28 }}>
        A passionate Full-Stack{" "}
        <span
          style={{
            fontWeight: 700,
            borderBottom: "2px solid hsl(var(--primary))",
          }}
        >
          Software Engineer
        </span>
      </Title>
      <Text>
        I am a software engineer specializing in full-stack software
        development, particularly using React, Node.js and TypeScript. I am
        passionate about <TextHightlight>backend engineering</TextHightlight>,{" "}
        <TextHightlight>system design</TextHightlight>, crafting{" "}
        <TextHightlight>user interfaces</TextHightlight>, and writing{" "}
        <TextHightlight>clean code</TextHightlight>.
      </Text>
      <Text>
        In my free time, I like developing side projects, learning new
        technologies and writing articles. This is my place for my Thoughts and
        Reflections. Happy reading! 🥂
      </Text>
      <Stack gap={4}>
        <Anchor underline="always" style={{ textUnderlineOffset: 2 }}>
          🛠️ What have I built?
        </Anchor>
        <Anchor underline="always" style={{ textUnderlineOffset: 2 }}>
          👨‍💻 Snippets collection
        </Anchor>
        <Anchor underline="always" style={{ textUnderlineOffset: 2 }}>
          🧐 More about me
        </Anchor>
      </Stack>
    </Stack>
  );
}
