import type { FC } from "react";
import Button from "../components/ui/button";
import { useAuthStore } from "../store/auth-store";
import { useNavigate } from "react-router-dom";

const Landing: FC = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-primary">MyApp</h1>
        <nav className="space-x-2">
          {isAuthenticated ? (
            <Button
              title="Dashboard"
              className="w-20"
              variant="primary"
              size="sm"
              onClick={() => navigate("/dashboard")}
              type="submit"
            />
          ) : (
            <Button
              title="Login"
              variant="primary"
              className="w-20"
              size="sm"
              onClick={() => navigate("/login")}
              type="submit"
            />
          )}
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-r from-primary to-primary/50 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-6 max-w-2xl">
          A modern solution to simplify your workflow and boost productivity.
        </p>
      </section>

      <section className="py-16 px-6 grid gap-8 md:grid-cols-3 text-center max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-bold mb-2">⚡ Fast</h3>
          <p>Experience lightning-fast performance built for modern apps.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-bold mb-2">🔒 Secure</h3>
          <p>Your data is protected with enterprise-grade security.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-bold mb-2">🎨 Customizable</h3>
          <p>Easily adaptable to match your brand and requirements.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Join now and build something amazing with us!</p>
      </section>
    </div>
  );
};

export default Landing;
