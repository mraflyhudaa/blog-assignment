import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <nav className='fixed top-0 left-0 z-20 flex justify-between w-full px-4 py-6 text-white transition-all duration-700 delay-100 lg:px-24 bg-primary '>
      <h1 className='text-3xl font-semibold'>
        <Link href='/posts'>Blog App</Link>
      </h1>
      <ul
        onClick={() => setShow(false)}
        className={`fixed left-0 ${
          show ? 'top-0 p-6' : '-top-full'
        } md:static flex flex-col md:flex-row items-center justify-end gap-8 md:w-auto md:h-auto w-screen text-2xl md:text-base transition-all duration-500 bg-primary -z-20 h-60 md:bg-primary`}
      >
        <li
          className={` hover:text-white ${
            router.pathname == '/posts' ? 'text-white' : 'text-gray-200'
          } `}
        >
          <Link href='/posts'>Posts</Link>
        </li>
        <li
          className={`hover:text-white ${
            router.pathname == '/users' ? 'text-white' : 'text-gray-200'
          } `}
        >
          <Link href='/users'>Users</Link>
        </li>
      </ul>
      <div
        className='md:hidden z-[1] flex flex-col  justify-center items-center'
        onClick={() => setShow(!show)}
      >
        <div
          className={`w-6 h-0.5 rounded bg-white mb-1.5 transition-all ${
            show ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 rounded bg-white mb-1.5 ${
            show ? '-translate-x-5 opacity-0' : ''
          } transition-all`}
        ></div>
        <div
          className={`w-6 h-0.5 rounded bg-white transition-all ${
            show ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>
    </nav>
  );
}
