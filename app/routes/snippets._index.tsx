import {
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { type MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { allSnippets } from "contentlayer/generated";
import { Snippet } from "contentlayer/types";
import { format } from "date-fns";

export const meta: MetaFunction = () => {
  return [
    { title: "Snippets - Naimul Haque" },
    {
      name: "description",
      content:
        "Discover essential code snippets to make your life easier. Unlock solutions, tips, and tricks to streamline your software development process.",
    },
  ];
};

export async function loader() {
  const snippets = allSnippets
    .filter((snippet) => !snippet.draft)
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    });
  return json({
    snippets,
  });
}

export default function BlogListingPage() {
  const { snippets } = useLoaderData<typeof loader>();
  return (
    <Container>
      <Box mt={{ base: 64 }} mb={{ base: 32 }}>
        <Stack gap="xs">
          <Group gap="xs">
            <Title order={1} fz={{ base: 32, md: 36 }}>
              Snippets
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
          <Title order={2} fz={18} lh={1.5} fw={300}>
            Explore a curated collection of code snippets and examples for
            programming and web development.
          </Title>
        </Stack>
      </Box>
      <Stack gap="xl">
        {snippets.map((snippet, index) => {
          return (
            <SnippetItem
              key={snippet._id}
              snippet={snippet as Snippet}
              showPreview={index === 0}
            />
          );
        })}
      </Stack>
    </Container>
  );
}

export function SnippetItem({
  snippet,
  showPreview,
}: {
  snippet: Snippet;
  showPreview: boolean;
}) {
  return (
    <Box key={snippet.slug}>
      <Flex>
        <Box style={{ flexShrink: 0, flexBasis: 220 }}>
          <Text size="sm">{format(snippet.publishedAt, "PP")}</Text>
        </Box>
        <Box style={{ flexGrow: 1 }}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/snippets/${snippet.slug}`}
            unstable_viewTransition
          >
            <Title order={4}>{snippet.title}</Title>
            <Text mt={4}>{snippet.summary}</Text>

            {showPreview && (
              <Box
                mt="sm"
                h={200}
                style={{
                  overflow: "hidden",
                  mask: "linear-gradient(#fff, transparent)",
                }}
              >
                <TypographyStylesProvider>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: snippet.preview,
                    }}
                  ></div>
                </TypographyStylesProvider>
              </Box>
            )}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
