import {
  Badge,
  Box,
  Container,
  Grid,
  Image,
  Stack,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { allPosts } from "contentlayer/generated";
import { Post } from "contentlayer/types";
import { TableOfContents } from "~/components/blog/TableOfContents";
import { throwNotFoundException } from "~/utils/http-exceptions";
import MDXRenderer from "~/components/mdx/MDXRenderer";
import { format } from "date-fns";

export const meta = ({ data }: { data: { post: Post } }) => {
  return [
    { title: `${data.post.title} - Naimul Haque` },
    {
      name: "description",
      content: data.post.summary,
    },
  ];
};

export function loader({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    throw throwNotFoundException();
  }
  return json({ post });
}

function BlogPostPage() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <>
      <Container mt={{ base: 64 }} mb={{ base: 32, md: 64 }}>
        <Container
          mb="xl"
          size="md"
          style={{ margin: "0 auto", textAlign: "center" }}
          px={0}
        >
          <Stack gap={24}>
            <Badge size="md" mx="auto">
              {format(post.publishedAt, "PPP")}
            </Badge>
            <Title
              className="gradient-text"
              order={1}
              fz={{ base: 32, md: 48 }}
              lh={{ base: 1.115, md: 1 }}
            >
              {post.title}
            </Title>
            <Title
              order={2}
              fz={18}
              fw={300}
              lh={1.4}
              c="hsl(var(--foreground))"
            >
              {post.summary}
            </Title>
          </Stack>
        </Container>
        <Box mt="sm">
          <Image
            src={`/images/blog/${post.featuredImage}`}
            alt=""
            style={{
              viewTransitionName: "post-image",
              borderRadius: "var(--mantine-radius-md)",
            }}
          />
        </Box>
      </Container>
      <Container mb="xl">
        <Grid style={{ overflow: "unset" }} gutter="xl">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <TypographyStylesProvider>
              <MDXRenderer code={post.body.code} />
            </TypographyStylesProvider>
          </Grid.Col>
          <Grid.Col
            visibleFrom="md"
            span={4}
            style={{ alignSelf: "start", position: "sticky", top: 80 }}
          >
            <aside>
              <TableOfContents headings={post.headings} />
            </aside>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default BlogPostPage;
