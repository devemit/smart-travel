'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { authRoutes, navConfig } from '@/utils/navigation-config';

import MobileNav from './mobile-nav';

import { Button } from './ui/button';
import { useAuthState } from '@/hooks/useAuthState';
import { MapPin } from 'lucide-react';

export default function Navbar() {
   const { isAuthenticated, user, logout } = useAuthState();
   const pathname = usePathname();

   return (
      <>
         <nav className='bg-white shadow-sm border-b-2 py-4 px-6'>
            <div className='container mx-auto flex justify-between items-center h-10'>
               <Link href='/' className='flex items-center'>
                  <div className='flex items-center gap-1.5'>
                     <MapPin className='h-5 w-5 text-blue-600' />
                     <span className='font-bold text-xl tracking-tight'>
                        <span className='text-blue-600'>Easy</span>
                        <span className='text-gray-800'>Travel</span>
                     </span>
                  </div>
               </Link>

               <div className='space-x-8 hidden md:flex items-center'>
                  {navConfig.map((item) => {
                     const isActive =
                        pathname === item.path ||
                        (item.path !== '/' && pathname.startsWith(item.path));

                     return (
                        <Link
                           key={item.path}
                           href={item.path}
                           className={cn(
                              'relative font-medium text-sm lowercase tracking-wide transition-colors duration-200',
                              isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                           )}
                        >
                           {item.title.toLowerCase()}
                           {isActive && (
                              <span className='absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full' />
                           )}
                        </Link>
                     );
                  })}
               </div>

               {/* Desktop auth UI */}
               <div className='hidden md:block'>
                  {isAuthenticated ? (
                     <div className='flex items-center gap-2'>
                        <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium'>
                           {getInitials(user?.name || 'User')}
                        </div>

                        <Button variant='ghost' size='sm' onClick={() => logout()}>
                           Sign Out
                        </Button>
                     </div>
                  ) : (
                     <div className='space-x-2'>
                        {authRoutes.map((item) => (
                           <Button
                              key={item.path}
                              variant={item.title === 'Sign In' ? 'outline' : 'default'}
                              asChild
                           >
                              <Link href={item.path}>{item.title}</Link>
                           </Button>
                        ))}
                     </div>
                  )}
               </div>

               <div className='md:hidden'>
                  {isAuthenticated ? (
                     <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium'>
                        {getInitials(user?.name || 'User')}
                     </div>
                  ) : (
                     <div className='flex space-x-2'>
                        {authRoutes.map((item) => (
                           <Button
                              key={item.path}
                              variant={item.title === 'Sign In' ? 'outline' : 'default'}
                              size='sm'
                              asChild
                           >
                              <Link href={item.path}>
                                 {item.title === 'Sign In' ? 'Sign In' : 'Sign Up'}
                              </Link>
                           </Button>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </nav>
         <MobileNav />
      </>
   );
}

function getInitials(name: string): string {
   return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
}
