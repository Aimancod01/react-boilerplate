import type { FC } from "react";
import { isAdmin } from "../../../lib/authorization";
import { useAuthStore } from "../../../store/auth-store";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }
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
        <button
          onClick={handleLogout}
          className="bg-gray-400 hover:bg-gray-500 transition-all p-2 rounded-full cursor-pointer"
        >
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
