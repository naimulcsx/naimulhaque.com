import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/global.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={cn(inter.className, "leading-7 dark:bg-gray-900")}>
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
