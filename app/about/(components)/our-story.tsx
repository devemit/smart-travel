import { Button } from '@/components/ui/button';

import Image from 'next/image';

export default function OurStory() {
   return (
      <section className='container mx-auto px-6 py-16'>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
               <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>Our Story</h2>
               <div className='space-y-4 text-gray-700'>
                  <p>
                     Smart Travel was founded in 2020 with a simple yet ambitious mission: to make
                     travel planning smarter, more personalized, and accessible to everyone. What
                     started as a small team of travel enthusiasts and tech innovators has grown
                     into a global platform serving travelers worldwide.
                  </p>
                  <p>
                     Our journey began when our founders, experienced travelers themselves, realized
                     that despite the abundance of travel resources available online, planning trips
                     remained a fragmented and often overwhelming experience. They envisioned a
                     platform that would leverage technology to provide truly personalized travel
                     recommendations tailored to each traveler's preferences.
                  </p>
                  <p>
                     Today, Smart Travel combines artificial intelligence, real-time data, and human
                     expertise to create seamless travel experiences. We're proud to help millions
                     of users discover new destinations, create unforgettable memories, and travel
                     with confidence.
                  </p>
               </div>
               <Button className='mt-6'>Learn More About Our Vision</Button>
            </div>
            <div className='relative h-[400px] rounded-xl overflow-hidden shadow-xl'>
               <Image
                  src='https://plus.unsplash.com/premium_photo-1661933707147-3b1840e63102?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Smart Travel team'
                  fill
                  className='object-cover'
               />
            </div>
         </div>
      </section>
   );
}
