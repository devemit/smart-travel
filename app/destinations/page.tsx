import { Metadata } from 'next';

import DestinationsHero from './components/destinations-hero';
import DestinationFilters from './components/destination-filters';
import FeaturedDestination from './components/featured-destination';
import DestinationsGrid from './components/destinations-grid';
import PopularRegions from './components/popular-regions';

export const metadata: Metadata = {
   title: 'Destinations - Smart Travel',
   description: 'Explore amazing destinations around the world for your next adventure',
};

export default function DestinationsPage() {
   return (
      <main className='flex flex-col min-h-screen'>
         <DestinationsHero />

         <div className='container mx-auto px-4 sm:px-6 py-8'>
            <DestinationFilters />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
               <div className='lg:col-span-2 space-y-10'>
                  <FeaturedDestination />
                  <DestinationsGrid />
               </div>

               <div className='space-y-8'>
                  <PopularRegions />
               </div>
            </div>
         </div>
      </main>
   );
}
