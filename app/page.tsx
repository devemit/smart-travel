import FeaturedDestinations from '@/components/featured-destinations';
import HeroSection from '@/components/hero-section';
import RecentTrips from '@/components/recent-trips';
import TravelSearch from '@/components/travel-search';

export default function Home() {
   return (
      <main className='flex flex-col min-h-screen'>
         <HeroSection />
         <TravelSearch />
         <FeaturedDestinations />
         <RecentTrips />
      </main>
   );
}
