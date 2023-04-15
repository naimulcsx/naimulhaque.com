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
                className="flex items-center border border-white/10 space-x-1 rounded-md bg-[#24292e] px-2.5 py-1.5 font-medium text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 stroke-white/75"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                </svg>
                <span>naimulcsx</span>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/naimulcsx/"
                className="flex items-center border border-white/10 space-x-1 rounded-md bg-[#0077b5]/75 px-2.5 py-1.5 font-medium text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-white/75"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
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
