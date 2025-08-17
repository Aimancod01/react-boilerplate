import type { FC } from "react";
import { isAdmin } from "../../../lib/authorization";
import { useAuthStore } from "../../../store/auth-store";

const Header: FC = () => {
  const { user } = useAuthStore();
  return (
    <header className="h-16 flex items-center justify-between pr-6">
      <h1 className="text-2xl font-semibold">
        Welcome, {isAdmin(user) ? "Admin" : "User"}
      </h1>
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
