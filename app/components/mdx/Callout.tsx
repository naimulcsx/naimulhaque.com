import { Box, Flex, Text } from "@mantine/core";
import { type PropsWithChildren } from "react";

export function Callout({ children }: PropsWithChildren) {
  return (
    <Flex
      p="var(--mantine-spacing-md)"
      mb={20}
      className="callout"
      style={{
        background: "hsl(var(--secondary) / 0.5)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
    >
      <Box style={{ flexBasis: 32, flexShrink: 0 }}>💡</Box>
      <Text>{children}</Text>
    </Flex>
  );
}
