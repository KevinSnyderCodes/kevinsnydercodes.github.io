import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="bg-zinc-700 text-white">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center p-24">
            <div className="rounded-full overflow-hidden">
              <Image src="/me.jpg" alt="Logo" width={240} height={240} />
            </div>
            <h1 className="text-5xl font-bold mt-8">Kevin Snyder</h1>
            <h2 className="text-2xl mt-4">Software Engineer</h2>
            <h3 className="text-xl">San Francisco, CA</h3>
          </div>
          <div className="items-left mt-12">
            <p className="mt-2">
              Hi, I&apos;m Kevin Snyder, a Software Engineer from San Francisco,
              CA.
            </p>
            <p className="mt-2">
              I have been working professionally as a software engineer for nine
              years across the entire tech stack.
            </p>
            <p className="mt-2">
              Take a look at my <Link href="/projects">projects</Link> to see
              what I&apos;ve been working on.
            </p>
            <p className="mt-2">
              I also have a <Link href="/blog">blog</Link> where I occasionally
              share my musings on software and life.
            </p>
            <p className="mt-2">Thanks for stopping by!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
