import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes";

const AppRouter: FC = () => {
  return <RouterProvider router={createAppRouter()} />;
};

export default AppRouter;
