import { Box, Container, Stack, Title } from "@mantine/core";
import { useLoaderData } from "@remix-run/react";
import { type loader } from "~/routes/_index";
import { PostPreview } from "../blog/PostPreview";
import { type Post } from "contentlayer/types";

export function LatestBlog() {
  const { allPosts } = useLoaderData<typeof loader>();
  return (
    <Box component="section" my={{ base: 48 }}>
      <Container>
        <Title order={3} fz={{ base: 24, md: 30 }}>
          Latest from the Blog
        </Title>
        <Stack gap="xl" mt="xl">
          {allPosts.map((post) => {
            return <PostPreview key={post._id} post={post as Post} />;
          })}
        </Stack>
      </Container>
    </Box>
  );
}
