import { ArrowBigLeft } from "lucide-react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <main className="h-screen flex items-center justify-center flex-col space-y-3">
      <p className="text-xl">404</p>
      <h2 className="text-3xl font-bold">Page not found</h2>
      <p className="text-gray-500 text-lg">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-x-2 px-5 py-2 bg-primary text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 duration-200 transition-all"
      >
        <ArrowBigLeft /> <span>Go back</span>
      </button>
    </main>
  );
};

export default NotFound;
