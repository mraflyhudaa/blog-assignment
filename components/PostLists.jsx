import Link from 'next/link';

export default function PostLists({ id, title, body }) {
  return (
    <div className='flex flex-col justify-between w-full gap-4 p-6 border border-gray-300 rounded-md bg-blue-bg'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-slate-500'>{body.substring(0, 100)}...</p>
      </div>
      <Link
        href={`/posts/${id}`}
        className='p-2 ml-auto text-center text-white transition-all rounded-md bg-primary hover:bg-primary-hover disabled:bg-slate-400 disabled:cursor-not-allowed'
      >
        Read More
      </Link>
    </div>
  );
}
