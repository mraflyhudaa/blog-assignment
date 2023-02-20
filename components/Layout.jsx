import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name='description' content='Blog app build with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='w-full min-h-screen px-4 py-12 transition-all lg:py-16 lg:px-24'>
        {children}
      </div>
    </>
  );
}
