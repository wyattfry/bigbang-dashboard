export function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between p-4 text-xl font-extrabold tracking-tight'>
      <div className="Title">
      <span className="text-[hsl(280,100%,70%)]">Big Bang</span> Dashboard</div>
      <div className='sign-in-button flex flex-row'>
        {/* <button>Sign In</button> */}
        <button>Sign Out</button>
      </div>
    </nav>
  );
}