import type { UseQueryOptions } from "@tanstack/react-query";
import { useDelete, useFetch, usePost, usePut } from "../hooks/useApi";
import { queryKeys } from "../constants";

const USER_BASE_URL = "/users";

export const useGetUsers = (options: UseQueryOptions) => {
  return useFetch([queryKeys.user], USER_BASE_URL, options);
};

export const useGetUser = (userId: string, options: UseQueryOptions) => {
  return useFetch(
    [queryKeys.user, userId],
    `${USER_BASE_URL}/${userId}`,
    options
  );
};

export const useCreateUser = (options: UseQueryOptions) => {
  return usePost(USER_BASE_URL, options);
};

export const useUpdateUser = (userId: number, options: UseQueryOptions) => {
  return usePut(`${USER_BASE_URL}/${userId}`, options);
};

export const useDeleteUser = (userId: number, options: UseQueryOptions) => {
  return useDelete(`${USER_BASE_URL}/${userId}`, options);
};
