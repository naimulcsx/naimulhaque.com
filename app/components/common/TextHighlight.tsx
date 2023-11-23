import { Text, type TextProps } from "@mantine/core";
import { type PropsWithChildren } from "react";

export function TextHightlight(props: PropsWithChildren<TextProps>) {
  return (
    <Text
      component="span"
      fw={500}
      variant="nh-ui-strong"
      style={{ borderBottom: "1px solid hsl(var(--foreground))" }}
      {...props}
    />
  );
}
