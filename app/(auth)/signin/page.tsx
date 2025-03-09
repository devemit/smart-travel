'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema, signInFormSchema } from '@/lib/zod';

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

const SignIn = () => {
   let error = '';
   const form = useForm<z.infer<typeof signInFormSchema>>({
      resolver: zodResolver(signInFormSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   });

   function onSubmit(values: z.infer<typeof signInFormSchema>) {
      console.log(values, 'values');
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

            {error && (
               <CardContent>
                  <Alert variant='destructive'>
                     <AlertDescription>{error}</AlertDescription>
                  </Alert>
               </CardContent>
            )}

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
                     <Button className='w-full' type='submit'>
                        Submit
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
