import {
  Anchor,
  Box,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NavLink, useNavigate } from "@remix-run/react";
import { type Post } from "contentlayer/types";
import dayjs from "dayjs";

export function PostPreview({ post }: { post: Post }) {
  const navigate = useNavigate();
  return (
    <Grid key={post._id} gutter={{ base: "lg", md: "xl" }}>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Anchor
          underline="never"
          component={NavLink}
          to={`/blog/${post.slug}`}
          prefetch="intent"
          unstable_viewTransition
        >
          {({ isTransitioning }) => {
            return (
              <Image
                src={`/images/blog/${post.featuredImage}`}
                alt=""
                style={{
                  borderRadius: "var(--mantine-radius-md)",
                  viewTransitionName: isTransitioning
                    ? "post-image"
                    : undefined,
                }}
              />
            );
          }}
        </Anchor>
      </Grid.Col>
      <Grid.Col
        span={{ base: 12, md: 8 }}
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
          <Box>
            <Title order={3}>{post.title}</Title>
            <Group gap="xs">
              <Text size="sm">
                {dayjs(post.publishedAt).format("MMM DD, YYYY")}
              </Text>
              <Text>•</Text>
              <Text size="sm">{post.readingTime} min read</Text>
            </Group>
          </Box>
          <Text>{post.summary}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
