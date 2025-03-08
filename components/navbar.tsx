'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

import MobileNav from './mobile-nav';

import { Button } from './ui/button';

import { authRoutes, navConfig } from '@/utils/navigation-config';
import { useAuthState } from '@/hooks/useAuthState';

export default function Navbar() {
   const { isAuthenticated, user, logout } = useAuthState();

   return (
      <>
         <nav className='bg-white border-b shadow-sm py-4 px-6'>
            <div className='container mx-auto flex justify-between items-center h-10'>
               <Link href='/' className='flex items-center'>
                  <Image
                     src={logo}
                     alt='Smart Travel Logo'
                     className='w-auto object-contain'
                     width={120}
                     height={16}
                     priority
                  />
               </Link>

               {/* Desktop nav items */}
               <div className='space-x-6 hidden md:flex items-center'>
                  {navConfig.map((item) => (
                     <Link
                        key={item.path}
                        href={item.path}
                        className='hover:text-primary transition'
                     >
                        {item.title}
                     </Link>
                  ))}
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
