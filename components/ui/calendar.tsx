'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = {
   selected?: Date;
   onSelect?: (date: Date | undefined) => void;
   className?: string;
   disabled?: boolean;
};

function Calendar({ selected, onSelect, className, disabled }: CalendarProps) {
   const [currentMonth, setCurrentMonth] = React.useState(new Date());

   const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
   ).getDate();

   const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
   ).getDay();

   const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   const goToPreviousMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
   };

   const goToNextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
   };

   const handleDayClick = (day: number) => {
      if (disabled) return;
      const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      onSelect?.(newDate);
   };

   const isToday = (day: number) => {
      const today = new Date();
      return (
         day === today.getDate() &&
         currentMonth.getMonth() === today.getMonth() &&
         currentMonth.getFullYear() === today.getFullYear()
      );
   };

   const isSelected = (day: number) => {
      if (!selected) return false;
      return (
         day === selected.getDate() &&
         currentMonth.getMonth() === selected.getMonth() &&
         currentMonth.getFullYear() === selected.getFullYear()
      );
   };

   return (
      <div className={cn('p-3 border rounded-md', className)}>
         <div className='flex items-center justify-between mb-4'>
            <button
               type='button'
               onClick={goToPreviousMonth}
               className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
               )}
               disabled={disabled}
            >
               <ChevronLeft className='h-4 w-4' />
            </button>
            <div className='text-sm font-medium'>
               {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button
               type='button'
               onClick={goToNextMonth}
               className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
               )}
               disabled={disabled}
            >
               <ChevronRight className='h-4 w-4' />
            </button>
         </div>

         <div className='grid grid-cols-7 gap-1'>
            {weekDays.map((day) => (
               <div key={day} className='text-center text-xs font-medium text-gray-500'>
                  {day}
               </div>
            ))}

            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
               <div key={`empty-${index}`} className='h-9 w-9' />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
               const day = index + 1;
               return (
                  <button
                     key={day}
                     type='button'
                     onClick={() => handleDayClick(day)}
                     className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'h-9 w-9 p-0 font-normal',
                        isToday(day) &&
                           'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
                        isSelected(day) &&
                           'bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white dark:bg-blue-500 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white dark:focus:bg-blue-500 dark:focus:text-white',
                        disabled && 'opacity-50 cursor-not-allowed'
                     )}
                     disabled={disabled}
                  >
                     {day}
                  </button>
               );
            })}
         </div>
      </div>
   );
}

Calendar.displayName = 'Calendar';

export { Calendar };
