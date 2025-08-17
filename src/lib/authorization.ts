import type { User } from "../types";

export const isUser = (user: User | undefined | null) => {
  return user?.role === "User";
};

export const isAdmin = (user: User | undefined | null) => {
  return user?.role === "Admin";
};
