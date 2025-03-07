'use client';

import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const recentSearches = ['Tokyo, Japan', 'Paris, France', 'New York, USA', 'London, UK'];

export default function WeatherSearch() {
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 sm:mt-8'>
         <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <div className='relative flex-grow'>
               <MapPin
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={18}
               />
               <Input
                  placeholder='Enter city or location'
                  className='pl-10'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
            <Button className='bg-primary hover:bg-primary/90 text-white flex gap-2 items-center'>
               <Search size={16} />
               Get Weather
            </Button>
         </div>

         {recentSearches.length > 0 && (
            <div className='mt-3 sm:mt-4'>
               <p className='text-xs sm:text-sm text-gray-500 mb-2'>Recent searches:</p>
               <div className='flex flex-wrap gap-1 sm:gap-2'>
                  {recentSearches.map((search) => (
                     <button
                        key={search}
                        className='px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm text-gray-700 transition-colors'
                        onClick={() => setSearchTerm(search)}
                     >
                        {search}
                     </button>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
}
