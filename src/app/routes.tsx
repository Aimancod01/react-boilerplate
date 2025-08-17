import type { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/dashboard";
import { ProtectedRoute } from "../lib/auth";

const convert = (m: {
  default: ComponentType;
}): { Component: ComponentType } => {
  return { Component: m.default };
};

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: () => import("../pages/landing").then(convert),
    },
    {
      path: "/register",
      lazy: () => import("../pages/auth/sign-up").then(convert),
    },
    {
      path: "/login",
      lazy: () => import("../pages/auth/login").then(convert),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          lazy: () => import("../pages/dashboard/index").then(convert),
        },
        {
          path: "/dashboard/settings",
          lazy: () => import("../pages/dashboard/settings").then(convert),
        },
        {
          path: "/dashboard/user",
          lazy: () => import("../pages/dashboard/user").then(convert),
        },
      ],
    },
    {
      path: "*",
      lazy: () => import("../pages/not-found").then(convert),
    },
  ]);
