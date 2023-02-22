import instance from '../axiosConfig';

export const getAllUsers = async (page, name) => {
  const res = await instance.get(
    `/users?page=${page}&per_page=10&name=${name}`
  );
  return res.data;
};

export const getDetailUser = async (id) => {
  const res = await instance.get(`/users/${id}`);
  return res.data;
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
