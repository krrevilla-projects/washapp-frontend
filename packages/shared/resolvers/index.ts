import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z
      .string()
      .email({ message: "Email is invalid" })
      .min(1, { message: "Email is required" }),
    contact: z
      .string()
      .length(12, { message: "Invalid contact number" })
      .startsWith("639", { message: "Invalid contact number" }),
    password: z.string().min(8, { message: "Password is required" }),
    confirmPassword: z.string().min(8, { message: "Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

const addressSchema = z.object({
  address: z.string().min(1, { message: "Address is required" }),
});

export const loginSchemaResolver = zodResolver(loginSchema);
export const registerSchemaResolver = zodResolver(registerSchema);
export const addressSchemaResolver = zodResolver(addressSchema);
