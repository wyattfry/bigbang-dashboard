import Link from "next/link";

const apps = [
  { id: 'gitlab', name: 'GitLab' },
  { id: 'jaeger', name: 'Jaeger' },
  // Add other apps here
];

export function AppList() {
  return (
    <div className="app-list">
      {apps.map((app) => (
        <Link href={`/apps/${app.id}`} key={app.id}>
          <button className='bg-[hsl(280,100%,60%)] hover:bg-[hsl(280,100%,40%)] text-white font-bold size-40 m-4 rounded'>
            <div className='text-2xl'>{app.name}</div>
          </button>
        </Link>
      ))}
    </div>
  );
}