import { Metadata } from 'next';

import ExploreContent from './components/explore-content';

export const metadata: Metadata = {
   title: 'Explore - Smart Travel',
   description: 'Discover amazing destinations and experiences for your next adventure',
};

export default function ExplorePage() {
   return (
      <main className='container mx-auto px-4 py-8'>
         <ExploreContent />
      </main>
   );
}
