import Link from 'next/link';

import MobileNav from './mobile-nav';

import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

import { firstLetter } from '@/lib/helpers';
import { authRoutes, navConfig } from '@/utils/navigation-config';
import { getSession, signOutAction } from '@/actions/authActions';

export default async function Navbar() {
   const session = await getSession();
   const userName = session?.user?.name;

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
                     return (
                        <Link
                           key={item.path}
                           href={item.path}
                           className='relative text-gray-600 hover:text-gray-800 font-medium'
                        >
                           {item.title.toLowerCase()}
                        </Link>
                     );
                  })}
               </div>

               {/* Desktop auth UI */}
               <div className='hidden md:block'>
                  {session ? (
                     <div className='flex items-center gap-2'>
                        <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium'>
                           {firstLetter(userName as string).toUpperCase()}
                        </div>
                        <form action={signOutAction}>
                           <Button
                              className='cursor-pointer'
                              variant='ghost'
                              size='sm'
                              type='submit'
                           >
                              Sign Out
                           </Button>
                        </form>
                     </div>
                  ) : (
                     <div className='space-x-2'>
                        {authRoutes.map((item) => (
                           <Button key={item.path} asChild>
                              <Link href={item.path}>{item.title}</Link>
                           </Button>
                        ))}
                     </div>
                  )}
               </div>

               <div className='md:hidden'>
                  {session ? (
                     <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium'>
                        {firstLetter(userName as string).toUpperCase()}
                     </div>
                  ) : (
                     <div className='space-x-2'>
                        {authRoutes.map((item) => (
                           <Button key={item.path} asChild className='cursor-pointer'>
                              <Link href={item.path}>{item.title}</Link>
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
