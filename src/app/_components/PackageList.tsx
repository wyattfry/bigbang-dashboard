import Link from "next/link";

const packages = [
  { id: 'gitlab', name: 'GitLab' },
  { id: 'jaeger', name: 'Jaeger' },
  // Add other apps here
];

export function PackageList() {
  return (
    <div className="package-list">
      {packages.map((pkg) => (
        <Link href={`/packages/${pkg.id}`} key={pkg.id}>
          <button className='bg-[hsl(280,100%,60%)] hover:bg-[hsl(280,100%,40%)] text-white font-bold size-40 m-4 rounded'>
            <div className='text-2xl'>{pkg.name}</div>
          </button>
        </Link>
      ))}
    </div>
  );
}