import { getAllPosts } from '@/api/posts';
import PostList from '@/components/posts/PostList';
import Spinner from '@/components/Spinner';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Posts() {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: posts,
    isSuccess,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getAllPosts(page),
    keepPreviousData: true,
  });

  if (isLoading || isFetching) {
    return (
      <div className='flex items-center justify-center w-full h-screen'>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center w-full h-screen'>
        Error {error.message}
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className='flex flex-col'>
        <PostList data={posts} />
        <div className='flex flex-col items-center justify-center gap-2 mt-6'>
          <span>Current Page: {page}</span>
          <div className='flex gap-4'>
            <button
              className='p-2 text-white transition-all rounded-md bg-primary hover:bg-primary-hover disabled:bg-slate-400 disabled:cursor-not-allowed'
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </button>
            <button
              className='px-4 py-2 text-white transition-all rounded-md bg-primary hover:bg-primary-hover disabled:bg-slate-400 disabled:cursor-not-allowed'
              onClick={() => {
                if (!isPreviousData) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}
