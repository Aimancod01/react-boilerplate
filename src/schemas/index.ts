import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
    role: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passowrds must match",
    path: ["confirmPassword"],
  });
export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
