import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navConfig } from '@/utils/navigation-config';
import { getSession } from '@/actions/authActions';

import { Home, Globe, Compass, Cloud, Info, LayoutDashboard } from 'lucide-react';

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
      case 'Dashboard':
         return <LayoutDashboard size={20} />;
      default:
         return <Info size={20} />;
   }
};

export default function MobileNav() {
   const mobileNavItems = navConfig.slice(0, 6);

   const session = getSession();

   return (
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50'>
         <div className='flex justify-around py-3'>
            {mobileNavItems.map((item) => {
               if (item.path === '/dashboard' && !session) return;

               return (
                  <Link
                     key={item.path}
                     href={item.path}
                     className='flex flex-col items-center text-xs transition-colors'
                  >
                     <div className={cn('mb-1 text-gray-600')}>{getIconForNavItem(item.title)}</div>
                     <span className={cn('text-gray-600')}>{item.title}</span>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
