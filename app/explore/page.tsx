import { Metadata } from 'next';

import ExploreHero from './components/explore-hero';
import CategoryFilters from './components/category-filters';
import FeaturedCollections from './components/featured-collections';
import ExperienceGallery from './components/experience-gallery';
import TrendingDestinations from './components/trending-destinations';
import InteractiveMap from './components/interactive-map';

export const metadata: Metadata = {
   title: 'Explore - Smart Travel',
   description: 'Discover amazing destinations and experiences for your next adventure',
};

export default function ExplorePage() {
   return (
      <main className='flex flex-col min-h-screen'>
         <ExploreHero />
         <div className='container mx-auto px-4 sm:px-6 py-8'>
            <CategoryFilters />
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
               <div className='lg:col-span-2 space-y-12'>
                  <FeaturedCollections />
                  <ExperienceGallery />
                  <TrendingDestinations />
               </div>
               <div>
                  <div className='sticky top-24'>
                     <InteractiveMap />
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
