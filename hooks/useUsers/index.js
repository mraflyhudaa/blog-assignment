import {
  createUser,
  deleteUser,
  getAllUsers,
  getDetailUser,
  updateUser,
} from '@/api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useUsers = (page, debouncedSearchValue) => {
  return useQuery({
    queryKey: ['users', page, debouncedSearchValue],
    queryFn: () => getAllUsers(page, debouncedSearchValue),
    keepPreviousData: true,
  });
};

const useViewUser = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getDetailUser(userId),
    enabled: !!userId,
    retry: false,
  });
};

const useCreateUser = (formData) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => createUser(formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['users'],
      }),
  });
};

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['users'],
      }),
  });
};

const useUpdateUser = (id, formData) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => updateUser(id, formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['users'],
      }),
  });
};

export { useUsers, useDeleteUser, useUpdateUser, useCreateUser, useViewUser };
