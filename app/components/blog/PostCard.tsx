import { Anchor, Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import { NavLink, useNavigate } from "@remix-run/react";
import { type Post } from "contentlayer/types";
import dayjs from "dayjs";

export function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        border: "1px solid",
        borderColor: "hsl(var(--border))",
        borderRadius: "var(--mantine-radius-md)",
      }}
    >
      <Anchor
        underline="never"
        component={NavLink}
        to={`/blog/${post.slug}`}
        unstable_viewTransition
      >
        {({ isTransitioning }) => {
          return (
            <Image
              src={`/images/blog/${post.featuredImage}`}
              alt=""
              style={{
                borderRadius: "var(--mantine-radius-md)",
                viewTransitionName: isTransitioning ? "post-image" : undefined,
              }}
            />
          );
        }}
      </Anchor>
      <Box
        p="lg"
        onClick={() => {
          navigate(`/blog/${post.slug}`, {
            unstable_viewTransition: true,
          });
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <Stack gap="sm" align="flex-start">
          <Title order={3} lh={1.25}>
            {post.title}
          </Title>
          <Group gap="xs">
            <Text>{dayjs(post.publishedAt).format("MMM DD, YYYY")}</Text>
            <Text>•</Text>
            <Text>{post.readingTime} min read</Text>
          </Group>
          <Text>{post.summary}</Text>
        </Stack>
      </Box>
    </Box>
  );
}
