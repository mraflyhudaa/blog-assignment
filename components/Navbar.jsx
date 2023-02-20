import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 z-10 flex justify-between w-full px-4 py-6 text-white transition-all duration-700 delay-100 lg:px-24 bg-primary'>
      <h1 className='text-3xl font-semibold '>
        <Link href='/posts'>Blog App</Link>
      </h1>
      <div className='flex items-center gap-8 text-lg'>
        <span>
          <Link href='/posts'>Posts</Link>
        </span>
        <span>
          <Link href='/users'>Users</Link>
        </span>
      </div>
    </nav>
  );
}
