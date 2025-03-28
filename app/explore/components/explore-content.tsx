'use client';

import { useState } from 'react';
import CategoryFilters from './category-filters';
import FeaturedCollections from './featured-collections';

export default function ExploreContent() {
   const [activeCategory, setActiveCategory] = useState('all');

   return (
      <div className='space-y-8'>
         <CategoryFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
         <FeaturedCollections activeCategory={activeCategory} />
      </div>
   );
}
