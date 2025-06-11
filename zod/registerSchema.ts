import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
