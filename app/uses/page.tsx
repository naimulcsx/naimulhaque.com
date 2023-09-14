import { Metadata } from "next";
import { Container } from "~/components/common";

export const metadata: Metadata = {
  title: "Uses - Naimul Haque",
};

export default function UsesPage() {
  return (
    <section className="mb-16 mt-32 lg:mb-20 lg:mt-40">
      <Container>
        <h1 className="mb-4 text-5xl font-bold text-neutral-200">
          Uses{" "}
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary"></span>
        </h1>
        <p className="">
          A collection of stuff I use for programming, web development in my
          everyday life.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-20">
          <div className="prose">
            <h2 className="text-3xl">
              Office Setup{" "}
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
            </h2>
            {/* laptop */}
            <h3>MacBook Pro (14.2-inch, 2023)</h3>
            <ul>
              <li>Apple M2 Pro 10-Core Chip | 16-Core Neural Engine</li>
              <li>14.2&quot; 3024x1964 Liquid Retina XDR Screen</li>
              <li>16GB RAM | 512GB SSD</li>
            </ul>

            {/* display */}
            <h3>Xiaomi Mi 34 Inch Curved Monitor</h3>
            <ul>
              <li>WQHD 3.440 x 1.440 VA Panel</li>
              <li>144Hz Refresh rate</li>
            </ul>

            {/* accessories */}
            <h3>Accessories</h3>
            <ul>
              <li>
                <span className="text-stone-300 underline underline-offset-4">
                  Keyboard:
                </span>{" "}
                Akko 3084B Plus Black & Gold
              </li>
              <li>
                <span className="text-stone-300 underline underline-offset-4">
                  Mouse:
                </span>{" "}
                Logitech Pebble M350
              </li>
            </ul>
          </div>

          <div className="prose">
            <h2 className="text-3xl">
              Workflow{" "}
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
            </h2>
            {/* text editor */}
            <h3>Text Editor</h3>
            <ul>
              <li>VS Code</li>
              <li>Dark Modern Theme</li>
              <li>ZSH Terminal</li>
            </ul>

            {/* text editor */}
            <h3>General Devtools</h3>
            <ul>
              <li>Figma</li>
              <li>iTerm 2</li>
            </ul>

            <h3>Apps</h3>
            <ul>
              <li>Google Chrome</li>
              <li>Things 3</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
