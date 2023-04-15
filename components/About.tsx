import Image from "next/image";

export function About() {
  return (
    <section className="pb-12">
      <div className="space-y-8">
        <div className="flex flex-col text-center md:text-left md:flex-row md:items-center gap-8 md:gap-12">
          <div className="basis-40 shrink-0">
            <Image
              src="/images/naimul-haque.jpg"
              className="rounded-full mx-auto w-40 h-40"
              alt="Naimul Haque"
              width={256}
              height={256}
              quality={100}
            />
          </div>
          <div className="">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 from-10% via-pink-400 via-30% to-orange-500 to-90% bg-clip-text text-transparent">
                Naimul Haque
              </span>
            </h1>
            <p className="mt-2 text-lg md:text-2xl text-zinc-300 font-light">
              Software Engineer &amp; Cloud Enthusiast
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4 text-sm">
              <a
                target="_blank"
                href="https://github.com/naimulcsx"
                className="flex items-center border border-white/10 space-x-1 rounded-md bg-white/5 px-2.5 py-1.5 font-medium text-white/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 stroke-white/60"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                </svg>
                <span>naimulcsx</span>
              </a>

              <a
                target="_blank"
                href="https://twitter.com/naimulcsx"
                className="flex items-center border border-white/10 space-x-1 rounded-md bg-white/5 px-2.5 py-1.5 font-medium text-white/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="none"
                  stroke="#2c3e50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 stroke-white/60"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
                <span>naimulcsx</span>
              </a>
            </div>
          </div>
        </div>
        <div className="prose md:prose-lg prose-invert prose-p:text-zinc-300 prose-p:font-light">
          <p>
            Hi I&apos; m Naimul <span>👋</span>, I am full-stack{" "}
            <span className="border-b border-emerald-500 text-emerald-500">
              software engineer
            </span>{" "}
            with a strong focus in back-end development specially in
            architecting scalable back-ends backed by cloud-native technologies.
          </p>
          <p>
            In my free time, I like developing side projects, learning new
            technologies and writing articles. This is my place for my Thoughts
            and Reflections. Have a good read!
          </p>
        </div>
      </div>
    </section>
  );
}
