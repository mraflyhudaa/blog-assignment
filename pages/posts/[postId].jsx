import { getDetailPost, getPostComments } from '@/api/posts';
import { getDetailUser } from '@/api/users';
import Spinner from '@/components/Spinner';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Post() {
  const router = useRouter();
  const postId = router.query.postId;

  const { data: post } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getDetailPost(postId),
  });

  const { data: comments, isSuccess } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getPostComments(postId),
  });

  const userId = post?.user_id;

  const {
    isLoading,
    isError,
    error,
    isFetching,
    data: user,
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getDetailUser(userId),
    enabled: !!userId,
  });

  if (isLoading || isFetching) {
    return (
      <div className='flex items-center justify-center w-full h-screen'>
        <Spinner />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className='flex'>
        <div className='flex flex-col gap-6 mt-16'>
          <div>
            <h1 className='text-4xl font-semibold'>{post.title}</h1>
            <h3 className='mt-3 text-lg font-medium text-gray-400'>
              {isError ? 'User not found' : `by ${user?.name} - ${user?.email}`}
            </h3>
          </div>
          <p>{post.body}</p>
          <div className='mt-4'>
            <h4 className='mb-6 text-lg font-semibold'>Comments</h4>
            <div className='flex flex-col gap-4'>
              {comments?.map((comment) => (
                <ul
                  key={comment.id}
                  className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md bg-blue-bg'
                >
                  <li className='font-medium text-gray-500'>{`${comment.name} - ${comment.email}`}</li>
                  <li>{comment.body}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
