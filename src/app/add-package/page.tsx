import Link from 'next/link';

import { PackageList } from '../_components/PackageList';

export default function AddPackagePage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">Add a Package</h1>
      <PackageList />
      <Link href="/">
        <button className="bg-[hsl(280,100%,40%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </Link>
    </>
  );
}
