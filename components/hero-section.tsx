import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { getSession } from '@/actions/authActions';
import { Button } from './ui/button';
import { Tabs } from './tabs';

export default async function HeroSection() {
   const session = await getSession();

   const tabs = [
      {
         title: 'Discover',
         description: 'Find hidden gems and popular destinations around the world',
         image: 'https://plus.unsplash.com/premium_photo-1661440155420-51563c18d8d8?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         title: 'Plan',
         description: 'Create perfect itineraries tailored to your travel style',
         image: 'https://images.unsplash.com/photo-1615826932727-ed9f182ac67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         title: 'Experience',
         description: 'Make unforgettable memories with smart travel recommendations',
         image: 'https://images.unsplash.com/photo-1474452926969-af7bfdb9ca39?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
   ];

   return (
      <section className='relative overflow-hidden bg-gradient-to-tr from-blue-900 to-indigo-800'>
         {/* Decorative elements */}
         <div className='absolute inset-0 opacity-20'>
            <div className='absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl'></div>
            <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl'></div>
         </div>

         <div className='container mx-auto px-6 py-20 md:py-28 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
               <div className='text-white'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                     <span className='block'>Travel Smarter,</span>
                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-300'>
                        Not Harder
                     </span>
                  </h1>

                  <p className='text-lg md:text-xl text-blue-100 mb-8 max-w-lg'>
                     EasyTravel transforms how you explore the world with AI-powered trip planning,
                     real-time weather insights, and personalized recommendations.
                  </p>

                  <div className='flex flex-wrap gap-4'>
                     <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50' asChild>
                        <Link href={session ? '/dashboard' : '/signup'}>
                           {session ? 'Dashboard' : 'Start Free'}{' '}
                           <ArrowRight className='ml-2 h-5 w-5' />
                        </Link>
                     </Button>

                     <Button
                        size='lg'
                        className='border-white bg-blue-600 hover:bg-white/10'
                        asChild
                     >
                        <Link href='/about'>Learn More</Link>
                     </Button>
                  </div>

                  <div className='mt-8 flex items-center'>
                     <div className='flex -space-x-2'>
                        {[...Array(4)].map((_, i) => (
                           <div
                              key={i}
                              className='w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-blue-600'
                           />
                        ))}
                     </div>
                     <p className='ml-4 text-sm'>
                        <span className='font-semibold'>1000+</span> travelers trust EasyTravel
                     </p>
                  </div>
               </div>

               <div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl'>
                     <Tabs tabs={tabs} />
                  </div>
               </div>
            </div>
         </div>

         <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent'></div>
      </section>
   );
}
