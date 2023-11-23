import {
  Accordion,
  ActionIcon,
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  Badge,
  Button,
  type CSSVariablesResolver,
  Container,
  Divider,
  Input,
  Loader,
  Menu,
  Modal,
  NavLink,
  Notification,
  Paper,
  PasswordInput,
  Popover,
  SegmentedControl,
  Select,
  Table,
  Tabs,
  TagsInput,
  Text,
  TextInput,
  Title,
  createTheme,
  rem,
  TypographyStylesProvider,
  Drawer,
} from "@mantine/core";

import accordionClasses from "./css/Accordion.module.css";
import actionIconClasses from "./css/ActionIcon.module.css";
import anchorClasses from "./css/Anchor.module.css";
import appShellClasses from "./css/AppShell.module.css";
import badgeClasses from "./css/Badge.module.css";
import buttonClasses from "./css/Button.module.css";
import containerClasses from "./css/Container.module.css";
import dividerClasses from "./css/Divider.module.css";
import inputClasses from "./css/Input.module.css";
import loaderClasses from "./css/Loader.module.css";
import menuClasses from "./css/Menu.module.css";
import modalClasses from "./css/Modal.module.css";
import navlinkClasses from "./css/NavLink.module.css";
import notificationClasses from "./css/Notification.module.css";
import paperClasses from "./css/Paper.module.css";
import passwordInputClasses from "./css/PasswordInput.module.css";
import popoverClasses from "./css/Popover.module.css";
import segmentedControlClasses from "./css/SegmentedControl.module.css";
import selectClasses from "./css/Select.module.css";
import tableClasses from "./css/Table.module.css";
import tabsClasses from "./css/Tabs.module.css";
import tagsInputClasses from "./css/TagsInput.module.css";
import textClasses from "./css/Text.module.css";
import textInputClasses from "./css/TextInput.module.css";
import titleClasses from "./css/Title.module.css";
import typographyClasses from "./css/TypographyStylesProvider.module.css";
import drawerClasses from "./css/Drawer.module.css";

export const resolver: CSSVariablesResolver = () => ({
  variables: { "--radius": "0.75rem" },
  light: {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 10% 3.9%",
    "--primary": "193 100% 50%", // updated
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 4.8% 95.9%",
    "--secondary-foreground": "240 5.9% 10%",
    "--muted": "240 4.8% 95.9%",
    "--muted-foreground": "240 3.8% 46.1%",
    "--accent": "240 4.8% 95.9%",
    "--accent-foreground": "240 5.9% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "240 5.9% 10%",
  },
  dark: {
    "--background": "240 10% 3.9%",
    "--foreground": "0 0% 98%",
    "--card": "240 10% 3.9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "240 10% 3.9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "193 100% 50%", // updated
    "--primary-foreground": "240 5.9% 10%",
    "--secondary": "240 3.7% 15.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "240 3.7% 15.9%",
    "--muted-foreground": "240 5% 64.9%",
    "--accent": "240 3.7% 15.9%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "240 4.9% 83.9%",
  },
});

const CONTAINER_SIZES: Record<string, string> = {
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(1024),
  xl: rem(1140),
};

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  defaultRadius: "md",
  shadows: {
    xs: "0 1px 2px 0 rgba(0,0,0,.05)",
  },
  headings: {
    sizes: {
      h1: {
        fontSize: rem(48),
        lineHeight: rem(48),
      },
      h2: {
        fontSize: rem(30),
        lineHeight: rem(36),
      },
      h3: {
        fontSize: rem(24),
        lineHeight: rem(32),
      },
      h4: {
        fontSize: rem(20),
        lineHeight: rem(28),
      },
      h5: {
        fontSize: rem(18),
        lineHeight: rem(28),
      },
      h6: {
        fontSize: rem(16),
        lineHeight: rem(28),
      },
    },
  },
  breakpoints: {
    xs: "40em",
    sm: "48em",
    md: "64em",
    lg: "80em",
    xl: "87.5em",
  },
  components: {
    Accordion: Accordion.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: accordionClasses,
    }),
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
      defaultProps: { variant: "nh-ui", size: "lg" },
      classNames: containerClasses,
    }),
    Title: Title.extend({
      classNames: titleClasses,
    }),
    Button: Button.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: buttonClasses,
    }),
    Text: Text.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: textClasses,
    }),
    AppShell: AppShell.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: appShellClasses,
    }),
    AppShellHeader: AppShellHeader.extend({
      defaultProps: { variant: "nh-ui" },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: { variant: "nh-ui" },
    }),
    Anchor: Anchor.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: anchorClasses,
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: actionIconClasses,
    }),
    Select: Select.extend({
      defaultProps: { variant: "nh-ui", withCheckIcon: false },
      classNames: selectClasses,
    }),
    Table: Table.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: tableClasses,
    }),
    TextInput: TextInput.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: textInputClasses,
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: passwordInputClasses,
    }),
    Input: Input.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: inputClasses,
    }),
    NavLink: NavLink.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: navlinkClasses,
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: segmentedControlClasses,
    }),
    Paper: Paper.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: paperClasses,
    }),
    Badge: Badge.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: badgeClasses,
    }),
    Tabs: Tabs.extend({
      classNames: tabsClasses,
    }),
    Popover: Popover.extend({
      classNames: popoverClasses,
    }),
    Divider: Divider.extend({
      classNames: dividerClasses,
    }),
    Menu: Menu.extend({
      defaultProps: {
        variant: "nh-ui",
        transitionProps: { transition: "pop", duration: 150 },
      },
      classNames: menuClasses,
    }),
    Notification: Notification.extend({
      defaultProps: {
        variant: "nh-ui",
        closeButtonProps: { variant: "nh-ui" },
      },
      classNames: notificationClasses,
    }),
    Modal: Modal.extend({
      defaultProps: { variant: "nh-ui", overlayProps: { blur: 8 } },
      classNames: modalClasses,
    }),
    TagsInput: TagsInput.extend({
      defaultProps: { variant: "nh-ui" },
      classNames: tagsInputClasses,
    }),
    Loader: Loader.extend({
      defaultProps: { variant: "nh-ui", size: "xs" },
      classNames: loaderClasses,
    }),
    TypographyStylesProvider: TypographyStylesProvider.extend({
      classNames: typographyClasses,
    }),
    Drawer: Drawer.extend({
      classNames: drawerClasses,
    }),
  },
});
