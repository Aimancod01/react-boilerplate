import type { UseMutationOptions } from "@tanstack/react-query";
import { usePost } from "../hooks/useApi";
import type { LoginPayload, LoginResponse } from "../types";

const AUTH_BASE_URL = "/auth";

export const useLogin = (
  options?: UseMutationOptions<LoginResponse, Error, LoginPayload>
) => {
  return usePost<LoginResponse, LoginPayload>(
    `${AUTH_BASE_URL}/login`,
    options
  );
};

export const useRegister = (options = {}) => {
  return usePost(`${AUTH_BASE_URL}/register`, options);
};
