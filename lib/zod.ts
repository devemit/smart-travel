import { z } from 'zod';

export const formSchema = z.object({
   name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' })
      .max(50, { message: 'Name must be at most 50 characters long' }),
   email: z
      .string()
      .email({ message: 'Email must be a valid email address' })
      .min(2)
      .max(50)
      .nonempty({ message: 'Email is required' }),
   password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(50, { message: 'Password cannot exceed 50 characters' }),
});

export const signInFormSchema = formSchema.pick({
   email: true,
   password: true,
});
