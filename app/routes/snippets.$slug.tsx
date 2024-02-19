import {
  Badge,
  Container,
  Stack,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { allSnippets } from "contentlayer/generated";
import { type Snippet } from "contentlayer/types";
import { throwNotFoundException } from "~/utils/http-exceptions";
import MDXRenderer from "~/components/mdx/MDXRenderer";
import { format } from "date-fns";

export const meta = ({ data }: { data: { snippet: Snippet } }) => {
  return [
    { title: `${data.snippet.title} - Naimul Haque` },
    {
      name: "description",
      content: data.snippet.summary,
    },
  ];
};

export function loader({ params }: { params: { slug: string } }) {
  const snippet = allSnippets.find((post) => post.slug === params.slug);
  if (!snippet) {
    throw throwNotFoundException();
  }
  return json({ snippet });
}

function SnippetPage() {
  const { snippet } = useLoaderData<typeof loader>();
  return (
    <>
      <Container mt={{ base: 64 }} mb={{ base: 32 }}>
        <Container
          size="md"
          style={{ margin: "0 auto", textAlign: "center" }}
          px={0}
        >
          <Stack gap={24}>
            <Badge size="md" mx="auto">
              {format(snippet.publishedAt, "PPP")}
            </Badge>
            <Title
              className="gradient-text"
              order={1}
              fz={{ base: 32, md: 40 }}
              lh={{ base: 1.115, md: 1 }}
            >
              {snippet.title}
            </Title>
            <Title
              order={2}
              fz={18}
              fw={300}
              lh={1.4}
              c="hsl(var(--foreground))"
            >
              {snippet.summary}
            </Title>
          </Stack>
        </Container>
      </Container>
      <Container size={960} mb="xl">
        <TypographyStylesProvider>
          <MDXRenderer code={snippet.body.code} />
        </TypographyStylesProvider>
      </Container>
    </>
  );
}

export default SnippetPage;
