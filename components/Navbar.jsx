import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className='fixed top-0 left-0 z-10 flex justify-between w-full px-4 py-6 text-white transition-all duration-700 delay-100 lg:px-24 bg-primary'>
      <h1 className='text-3xl font-semibold'>
        <Link href='/posts'>Blog App</Link>
      </h1>
      <div className='flex items-center gap-8 text-lg'>
        <span
          className={` hover:text-white ${
            router.pathname == '/posts' ? 'text-white' : 'text-gray-200'
          } `}
        >
          <Link href='/posts'>Posts</Link>
        </span>
        <span
          className={`hover:text-white ${
            router.pathname == '/users' ? 'text-white' : 'text-gray-200'
          } `}
        >
          <Link href='/users'>Users</Link>
        </span>
      </div>
    </nav>
  );
}
