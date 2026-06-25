import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-300">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-12 py-32 px-16 bg-white dark:bg-slate-900 sm:items-start">
        <Image
          className="dark:invert"
          src="/nexus-directory-logo.png"
          alt="Nexus Directory logo"
          width={200}
          height={50}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This is a Next Js authentication template. Built with Next Js,
            TypeScript, MongoDB, Mongoose,
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for my portfolios? If you have an offer please feel free to
            explore my{" "}
            <a
              href="https://www.linkedin.com/in/ahmad-hisham007"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Linkedin
            </a>{" "}
            or the{" "}
            <a
              href="https://www.fiverr.com/s/GzRj290"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Fiverr
            </a>{" "}
            profile.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-background transition-colors bg-white hover:bg-white/80 md:w-[158px]"
            href="/login"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Sign In
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid  px-5 transition-colors hover:border-transparent border-white text-white md:w-39.5"
            href="https://github.com/Ahmad-Hisham007"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="text-white/60 text-center text-2xl font-semibold">
          Built With ❤
        </div>
      </main>
    </div>
  );
}
