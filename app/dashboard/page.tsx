'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
   CalendarIcon,
   CreditCardIcon,
   GlobeIcon,
   HomeIcon,
   LuggageIcon,
   MapIcon,
   UserIcon,
} from 'lucide-react';

const Dashboard = () => {
   const router = useRouter();

   const userName = 'Traveler';

   const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
   };

   return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
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
                           {getGreeting()}, {userName}!
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

            {/* Main sections */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
               {/* Trip suggestions */}
               <Card className='lg:col-span-2'>
                  <CardContent className='p-6'>
                     <h2 className='text-xl font-bold mb-4'>Suggested Destinations</h2>
                     <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {[
                           {
                              name: 'Barcelona, Spain',
                              image: 'barcelona.jpg',
                              discount: '15% off',
                           },
                           { name: 'Bali, Indonesia', image: 'bali.jpg', discount: '10% off' },
                           { name: 'Tokyo, Japan', image: 'tokyo.jpg', discount: '20% off' },
                           {
                              name: 'Santorini, Greece',
                              image: 'santorini.jpg',
                              discount: '12% off',
                           },
                        ].map((destination) => (
                           <div
                              key={destination.name}
                              className='group relative rounded-lg overflow-hidden h-44 cursor-pointer'
                           >
                              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10'></div>
                              <div className='absolute top-2 right-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded-full z-20'>
                                 {destination.discount}
                              </div>
                              <div className='absolute bottom-3 left-3 text-white z-20'>
                                 <p className='font-bold'>{destination.name}</p>
                                 <p className='text-xs opacity-80'>Best time to visit: May-Oct</p>
                              </div>
                              <div className='absolute inset-0 bg-gray-300 animate-pulse'></div>
                           </div>
                        ))}
                     </div>
                     <Button variant='outline' className='w-full mt-4'>
                        View All Destinations
                     </Button>
                  </CardContent>
               </Card>

               {/* Quick actions */}
               <Card>
                  <CardContent className='p-6'>
                     <h2 className='text-xl font-bold mb-4'>Quick Actions</h2>
                     <div className='space-y-3'>
                        <Button className='w-full justify-start' variant='outline'>
                           <MapIcon className='mr-2 h-4 w-4' /> Plan New Trip
                        </Button>
                        <Button className='w-full justify-start' variant='outline'>
                           <HomeIcon className='mr-2 h-4 w-4' /> Book Accommodation
                        </Button>
                        <Button className='w-full justify-start' variant='outline'>
                           <CreditCardIcon className='mr-2 h-4 w-4' /> Manage Payment Methods
                        </Button>
                        <Button className='w-full justify-start' variant='outline'>
                           <UserIcon className='mr-2 h-4 w-4' /> Update Profile
                        </Button>
                     </div>

                     <div className='mt-6 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg'>
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
