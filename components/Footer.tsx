import Link from "next/link";
import { Container } from "./Container";

const links = [
  ["Home", "/"],
  ["About", "/about"],
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/[0.1] py-8">
      <Container>
        <div className="flex justify-between">
          <ul className="hidden space-x-6 text-zinc-300 md:flex">
            {links.map(([text, href], idx) => {
              return (
                <li key={idx}>
                  <Link
                    href={href}
                    className="link-underline relative rounded text-base transition duration-300 hover:text-emerald-400"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-base text-zinc-300">
            &copy; {new Date().getFullYear()} Naimul Haque. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
