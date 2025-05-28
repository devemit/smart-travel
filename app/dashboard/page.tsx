import React from 'react';
import { redirect } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

import {
   CalendarIcon,
   GlobeIcon,
   LuggageIcon,
   MapIcon,
   UserIcon,
   PlaneIcon,
   CompassIcon,
   StarIcon,
   TrendingUpIcon,
   SparklesIcon,
} from 'lucide-react';

import { capitalizeFirstLetter, getGreeting } from '@/lib/helpers';
import { getSession } from '@/actions/authActions';

const Dashboard = async () => {
   const session = await getSession();
   const userName = session?.user?.name;

   if (!session) {
      return redirect('/');
   }

   return (
      <div className='min-h-screen dark:bg-gray-900 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800'>
         <main className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
            <Card className='mb-8 overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white transform hover:scale-[1.01] transition-transform duration-300'>
               <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
               <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>
               <CardContent className='py-10 relative z-10'>
                  <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6'>
                     <div className='bg-white/20 p-4 rounded-full backdrop-blur-sm shadow-lg'>
                        <UserIcon className='h-10 w-10' />
                     </div>
                     <div className='text-center md:text-left'>
                        <h2 className='text-3xl font-bold mb-2'>
                           {getGreeting()}, {capitalizeFirstLetter(userName as string)}!
                        </h2>
                        <p className='text-lg opacity-90 max-w-md'>
                           Welcome to your travel dashboard. Your next adventure awaits!
                        </p>
                        <div className='mt-4 flex flex-wrap gap-2 justify-center md:justify-start'>
                           <Badge
                              variant='outline'
                              className='bg-white/20 text-white border-white/30'
                           >
                              <SparklesIcon className='h-3 w-3 mr-1' /> Travel Explorer
                           </Badge>
                           <Badge
                              variant='outline'
                              className='bg-white/20 text-white border-white/30'
                           >
                              <StarIcon className='h-3 w-3 mr-1' /> Premium Member
                           </Badge>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Quick stats */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
               <Card className='transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg border-l-4 border-l-blue-500'>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full'>
                        <LuggageIcon className='h-6 w-6 text-blue-700 dark:text-blue-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>Upcoming Trips</p>
                        <h3 className='text-2xl font-bold'>2</h3>
                        <div className='mt-2'>
                           <Progress value={40} className='h-1' />
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className='transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg border-l-4 border-l-green-500'>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-green-100 dark:bg-green-900 p-3 rounded-full'>
                        <GlobeIcon className='h-6 w-6 text-green-700 dark:text-green-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                           Countries Visited
                        </p>
                        <h3 className='text-2xl font-bold'>7</h3>
                        <div className='mt-2'>
                           <Progress value={70} className='h-1' />
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className='transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg border-l-4 border-l-amber-500'>
                  <CardContent className='p-6 flex items-center space-x-4'>
                     <div className='bg-amber-100 dark:bg-amber-900 p-3 rounded-full'>
                        <CalendarIcon className='h-6 w-6 text-amber-700 dark:text-amber-300' />
                     </div>
                     <div>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                           Days Until Next Trip
                        </p>
                        <h3 className='text-2xl font-bold'>16</h3>
                        <div className='mt-2'>
                           <Progress value={60} className='h-1' />
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
               <div className='lg:col-span-2'>
                  <Card className='bg-white text-gray-800  transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg border-l-4'>
                     <CardContent className='p-8 relative'>
                        <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
                        <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>
                        <div className='relative z-10'>
                           <h2 className='text-2xl font-bold mb-4'>Plan Your Next Adventure</h2>
                           <p className='mb-6 max-w-md'>
                              Create a personalized travel itinerary with our AI-powered trip
                              planner. Tell us your preferences and we&apos;ll craft the perfect
                              journey for you.
                           </p>
                           <Button
                              size='lg'
                              className='bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 font-medium shadow-lg transition-transform transform hover:scale-105'
                              asChild
                           >
                              <a href='/plan-trip' className='flex items-center'>
                                 <MapIcon className='mr-2 h-5 w-5 animate-bounce' /> Start Planning
                                 Your Trip
                              </a>
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>

               <div>
                  <Card className='h-full shadow-md hover:shadow-lg transition-shadow duration-300'>
                     <CardContent className='p-6'>
                        <div className='flex items-center mb-4'>
                           <div className='bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3'>
                              <TrendingUpIcon className='h-5 w-5 text-blue-700 dark:text-blue-300' />
                           </div>
                           <h3 className='font-bold text-lg'>Travel Insights</h3>
                        </div>
                        <div className='space-y-4'>
                           <div>
                              <div className='flex justify-between mb-1'>
                                 <span className='text-sm text-gray-500 dark:text-gray-400'>
                                    Travel Budget
                                 </span>
                                 <span className='text-sm font-medium'>$2,400</span>
                              </div>
                              <Progress value={65} className='h-2' />
                           </div>
                           <div>
                              <div className='flex justify-between mb-1'>
                                 <span className='text-sm text-gray-500 dark:text-gray-400'>
                                    Trip Planning
                                 </span>
                                 <span className='text-sm font-medium'>80%</span>
                              </div>
                              <Progress value={80} className='h-2' />
                           </div>
                           <div>
                              <div className='flex justify-between mb-1'>
                                 <span className='text-sm text-gray-500 dark:text-gray-400'>
                                    Bucket List
                                 </span>
                                 <span className='text-sm font-medium'>45%</span>
                              </div>
                              <Progress value={45} className='h-2' />
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
               <Card className='shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <CardContent className='p-6'>
                     <div className='flex items-center mb-4'>
                        <div className='bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3'>
                           <CompassIcon className='h-5 w-5 text-blue-700 dark:text-blue-300' />
                        </div>
                        <h3 className='font-bold text-lg'>Popular Destinations</h3>
                     </div>
                     <div className='space-y-4'>
                        <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                           <div className='flex items-center'>
                              <div className='w-10 h-10 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3'>
                                 <span className='text-blue-700 dark:text-blue-300 font-bold'>
                                    P
                                 </span>
                              </div>
                              <div>
                                 <p className='font-medium'>Paris, France</p>
                                 <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    The City of Light
                                 </p>
                              </div>
                           </div>
                           <Badge>Trending</Badge>
                        </div>
                        <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                           <div className='flex items-center'>
                              <div className='w-10 h-10 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mr-3'>
                                 <span className='text-green-700 dark:text-green-300 font-bold'>
                                    T
                                 </span>
                              </div>
                              <div>
                                 <p className='font-medium'>Tokyo, Japan</p>
                                 <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    A blend of tradition and innovation
                                 </p>
                              </div>
                           </div>
                           <Badge variant='outline'>Popular</Badge>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className='shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <CardContent className='p-6'>
                     <div className='flex items-center mb-4'>
                        <div className='bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3'>
                           <PlaneIcon className='h-5 w-5 text-blue-700 dark:text-blue-300' />
                        </div>
                        <h3 className='font-bold text-lg'>Upcoming Trips</h3>
                     </div>
                     <div className='space-y-4'>
                        <div className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                           <div className='flex justify-between mb-2'>
                              <p className='font-medium'>Bali, Indonesia</p>
                              <Badge variant='secondary'>In 16 days</Badge>
                           </div>
                           <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                              7 days • 2 travelers
                           </p>
                           <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400'>
                              <span>Jun 15 - Jun 22, 2023</span>
                              <span>$1,800</span>
                           </div>
                        </div>
                        <div className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                           <div className='flex justify-between mb-2'>
                              <p className='font-medium'>New York, USA</p>
                              <Badge variant='secondary'>In 45 days</Badge>
                           </div>
                           <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                              5 days • 2 travelers
                           </p>
                           <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400'>
                              <span>Jul 14 - Jul 19, 2023</span>
                              <span>$1,200</span>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            <div className='mt-6'>
               <Card className='shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <CardContent className='p-6'>
                     <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 rounded-lg border border-blue-100 dark:border-blue-800'>
                        <div className='flex items-start'>
                           <div className='bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-4 mt-1'>
                              <SparklesIcon className='h-5 w-5 text-blue-700 dark:text-blue-300' />
                           </div>
                           <div>
                              <h3 className='font-medium text-blue-700 dark:text-blue-300 mb-2'>
                                 Travel Tip of the Day
                              </h3>
                              <p className='text-gray-600 dark:text-gray-300'>
                                 Remember to check travel advisories and COVID-19 restrictions
                                 before booking your next adventure. Consider purchasing travel
                                 insurance for peace of mind.
                              </p>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </main>
      </div>
   );
};

export default Dashboard;
