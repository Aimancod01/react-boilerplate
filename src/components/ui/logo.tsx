import type { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/dashboard">
      <h2 className="text-2xl font-bold mb-8">Logo</h2>
    </Link>
  );
};

export default Logo;
