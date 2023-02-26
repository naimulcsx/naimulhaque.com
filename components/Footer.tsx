import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.15] py-8 mt-12">
      <div className="flex justify-between">
        <ul className="flex text-zinc-300 space-x-6">
          {links.map(([text, href], idx) => {
            return (
              <li key={idx}>
                <Link
                  href={href}
                  className="link-underline relative rounded text-light hover:text-emerald-400 transition duration-300"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-zinc-300">
          &copy; {new Date().getFullYear()} Naimul Haque. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
