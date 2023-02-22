import { getAllPosts, getDetailPost, getPostComments } from '@/api/posts';
import { useQuery } from '@tanstack/react-query';

const usePosts = (page) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: () => getAllPosts(page),
    keepPreviousData: true,
  });
};

const useDetailPost = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getDetailPost(postId),
  });
};

const usePostComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getPostComments(postId),
  });
};

export { usePosts, useDetailPost, usePostComments };
