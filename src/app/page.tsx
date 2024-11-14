// import Link from "next/link";

import { Navbar } from "./_components/Navbar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[rgb(46,2,109)] to-[#15162c] text-white">
      <Navbar />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">
          Applications
        </h1>
      </div>
    </main>
  );
}
