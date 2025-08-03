import type { FC } from "react";
import Logo from "../../../components/ui/logo";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../data";
import { cn } from "../../../utils/cn";

const Sidebar: FC = () => {
  return (
    <aside className="w-64 min-h-screen p-4 flex-shrink-0">
      <Logo />
      <nav className="space-y-4">
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.link}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-4 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-white shadow-lg font-bold"
                      : "hover:bg-white/60"
                  )
                }
              >
                <Icon className="mr-3" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </nav>
    </aside>
  );
};

export default Sidebar;
