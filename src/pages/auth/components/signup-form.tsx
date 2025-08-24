import AuthLayout from "../../../components/layouts/auth";
import Input from "../../../components/ui/form/input";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, type TSignUpSchema } from "../../../schemas";
import Button from "../../../components/ui/button";
import { useRegister } from "../../../services/auth-service";
import Select from "../../../components/ui/form/select";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/login");
      reset();
    },
  });

  async function onSubmit(data: TSignUpSchema) {
    console.log(data);
    mutate({
      email: data.email,
      password: data.password,
      name: data.name,
      role_id: 2, // Default role as 'User'
    });
  }
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          type="text"
          label="Name"
          error={formState.errors["name"]}
          registration={register("name")}
        />
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
          loading={isPending}
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
