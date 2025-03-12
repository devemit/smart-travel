'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInFormSchema } from '@/lib/zod';
import { authClient } from '@/lib/auth-client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const SignIn = () => {
   const [isLoading, setIsLoading] = useState(false);

   const form = useForm<z.infer<typeof signInFormSchema>>({
      resolver: zodResolver(signInFormSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   });

   async function onSubmit(values: z.infer<typeof signInFormSchema>) {
      const { email, password } = values;
      setIsLoading(true);

      try {
         const {} = await authClient.signIn.email(
            {
               email,
               password,
               callbackURL: '/dashboard',
            },
            {
               onRequest: () => {
                  toast('Logging in...');
               },
               onSuccess: () => {
                  form.reset();
               },
               onError: (ctx) => {
                  toast(ctx.error.message);
               },
            }
         );
      } catch {
         toast('An error occurred. Please try again.');
      } finally {
         setIsLoading(false);
      }
   }

   return (
      <div className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
         <Card className='w-full max-w-md'>
            <CardHeader className='space-y-1'>
               <CardTitle className='text-2xl font-bold text-center'>
                  Sign in to your account
               </CardTitle>
               <CardDescription className='text-center'>
                  Enter your email and password to sign in
               </CardDescription>
            </CardHeader>

            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                     <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input type='email' placeholder='johndoe@smart.com' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                 <Input
                                    type='password'
                                    placeholder='Enter your password'
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button className='w-full' type='submit' disabled={isLoading}>
                        {isLoading ? (
                           <>
                              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                              Logging in...
                           </>
                        ) : (
                           'Login'
                        )}
                     </Button>
                  </form>
               </Form>
            </CardContent>

            <CardFooter className='flex flex-col'>
               <div className='text-center text-sm'>
                  Don&apos;t have an account?{' '}
                  <Link href='/signup' className='font-medium text-primary hover:underline'>
                     Create an account
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
};

export default SignIn;
