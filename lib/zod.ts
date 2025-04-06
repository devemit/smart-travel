import { z } from 'zod';

const baseFormSchema = z.object({
   name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long' })
      .max(50, { message: 'Name must be at most 50 characters long' })
      .regex(/^[a-zA-Z0-9\s-_]+$/, {
         message: 'Name can only contain letters, numbers, spaces, hyphens, and underscores',
      })
      .trim(),
   email: z
      .string()
      .email({ message: 'Email must be a valid email address' })
      .min(5, { message: 'Email must be at least 5 characters long' })
      .max(100, { message: 'Email must be at most 100 characters long' })
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
         message: 'Invalid email format',
      })
      .trim()
      .toLowerCase(),
   password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(100, { message: 'Password cannot exceed 100 characters' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' })
      .refine((val) => !/\s/.test(val), { message: 'Password cannot contain whitespace' }),
   confirmPassword: z.string().optional(),
});

export const formSchema = baseFormSchema.refine(
   (data) => {
      if (data.confirmPassword) {
         return data.password === data.confirmPassword;
      }
      return true;
   },
   {
      message: "Passwords don't match",
      path: ['confirmPassword'],
   }
);

export const signInFormSchema = baseFormSchema.pick({
   email: true,
   password: true,
});
