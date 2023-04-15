import { Figtree } from "next/font/google";
import { Footer, Navbar } from "~/components";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Naimul Haque",
  description:
    "Love Programming? Hello, I am Naimul Haque. I write blogs about programming, algorithms, mathematics, web development and other related stuffs.",
  icons: {
    icon: "/logo.png",
  },
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="bg-[#161513] min-h-screen">
        <div className="relative max-w-4xl px-6 sm:px-8 md:px-16 mx-auto">
          <Navbar />
          <main className="pt-24 md:pt-32">
            <div>{children}</div>
          </main>
          <Footer />
          <NextTopLoader color="#22c55e" />
        </div>
      </body>
    </html>
  );
}
