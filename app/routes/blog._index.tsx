import { Box, Container, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { allPosts } from "contentlayer/generated";
import { type Post } from "contentlayer/types";
import { PostCard } from "~/components/blog/PostCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - Naimul Haque" },
    {
      name: "description",
      content:
        "Delve into the realm of software engineering with insightful articles on Naimul Haque's blog. Unlock the latest trends, expert perspectives, and problem-solving approaches, guiding you through the landscape of programming, software engineering and web development.",
    },
  ];
};

export async function loader() {
  return json({ allPosts });
}

export default function BlogListingPage() {
  const { allPosts } = useLoaderData<typeof loader>();
  return (
    <Container>
      <Box mt={{ base: 64 }} mb={{ base: 32 }}>
        <Stack gap="xs">
          <Group gap="xs">
            <Title order={1} fz={{ base: 36, md: 40 }}>
              Blog
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
          <Text size="lg">
            Tech blog &mdash; my thoughts, stories, and knowledge, all in one
            place. Dive into a variety of topics and explore the world of
            Programming and Web Development.
          </Text>
        </Stack>
      </Box>
      <Grid gutter="xl">
        {allPosts.map((post) => {
          return (
            <Grid.Col key={post._id} span={{ base: 12, md: 6 }}>
              <PostCard key={post._id} post={post as Post} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
