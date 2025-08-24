import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@tanstack/react-query";
import axiosInstance from "../lib/api-client";

export const useFetch = (
  key: string[],
  url: string,
  options = {},
  params = {}
) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url, { params });
      return data;
    },
    ...options,
  });
};

export const usePost = <TData = unknown, TVariables = unknown>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (data: TVariables) =>
      axiosInstance.post<TData>(url, data).then((res) => res.data),
    ...options,
  });
};

export const usePut = (url: string, options = {}) => {
  return useMutation({
    mutationFn: (data) => axiosInstance.put(url, data).then((res) => res.data),
    ...options,
  });
};

export const usePatch = (url: string, options = {}) => {
  return useMutation({
    mutationFn: (data) =>
      axiosInstance.patch(url, data).then((res) => res.data),
    ...options,
  });
};

export const useDelete = (url: string, options = {}) => {
  return useMutation({
    mutationFn: () => axiosInstance.delete(url).then((res) => res.data),
    ...options,
  });
};
