'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const session = await authClient.getSession();
            if (!session) {
               router.push('/signin');
            } else {
               setIsLoading(false);
            }
         } catch (error) {
            console.error('Authentication error:', error);
            router.push('/signin');
         }
      };

      checkAuth();
   }, [router]);

   if (isLoading) {
      return (
         <div className='min-h-screen flex items-center justify-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
            <span className='ml-3 text-lg'>Loading your dashboard...</span>
         </div>
      );
   }

   return <>{children}</>;
}
