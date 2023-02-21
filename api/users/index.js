import instance from '../axiosConfig';

export const getAllUsers = (page, name) => {
  return instance
    .get(`/users?page=${page}&per_page=10&name=${name}`)
    .then((res) => res)
    .catch((error) => error);
};

export const getDetailUser = (id) => {
  return instance
    .get(`/users/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const createUser = (data) => {
  return instance.post('/users', data);
};

export const deleteUser = (id) => {
  return instance.delete(`/users/${id}`);
};

export const updateUser = (id, data) => {
  return instance.patch(`/users/${id}`, data);
};
