import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/dashboard/components/sidebar";
import Header from "../../pages/dashboard/components/header";

const DashboardLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto bg-white rounded-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
