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

const SignUp = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      if (formData.password !== formData.confirmPassword) {
         setError('Passwords do not match');
         setIsLoading(false);
         return;
      }

      try {
         // Implement your sign up logic here
         console.log('Sign up with:', formData);
         // Redirect after successful sign up
      } catch (err) {
         setError('Failed to create account. Please try again.');
         console.error(err);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
         <Card className='w-full max-w-md'>
            <CardHeader className='space-y-1'>
               <CardTitle className='text-2xl font-bold text-center'>Create an account</CardTitle>
               <CardDescription className='text-center'>
                  Enter your information to create an account
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
                  <div className='grid grid-cols-2 gap-4'>
                     <div className='space-y-2'>
                        <Label htmlFor='firstName'>First name</Label>
                        <Input
                           id='firstName'
                           name='firstName'
                           value={formData.firstName}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className='space-y-2'>
                        <Label htmlFor='lastName'>Last name</Label>
                        <Input
                           id='lastName'
                           name='lastName'
                           value={formData.lastName}
                           onChange={handleChange}
                           required
                        />
                     </div>
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='email'>Email</Label>
                     <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='name@example.com'
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='password'>Password</Label>
                     <Input
                        id='password'
                        name='password'
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='confirmPassword'>Confirm Password</Label>
                     <Input
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <Button type='submit' className='w-full' disabled={isLoading}>
                     {isLoading ? 'Creating account...' : 'Sign up'}
                  </Button>
               </form>
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
