import Link from 'next/link';
import { Button } from './ui/button';
import { BadgeCheck } from 'lucide-react';
import { getSession } from '@/actions/authActions';

export default async function AppCTA() {
   const session = await getSession();
   const benefits = [
      'Personalized trip planning',
      'Real-time weather updates',
      'Budget management tools',
      'Local recommendations',
      '24/7 travel assistance',
   ];

   return (
      <section className='py-16 bg-gradient-to-tr from-blue-900 to-indigo-800 text-white'>
         <div className='container mx-auto px-6'>
            <div className='grid md:grid-cols-2 gap-10 items-center'>
               <div>
                  <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                     Ready to Transform Your Travel Experience?
                  </h2>
                  <p className='text-blue-100 text-lg mb-8'>
                     Join thousands of happy travelers who have discovered the smarter way to
                     explore the world. Start your journey today with EasyTravel.
                  </p>

                  <ul className='space-y-3 mb-8'>
                     {benefits.map((benefit, index) => (
                        <li key={index} className='flex items-center'>
                           <BadgeCheck className='h-5 w-5 mr-3 text-blue-300' />
                           <span>{benefit}</span>
                        </li>
                     ))}
                  </ul>

                  <div className='space-y-4 sm:space-y-0 sm:flex sm:space-x-4'>
                     <Button
                        size='lg'
                        className='bg-white text-blue-800 hover:bg-blue-100 w-full sm:w-auto'
                        asChild
                     >
                        <Link href={session ? '/dashboard' : '/signup'}>
                           {session ? 'Dashboard' : 'Sign Up Free'}{' '}
                        </Link>
                     </Button>
                     <Button
                        size='lg'
                        className='border-white bg-blue-600  hover:bg-white/10 w-full sm:w-auto'
                        asChild
                     >
                        <Link href='/destinations'>Explore Destinations</Link>
                     </Button>
                  </div>
               </div>

               <div className='relative'>
                  <div className='absolute inset-0 -m-8 rounded-full bg-blue-500 opacity-20 blur-3xl'></div>
                  <div className='relative bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-2xl'>
                     <div className='bg-gradient-to-br from-blue-700 to-indigo-900 rounded-lg p-2 mb-4'>
                        <div className='w-14 h-1.5 bg-white/20 rounded-full mx-auto mb-4'></div>
                        <div className='p-4 bg-white/10 rounded-lg'>
                           <div className='h-6 w-2/3 bg-white/20 rounded-full mb-3'></div>
                           <div className='h-4 w-1/2 bg-white/20 rounded-full'></div>
                        </div>
                        <div className='mt-3 p-4 bg-white rounded-lg'>
                           <div className='flex justify-between items-center mb-3'>
                              <div className='w-1/3 h-4 bg-gray-200 rounded-full'></div>
                              <div className='w-1/4 h-4 bg-blue-200 rounded-full'></div>
                           </div>
                           <div className='space-y-2'>
                              <div className='h-3 w-full bg-gray-100 rounded-full'></div>
                              <div className='h-3 w-5/6 bg-gray-100 rounded-full'></div>
                              <div className='h-3 w-4/6 bg-gray-100 rounded-full'></div>
                           </div>
                        </div>
                     </div>

                     <div className='flex justify-between items-center mt-4'>
                        <div className='text-white'>
                           <p className='font-semibold'>Your Experience</p>
                           <p className='text-sm text-blue-200'>Personalized for you</p>
                        </div>
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 py-1 px-3 rounded-full text-xs font-medium'>
                           PREMIUM
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
