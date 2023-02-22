import Spinner from '@/components/Spinner';
import { useDetailPost, usePostComments, useViewUser } from '@/hooks';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const postId = router.query.postId;

  const { data: post } = useDetailPost(postId);

  const { data: comments, isSuccess } = usePostComments(postId);

  const userId = post?.user_id;

  const { isLoading, isError, isFetching, data: user } = useViewUser(userId);

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
              {isError ? 'User not found' : `by ${user.name} - ${user.email}`}
            </h3>
          </div>
          <p>{post.body}</p>
          <div className='mt-4'>
            <h4 className='mb-6 text-lg font-semibold'>Comments</h4>
            <div className='flex flex-col gap-4'>
              {comments.length == 0 ? <span>No comments</span> : null}
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
