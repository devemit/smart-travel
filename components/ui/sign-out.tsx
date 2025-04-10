import { Button } from './button';
import { LogOut } from 'lucide-react';

export const SignOut = () => {
   return (
      <Button
         className='cursor-pointer text-gray-600 hover:text-red-500 transition-colors'
         variant='ghost'
         size='sm'
         type='submit'
      >
         <LogOut className='h-3.5 w-3.5' />
         <span className='text-xs'>Sign Out</span>
      </Button>
   );
};
