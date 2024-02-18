import {
  Anchor,
  Badge,
  Box,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NavLink, useNavigate } from "@remix-run/react";
import { type Post } from "contentlayer/types";
import { format } from "date-fns";

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
            <Badge>{format(post.publishedAt, "PPP")}</Badge>
            <Badge>{post.readingTime} min read</Badge>
          </Group>
          <Text>{post.summary}</Text>
        </Stack>
      </Box>
    </Box>
  );
}
