'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Check, SlidersHorizontal, Grid, Map } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
   const [selectedCategory, setSelectedCategory] = useState<string>('all');
   const [selectedRegion, setSelectedRegion] = useState<string>('global');
   const [showFilters, setShowFilters] = useState<boolean>(false);

   return (
      <div className='flex flex-col space-y-4'>
         <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Destinations</h2>
            <div className='flex items-center space-x-2'>
               <Button
                  variant='outline'
                  size='sm'
                  onClick={() => setShowFilters(!showFilters)}
                  className='flex items-center gap-1'
               >
                  <SlidersHorizontal size={16} />
                  <span className='hidden sm:inline'>Filters</span>
               </Button>
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

         {showFilters && (
            <Card className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div>
                  <h3 className='font-medium mb-2'>Categories</h3>
                  <div className='flex flex-wrap gap-2'>
                     {categories.map((category) => (
                        <button
                           key={category.id}
                           onClick={() => setSelectedCategory(category.id)}
                           className={cn(
                              'px-3 py-1.5 rounded-full text-sm flex items-center gap-1',
                              selectedCategory === category.id
                                 ? 'bg-primary text-white'
                                 : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                           )}
                        >
                           {selectedCategory === category.id && <Check size={14} />}
                           <span>{category.name}</span>
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className='font-medium mb-2'>Regions</h3>
                  <div className='flex flex-wrap gap-2'>
                     {regions.map((region) => (
                        <button
                           key={region.id}
                           onClick={() => setSelectedRegion(region.id)}
                           className={cn(
                              'px-3 py-1.5 rounded-full text-sm flex items-center gap-1',
                              selectedRegion === region.id
                                 ? 'bg-primary text-white'
                                 : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                           )}
                        >
                           {selectedRegion === region.id && <Check size={14} />}
                           <span>{region.name}</span>
                        </button>
                     ))}
                  </div>
               </div>
            </Card>
         )}
      </div>
   );
}
