'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navConfig } from '@/utils/navigation-config';
import { cn } from '@/lib/utils';

import { Home, Globe, Compass, Cloud, Info } from 'lucide-react';

const getIconForNavItem = (title: string) => {
   switch (title) {
      case 'Home':
         return <Home size={20} />;
      case 'Destinations':
         return <Globe size={20} />;
      case 'Explore':
         return <Compass size={20} />;
      case 'Weather':
         return <Cloud size={20} />;
      case 'About':
         return <Info size={20} />;
      default:
         return <Info size={20} />;
   }
};

export default function MobileNav() {
   const pathname = usePathname();
   // Only show essential nav items on mobile to avoid overcrowding
   const mobileNavItems = navConfig.slice(0, 5); // Include up to 5 items

   return (
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50'>
         <div className='flex justify-around py-3'>
            {mobileNavItems.map((item) => {
               const isActive =
                  pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));

               return (
                  <Link
                     key={item.path}
                     href={item.path}
                     className='flex flex-col items-center text-xs transition-colors'
                  >
                     <div className={cn('mb-1', isActive ? 'text-primary' : 'text-gray-600')}>
                        {getIconForNavItem(item.title)}
                     </div>
                     <span className={cn(isActive ? 'text-primary font-medium' : 'text-gray-600')}>
                        {item.title}
                     </span>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
