import instance from '../axiosConfig';

export const getAllPosts = async (page) => {
  const res = await instance.get(`/posts?page=${page}&per_page=10`);
  return res.data;
};

export const getDetailPost = async (id) => {
  const res = await instance.get(`/posts/${id}`);
  return res.data;
};

export const getPostComments = async (id) => {
  const res = await instance.get(`/posts/${id}/comments`);
  return res.data;
};
