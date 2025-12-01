import * as z from "zod";

export const registrationSchema = z.object({
  name: z.string().nonempty("All field required").min(3),
  email: z.string().email("Invalid Email").nonempty("All fields required"),
  password: z.string().nonempty("All fields required").min(8),
  role: z.string().nonempty("Select one role"),
});

export type RegisterInput = z.infer<typeof registrationSchema>;

//Login Schema
export const loginSchema = z.object({
  email: z.string().email("Invalid Email").nonempty("All fields required"),
  password: z.string().nonempty("All fields required").min(8),
});

export type LoginInput = z.infer<typeof loginSchema>;
