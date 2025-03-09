'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      try {
         // Implement your sign in logic here
         console.log('Sign in with:', { email, password });
         // Redirect after successful sign in
      } catch (err) {
         setError('Failed to sign in. Please check your credentials.');
         console.error(err);
      } finally {
         setIsLoading(false);
      }
   };

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
               <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='space-y-2'>
                     <Label htmlFor='email'>Email</Label>
                     <Input
                        id='email'
                        type='email'
                        placeholder='name@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                  </div>
                  <div className='space-y-2'>
                     <Label htmlFor='password'>Password</Label>
                     <Input
                        id='password'
                        type='password'
                        placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                     />
                  </div>

                  <Button type='submit' className='w-full' disabled={isLoading}>
                     {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
               </form>
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
