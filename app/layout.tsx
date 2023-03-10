import { Inter } from "next/font/google";
import { Footer, Navbar } from "~/components";
import "./globals.css";

export const metadata = {
  title: "Naimul Haque",
  description:
    "Love Programming? Hello, I am Naimul Haque. I write blogs about programming, algorithms, mathematics, web development and other related stuffs.",
};

const figtree = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <div className="relative max-w-4xl px-8 md:px-16 mx-auto">
          <Navbar />
          <main className="pt-24 md:pt-32">
            <div>{children}</div>
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
              <div className="absolute left-[-25%] top-0 h-[32rem] w-[150%] transform">
                <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#10b981]/50 dark:to-[#DBFF75]/40 opacity-90">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                  >
                    <defs>
                      <pattern
                        id=":rm:"
                        width="72"
                        height="56"
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 56V.5H72" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill="url(#:rm:)"
                    ></rect>
                    <svg x="-12" y="4" className="overflow-visible">
                      <rect
                        strokeWidth="0"
                        width="73"
                        height="57"
                        x="288"
                        y="168"
                      ></rect>
                      <rect
                        strokeWidth="0"
                        width="73"
                        height="57"
                        x="144"
                        y="56"
                      ></rect>
                      <rect
                        strokeWidth="0"
                        width="73"
                        height="57"
                        x="504"
                        y="168"
                      ></rect>
                      <rect
                        strokeWidth="0"
                        width="73"
                        height="57"
                        x="720"
                        y="336"
                      ></rect>
                    </svg>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1113 440"
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] hidden"
                >
                  <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
                </svg>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
