import { useForm } from "react-hook-form";
import Input from "../../../components/ui/form/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/layouts/auth";
import { loginSchema, type TLoginSchema } from "../../../schemas";
import { useAuthStore } from "../../../store/auth-store";
import Button from "../../../components/ui/button";
import { useLogin } from "../../../services/auth-service";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin({
    onSuccess: (data) => {
      toast.success("Registration successful!");
      login(data.payload.user);
      localStorage.setItem("token", data.payload.accessToken);
      navigate("/dashboard");
      reset();
    },
  });

  async function onSubmit(data: TLoginSchema) {
    mutate({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          type="email"
          label="Email Address"
          error={formState.errors["email"]}
          registration={register("email")}
        />

        <Input
          type="password"
          label="Password"
          error={formState.errors["password"]}
          registration={register("password")}
        />
        <Button
          title="Login"
          variant="primary"
          className="w-full"
          size="md"
          loading={isPending}
          onClick={() => console.log("clicked")}
          type="submit"
        />
      </form>

      <p className="text-sm text-gray-500 text-center mt-5">
        Don’t have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Signup
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginForm;
