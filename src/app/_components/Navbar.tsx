export function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between p-4 text-xl font-semibold'>
      <div className="font-extrabold tracking-tight">
      <span className="text-[hsl(280,100%,70%)]">Big Bang</span> Dashboard</div>
      <div className='flex flex-row'>
        <button>Sign In</button>
      </div>
    </nav>
  );
}