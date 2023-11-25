import "@mantine/core/styles.css";
import "~/styles/global.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { resolver, theme } from "./styles";
import { Layout } from "./components/common/Layout";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Meta />
        <Links />
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body style={{ position: "relative" }}>
        <MantineProvider
          theme={theme}
          cssVariablesResolver={resolver}
          forceColorScheme="dark"
        >
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
        <div
          className="absolute left-1/2 top-0 -z-10 hidden h-screen w-full -translate-x-1/2 dark:block bg-radial-gradient-master"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            left: "50%",
            top: 0,
            zIndex: -10,
            transform: "translateX(-50%)",
            backgroundImage:
              "radial-gradient(circle at 50% 0%, hsl(var(--secondary)) ,rgba(255,255,255,0) 40%)",
          }}
        ></div>
      </body>
    </html>
  );
}
