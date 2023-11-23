import { Box, Flex } from "@mantine/core";
import { type PropsWithChildren } from "react";

export function Callout({ children }: PropsWithChildren) {
  return (
    <Flex
      pt={20}
      px={20}
      mb={20}
      className="callout"
      style={{
        background: "hsl(var(--secondary))",
        borderRadius: "var(--mantine-radius-sm)",
      }}
    >
      <Box style={{ flexBasis: 32, flexShrink: 0 }}>💡</Box>
      {children}
    </Flex>
  );
}
