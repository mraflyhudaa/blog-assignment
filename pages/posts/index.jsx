import PostList from '@/components/posts/PostList';
import Spinner from '@/components/Spinner';
import { usePosts } from '@/hooks';
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
  } = usePosts(page);

  const renderPosts = () => {
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
      return <PostList data={posts} />;
    }
  };

  return (
    <div className='flex flex-col'>
      <h1 className='mt-12 text-3xl font-semibold text-headline'>Posts</h1>
      <div className='flex flex-col items-center justify-center gap-2 mt-6'>
        {renderPosts()}
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
