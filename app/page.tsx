import AppCTA from '@/components/app-cta';
import AppFeatures from '@/components/app-features';
import FeaturedDestinations from '@/components/featured-destinations';
import HeroSection from '@/components/hero-section';
import PopularExperiences from '@/components/popular-experiences';
import Testimonials from '@/components/testimonials';
import TravelTips from '@/components/travel-tips';

export default function Home() {
   return (
      <main className='flex flex-col min-h-screen overflow-x-hidden'>
         <HeroSection />
         <AppFeatures />
         <FeaturedDestinations />
         <PopularExperiences />
         <Testimonials />
         <TravelTips />
         <AppCTA />
      </main>
   );
}
