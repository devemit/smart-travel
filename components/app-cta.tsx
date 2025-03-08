import { Button } from './ui/button';

import Link from 'next/link';

export default function AppCTA() {
   return (
      <section className='bg-gradient-to-r from-primary to-blue-700 py-16'>
         <div className='container mx-auto px-6 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
               Ready to Start Your Next Adventure?
            </h2>
            <p className='text-white/90 max-w-2xl mx-auto mb-8'>
               Create an account today to get personalized travel recommendations, save your
               favorite destinations, and plan your dream trips.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
               <Button
                  size='lg'
                  variant='default'
                  className='bg-white text-primary hover:bg-white/90'
                  asChild
               >
                  <Link href='/auth/signup'>Sign Up Free</Link>
               </Button>
               <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white/20'
                  asChild
               >
                  <Link href='/destinations'>Explore Destinations</Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
