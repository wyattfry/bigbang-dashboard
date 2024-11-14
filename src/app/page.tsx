import Link from "next/link";

import { PackageList } from "./_components/PackageList";

export default function HomePage() {
  return (
      <>
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">
          Packages
        </h1>
        <PackageList />
        <Link href="/add-package">
          <button className="bg-[hsl(280,100%,40%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded">
            Add Package
          </button>
        </Link>
      </>
  );
}
