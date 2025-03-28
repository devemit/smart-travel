'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { SlidersHorizontal, Grid, Map } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const categories = [
   { id: 'all', name: 'All' },
   { id: 'popular', name: 'Popular' },
   { id: 'trending', name: 'Trending' },
   { id: 'beach', name: 'Beaches' },
   { id: 'mountain', name: 'Mountains' },
   { id: 'city', name: 'Cities' },
   { id: 'countryside', name: 'Countryside' },
   { id: 'historical', name: 'Historical' },
];

const regions = [
   { id: 'global', name: 'Global' },
   { id: 'europe', name: 'Europe' },
   { id: 'asia', name: 'Asia' },
   { id: 'americas', name: 'Americas' },
   { id: 'africa', name: 'Africa' },
   { id: 'oceania', name: 'Oceania' },
];

export default function DestinationFilters() {
   const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
   const [showTooltip, setShowTooltip] = useState(false);

   return (
      <div className='flex flex-col space-y-4'>
         <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Destinations</h2>
            <div className='flex items-center space-x-2'>
               <TooltipProvider>
                  <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                     <TooltipTrigger asChild>
                        <Button
                           variant='outline'
                           size='sm'
                           className='flex items-center gap-1'
                           onClick={() => setShowTooltip(true)}
                        >
                           <SlidersHorizontal size={16} />
                           <span className='hidden sm:inline'>Filters</span>
                        </Button>
                     </TooltipTrigger>
                     <TooltipContent side='bottom' className='bg-white text-black border shadow-lg'>
                        <p className='font-medium'>Coming Soon!</p>
                        <p className='text-sm text-gray-500'>
                           Filters will be available in the next update.
                        </p>
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
               <div className='bg-gray-100 rounded-md p-1 flex'>
                  <button
                     onClick={() => setViewMode('grid')}
                     className={cn(
                        'p-1.5 rounded-md',
                        viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-500'
                     )}
                  >
                     <Grid size={16} />
                  </button>
                  <button
                     onClick={() => setViewMode('map')}
                     className={cn(
                        'p-1.5 rounded-md',
                        viewMode === 'map' ? 'bg-white shadow' : 'text-gray-500'
                     )}
                  >
                     <Map size={16} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
