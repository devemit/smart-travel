'use client';

import React from 'react';
import Link from 'next/link';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema } from '@/lib/zod';
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
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

const SignUp = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         password: '',
      },
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      const { name, email, password } = values;
      const {} = await authClient.signUp.email(
         {
            email,
            password,
            name,
            callbackURL: '/signin',
         },
         {
            onRequest: () => {
               toast('Creating your account...');
            },
            onSuccess: () => {
               form.reset();
            },
            onError: (ctx) => {
               toast(ctx.error.message);
            },
         }
      );
   }

   return (
      <div className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
         <Card className='w-full max-w-md'>
            <CardHeader className='space-y-1'>
               <CardTitle className='text-2xl font-bold text-center'>Create an account</CardTitle>
               <CardDescription className='text-center'>
                  Enter your details to create your account
               </CardDescription>
            </CardHeader>

            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                     <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                 <Input placeholder='John Doe' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
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
                                    placeholder='Create a strong password'
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button className='w-full' type='submit'>
                        Sign up
                     </Button>
                  </form>
               </Form>
            </CardContent>

            <CardFooter className='flex flex-col'>
               <div className='text-center text-sm'>
                  Already have an account?{' '}
                  <Link href='/signin' className='font-medium text-primary hover:underline'>
                     Sign in
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
};

export default SignUp;
