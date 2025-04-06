import React from 'react';
import { redirect } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { CalendarIcon, GlobeIcon, LuggageIcon, MapIcon, UserIcon } from 'lucide-react';

import { capitalizeFirstLetter, getGreeting } from '@/lib/helpers';
import { getSession } from '@/actions/authActions';

const Dashboard = async () => {
   const session = await getSession();
   const userName = session?.user?.name;

   if (!session) {
      return redirect('/');
   }

   return (
      <div className='min-h-screen dark:bg-gray-900'>
         {/* Welcome section */}
         <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <Card className='mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
               <CardContent className='py-8'>
                  <div className='flex items-center space-x-4'>
                     <div className='bg-white/20 p-3 rounded-full'>
                        <UserIcon className='h-8 w-8' />
                     </div>
                     <div>
                        <h2 className='text-2xl font-bold'>
                           {getGreeting()}, {capitalizeFirstLetter(userName as string)}!
                        </h2>
                        <p className='mt-1 opacity-90'>
                           Welcome to your travel dashboard. Your journey begins here.
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Quick stats */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
               <Card>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full'>
                        <LuggageIcon className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>Upcoming Trips</p>
                        <h3 className='text-2xl font-bold'>2</h3>
                     </div>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-green-100 dark:bg-green-900 p-3 rounded-full'>
                        <GlobeIcon className='h-6 w-6 text-green-700 dark:text-green-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                           Countries Visited
                        </p>
                        <h3 className='text-2xl font-bold'>7</h3>
                     </div>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-amber-100 dark:bg-amber-900 p-3 rounded-full'>
                        <CalendarIcon className='h-6 w-6 text-amber-700 dark:text-amber-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                           Days Until Next Trip
                        </p>
                        <h3 className='text-2xl font-bold'>16</h3>
                     </div>
                  </CardContent>
               </Card>
            </div>

            <div className='mt-8'>
               <Card className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden'>
                  <CardContent className='p-8 relative'>
                     <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
                     <div className='relative z-10'>
                        <h2 className='text-2xl font-bold mb-4'>Plan Your Next Adventure</h2>
                        <p className='mb-6 max-w-md'>
                           Create a personalized travel itinerary with our AI-powered trip planner.
                           Tell us your preferences and we&apos;ll craft the perfect journey for
                           you.
                        </p>
                        <Button
                           size='lg'
                           className='bg-white text-blue-700 hover:bg-blue-50 font-medium'
                           asChild
                        >
                           <a href='/plan-trip'>
                              <MapIcon className='mr-2 h-5 w-5' /> Start Planning Your Trip
                           </a>
                        </Button>
                     </div>
                  </CardContent>
               </Card>
            </div>

            <div className='mt-6'>
               <Card>
                  <CardContent className='p-6'>
                     <div className='bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg'>
                        <h3 className='font-medium text-blue-700 dark:text-blue-300 mb-2'>
                           Travel Tip
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>
                           Remember to check travel advisories and COVID-19 restrictions before
                           booking your next adventure.
                        </p>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </main>
      </div>
   );
};

export default Dashboard;
