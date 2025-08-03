import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="h-16 flex items-center justify-between pr-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
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
