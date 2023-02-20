import instance from '../axiosConfig';

export const getAllPosts = (page) => {
  return instance
    .get(`/posts?page=${page}&per_page=10`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getDetailPost = (id) => {
  return instance
    .get(`/posts/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getPostComments = (id) => {
  return instance
    .get(`/posts/${id}/comments`)
    .then((res) => res.data)
    .catch((error) => error);
};
