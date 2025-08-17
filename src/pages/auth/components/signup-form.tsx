import AuthLayout from "../../../components/layouts/auth";
import Input from "../../../components/ui/form/input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../../schemas";

const SignUpForm = () => {
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: { email: string; password: string }) {
    console.log(data);
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
        <Input
          type="password"
          label="Confirm Password"
          error={formState.errors["confirmPassword"]}
          registration={register("confirmPassword")}
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUpForm;
