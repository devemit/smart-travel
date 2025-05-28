import { Metadata } from 'next';

import CompanyValues from '@/app/about/(components)/company-values';
import AboutHero from '@/app/about/(components)/about-hero';

import OurStory from './(components)/our-story';
import ContactSection from './(components)/contact-section';

export const metadata: Metadata = {
   title: 'About Us - Easy Travel',
   description: 'Learn about Easy Travel, our mission, team, and values.',
};

export default function AboutPage() {
   return (
      <main className='flex flex-col min-h-screen'>
         <AboutHero />
         <OurStory />
         <CompanyValues />
         <ContactSection />
      </main>
   );
}
