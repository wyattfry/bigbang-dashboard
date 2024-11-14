import Link from "next/link";

import { Navbar } from "./_components/Navbar";
import { PackageList } from "./_components/PackageList";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[rgb(46,2,109)] to-[#15162c] text-white">
      <Navbar />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">
          Packages
        </h1>
        <PackageList />
        <Link href="/add-package">
          <button className="bg-[hsl(280,100%,40%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded">
            Add Package
          </button>
        </Link>
      </div>
    </main>
  );
}
