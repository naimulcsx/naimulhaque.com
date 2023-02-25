import { Figtree } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.className}>
      <body>{children}</body>
    </html>
  );
}
