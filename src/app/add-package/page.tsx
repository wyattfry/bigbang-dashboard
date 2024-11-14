import Link from 'next/link';

import { PackageList } from '../_components/PackageList';

export default function AddPackagePage() {
  return (
    <div className="add-package-page">
      <h1>Add Package</h1>
      <PackageList />
      <Link href="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}
