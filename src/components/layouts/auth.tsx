import type React from "react";
import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-primary">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
