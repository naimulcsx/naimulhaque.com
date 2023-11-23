import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ActionIcon,
  Anchor,
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useColorScheme, useDisclosure } from "@mantine/hooks";
import { type PropsWithChildren } from "react";
import { Logo } from "./Logo";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoonStars,
  IconSun,
} from "@tabler/icons-react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header />
      <AppShell.Main px={-16} mt={-16}>
        {children}
      </AppShell.Main>
      <Box
        component="footer"
        py="xl"
        style={{
          textAlign: "center",
          // borderTop: "1px solid hsl(var(--border))",
        }}
      >
        <Container>
          <Text>© 2023 Naimul Haque. All rights reserved.</Text>
        </Container>
      </Box>
    </AppShell>
  );
}

const AppShellHeader = motion(AppShell.Header);

export function Header() {
  const { pathname } = useLocation();

  const { scrollY } = useScroll();
  let height = useMotionValue(80);
  let [active, setActive] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      setActive(current > 50);
      let diff = current - scrollY.getPrevious();
      if (diff > 0) {
        height.set(Math.max(72, height.get() - diff));
      } else {
        height.set(Math.min(80, height.get() - diff));
      }
    });
  }, []); // eslint-disable-line

  // mobile drawer
  const [opened, { close, toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  return (
    <AppShellHeader
      // @ts-ignore
      style={{
        height,
        transition: "all 300ms",
        borderBottom: "1px solid",
        borderColor: active ? "hsl(var(--border))" : "transparent",
      }}
    >
      <Container
        fluid
        maw={1440}
        h="100%"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Group
          gap="sm"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/", {
              unstable_viewTransition: true,
            });
          }}
        >
          <Logo width={32} height={32} />
          <Title order={4}>Naimul Haque</Title>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" />

        <Drawer
          size="75%"
          opened={opened}
          onClose={close}
          position="right"
          overlayProps={{ blur: 4 }}
          title={<Logo height={32} width={32} />}
        >
          <Stack mt="sm">
            {links.map((link) => {
              return (
                <Anchor
                  component={Link}
                  to={link.to}
                  key={link.to}
                  underline="never"
                  prefetch="viewport"
                  py={4}
                  onClick={close}
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "hsl(var(--foreground) / 0.1)",
                  }}
                >
                  {link.label}
                </Anchor>
              );
            })}

            <Button
              mt="xl"
              component={Link}
              to="https://github.com/naimulcsx"
              target="_blank"
              variant="nh-ui-secondary"
              leftSection={<IconBrandGithub size={16} />}
              fullWidth
            >
              Github
            </Button>
            <Button
              variant="nh-ui-secondary"
              component={Link}
              to="https://www.linkedin.com/in/naimulcsx/"
              target="_blank"
              leftSection={<IconBrandLinkedin size={16} />}
              fullWidth
            >
              LinkedIn
            </Button>
          </Stack>
        </Drawer>

        <Group gap="xl" visibleFrom="md">
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Anchor
                size="sm"
                component={Link}
                to={link.to}
                key={link.to}
                underline="never"
                py={4}
                style={{
                  borderBottom: "2px solid",
                  borderColor: isActive ? "hsl(var(--primary))" : "transparent",
                  color: isActive
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--foreground) / 0.8)",
                }}
              >
                {link.label}
              </Anchor>
            );
          })}
        </Group>
      </Container>
    </AppShellHeader>
  );
}

export function ColorSchemeSwitcher() {
  const colorScheme = useColorScheme();
  return (
    <Menu width={120}>
      <Menu.Target>
        <ActionIcon size="lg" style={{ border: 0 }}>
          {colorScheme === "dark" && <IconMoonStars size={16} />}
          {colorScheme === "light" && <IconSun size={16} />}
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSun size={16} />} onClick={() => {}}>
          Light
        </Menu.Item>
        <Menu.Item leftSection={<IconMoonStars size={16} />} onClick={() => {}}>
          Dark
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Uses",
    to: "/uses",
  },
];
