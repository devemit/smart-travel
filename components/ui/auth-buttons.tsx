import Link from 'next/link';
import { Button } from './button';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
   routes: Array<{ title: string; path: string }>;
}

export const AuthButtons = ({ routes }: AuthButtonsProps) => {
   return (
      <div className='flex items-center gap-2'>
         {routes.map((item) => {
            const isSignIn = item.title === 'Sign In';
            const Icon = isSignIn ? LogIn : UserPlus;

            return (
               <Button
                  key={item.path}
                  asChild
                  variant={isSignIn ? 'outline' : 'default'}
                  size='sm'
                  className={`${
                     isSignIn
                        ? 'border-blue-500 text-blue-500 hover:bg-blue-50'
                        : 'bg-blue-600 hover:bg-blue-700'
                  }`}
               >
                  <Link href={item.path} className='flex items-center gap-1.5'>
                     <Icon className='h-3.5 w-3.5' />
                     <span>{item.title}</span>
                  </Link>
               </Button>
            );
         })}
      </div>
   );
};
