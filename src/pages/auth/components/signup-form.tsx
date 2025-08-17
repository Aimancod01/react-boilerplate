import AuthLayout from "../../../components/layouts/auth";
import Input from "../../../components/ui/form/input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, type TSignUpSchema } from "../../../schemas";
import Select from "../../../components/ui/form/select";
import Button from "../../../components/ui/button";

const SignUpForm = () => {
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: TSignUpSchema) {
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
        <Select
          label="Select Role"
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Manager", value: "manager" },
            { label: "Guest", value: "guest" },
          ]}
          defaultValue="user"
          registration={register("role")}
        />
        <Button
          title="Sign up"
          variant="primary"
          className="w-full"
          size="md"
          onClick={() => console.log("clicked")}
          type="submit"
        />
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
