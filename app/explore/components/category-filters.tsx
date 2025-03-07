'use client';

import { Compass, Mountain, Utensils, Waves, Trees, Building2, Users, Plane } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = [
   { id: 'all', name: 'All', icon: <Compass size={20} /> },
   { id: 'adventure', name: 'Adventure', icon: <Mountain size={20} /> },
   { id: 'culinary', name: 'Culinary', icon: <Utensils size={20} /> },
   { id: 'beach', name: 'Beaches', icon: <Waves size={20} /> },
   { id: 'nature', name: 'Nature', icon: <Trees size={20} /> },
   { id: 'city', name: 'City Life', icon: <Building2 size={20} /> },
   { id: 'family', name: 'Family', icon: <Users size={20} /> },
   { id: 'luxury', name: 'Luxury', icon: <Plane size={20} /> },
];

export default function CategoryFilters() {
   const [activeCategory, setActiveCategory] = useState('all');

   return (
      <div className='flex flex-wrap gap-2 justify-center'>
         {categories.map((category) => (
            <button
               key={category.id}
               onClick={() => setActiveCategory(category.id)}
               className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors',
                  activeCategory === category.id
                     ? 'bg-primary text-white'
                     : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
               )}
            >
               {category.icon}
               <span>{category.name}</span>
            </button>
         ))}
      </div>
   );
}
