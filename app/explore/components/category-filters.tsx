'use client';

import { cn } from '@/lib/utils';
import { categories } from '../data/categories';

interface CategoryFiltersProps {
   activeCategory: string;
   onCategoryChange: (category: string) => void;
}

export default function CategoryFilters({
   activeCategory,
   onCategoryChange,
}: CategoryFiltersProps) {
   return (
      <div className='flex flex-wrap gap-2 justify-center'>
         {categories.map((category) => {
            const Icon = category.icon;
            return (
               <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={cn(
                     'flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors',
                     activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  )}
               >
                  <Icon size={20} />
                  <span>{category.name}</span>
               </button>
            );
         })}
      </div>
   );
}
