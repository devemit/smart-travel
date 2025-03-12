'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signOutAction = async () => {
   await auth.api.signOut({
      headers: await headers(),
   });
   redirect('/');
};

export const getSession = async () => {
   return await auth.api.getSession({
      headers: await headers(),
   });
};
