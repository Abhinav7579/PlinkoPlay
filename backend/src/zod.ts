import { z} from "zod";

export const userRequiredBody = z.object({
  name: z.string(),
  email: z.string()
    .email({ message: "Invalid email format" })
    .refine((email) => email.endsWith("@gmail.com"), {
      message: "Email must be a Gmail address",
    }),
  password: z.string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(10, { message: "Password must be at most 10 characters" })
});
 export const SigninRequiredbody = z.object({
        email: z.string().email().refine((email) => email.endsWith("@gmail.com")),
        password: z.string().min(4, { message: "Password must be at least 4 characters" }).max(10, { message: "Password must be at most 10 characters" })
    });
    