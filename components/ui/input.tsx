import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   viewPassword?: boolean;
}

function Input({ className, type, viewPassword, ...props }: InputProps) {
   const [showPassword, setShowPassword] = React.useState(false);
   const isPassword = type === 'password';
   const inputType = isPassword && showPassword ? 'text' : type;

   return (
      <div className='relative'>
         <input
            type={inputType}
            data-slot='input'
            className={cn(
               'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
               'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
               'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
               isPassword && viewPassword && 'pr-10',
               className
            )}
            {...props}
         />
         {isPassword && viewPassword && (
            <button
               type='button'
               onClick={() => setShowPassword(!showPassword)}
               className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none'
            >
               {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
            </button>
         )}
      </div>
   );
}

export { Input };
