import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer, Navbar } from "~/components/common";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata = {
  title: "Naimul Haque",
  description:
    "Love Programming? Hello, I am Naimul Haque. I write blogs about programming, algorithms, mathematics, web development and other related stuffs.",
  icons: {
    icon: "/logo.png",
  },
};

const font = Plus_Jakarta_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="dark bg-[#111] text-gray-400 antialiased lg:text-lg">
        <Navbar />
        <main className="">
          <div>{children}</div>
        </main>
        <Footer />
        <NextTopLoader color="#06a6d1" />
      </body>
    </html>
  );
}
