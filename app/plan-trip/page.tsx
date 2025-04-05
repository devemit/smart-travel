'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
   CalendarIcon,
   PlaneIcon,
   DollarSignIcon,
   UsersIcon,
   ClockIcon,
   SearchIcon,
} from 'lucide-react';
import dayjs from 'dayjs';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { getSession } from '@/actions/authActions';

const PlanTripPage = () => {
   const router = useRouter();
   const [loading, setLoading] = useState<boolean>(true);
   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
   const [endDate, setEndDate] = useState<Date | undefined>(undefined);
   const [budget, setBudget] = useState<number>(3000);
   const [travelStyle, setTravelStyle] = useState<string>('');
   const [destination, setDestination] = useState<string>('');
   const [travelers, setTravelers] = useState<string>('');
   const [days, setDays] = useState<string>('');
   const [nights, setNights] = useState<string>('');
   const [preferences, setPreferences] = useState<string>('');
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const checkSession = async () => {
         try {
            const session = await getSession();
            if (!session) {
               router.push('/');
               return;
            }
            setLoading(false);
         } catch (err) {
            console.error('Error checking session:', err);
            router.push('/');
         }
      };

      checkSession();
   }, [router]);

   if (loading) {
      return (
         <div className='min-h-screen flex items-center justify-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
         </div>
      );
   }

   return (
      <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8'>
         <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-8'>
               <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
                  Plan Your Perfect Trip
               </h1>
               <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  Tell us your preferences and we'll create a personalized travel itinerary for you
               </p>
            </div>

            <Card className='shadow-lg'>
               <CardContent className='p-6'>
                  <form className='space-y-6'>
                     {/* Destination */}
                     <div className='space-y-2'>
                        <Label htmlFor='destination' className='flex items-center'>
                           <SearchIcon className='h-4 w-4 mr-2 text-blue-600' />
                           Where do you want to go?
                        </Label>
                        <Input
                           id='destination'
                           placeholder='Enter destination (city, country, or region)'
                           className='w-full'
                           value={destination}
                           onChange={(e) => setDestination(e.target.value)}
                           required
                        />
                     </div>

                     {/* Date Range */}
                     <div className='space-y-2'>
                        <Label className='flex items-center'>
                           <CalendarIcon className='h-4 w-4 mr-2 text-blue-600' />
                           When do you want to travel?
                        </Label>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           <div>
                              <Label htmlFor='start-date' className='text-sm text-gray-500'>
                                 Start Date
                              </Label>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button
                                       variant='outline'
                                       className={cn(
                                          'w-full justify-start text-left font-normal',
                                          !startDate && 'text-muted-foreground'
                                       )}
                                    >
                                       <CalendarIcon className='mr-2 h-4 w-4' />
                                       {startDate ? (
                                          dayjs(startDate).format('MMM DD, YYYY')
                                       ) : (
                                          <span>Pick a date</span>
                                       )}
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent className='w-auto p-0'>
                                    <Calendar selected={startDate} onSelect={setStartDate} />
                                 </PopoverContent>
                              </Popover>
                           </div>
                           <div>
                              <Label htmlFor='end-date' className='text-sm text-gray-500'>
                                 End Date
                              </Label>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button
                                       variant='outline'
                                       className={cn(
                                          'w-full justify-start text-left font-normal',
                                          !endDate && 'text-muted-foreground'
                                       )}
                                    >
                                       <CalendarIcon className='mr-2 h-4 w-4' />
                                       {endDate ? (
                                          dayjs(endDate).format('MMM DD, YYYY')
                                       ) : (
                                          <span>Pick a date</span>
                                       )}
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent className='w-auto p-0'>
                                    <Calendar selected={endDate} onSelect={setEndDate} />
                                 </PopoverContent>
                              </Popover>
                           </div>
                        </div>
                     </div>

                     {/* Number of Travelers */}
                     <div className='space-y-2'>
                        <Label htmlFor='travelers' className='flex items-center'>
                           <UsersIcon className='h-4 w-4 mr-2 text-blue-600' />
                           How many people are traveling?
                        </Label>
                        <Input
                           id='travelers'
                           type='number'
                           min='1'
                           placeholder='Number of travelers'
                           className='w-full'
                           value={travelers}
                           onChange={(e) => setTravelers(e.target.value)}
                        />
                     </div>

                     {/* Budget */}
                     <div className='space-y-4'>
                        <Label className='flex items-center'>
                           <DollarSignIcon className='h-4 w-4 mr-2 text-blue-600' />
                           What's your budget?
                        </Label>
                        <div className='space-y-2'>
                           <div className='flex justify-between'>
                              <span className='text-sm text-gray-500'>$0</span>
                              <span className='text-sm text-gray-500'>$10,000+</span>
                           </div>
                           <Slider
                              defaultValue={[budget]}
                              max={10000}
                              step={100}
                              className='w-full'
                              onValueChange={(value: number[]) => setBudget(value[0])}
                           />
                           <div className='text-center'>
                              <span className='font-medium'>${budget.toLocaleString()}</span>
                           </div>
                        </div>
                     </div>

                     {/* Trip Duration */}
                     <div className='space-y-2'>
                        <Label className='flex items-center'>
                           <ClockIcon className='h-4 w-4 mr-2 text-blue-600' />
                           How long do you want to stay?
                        </Label>
                        <div className='grid grid-cols-2 gap-4'>
                           <div>
                              <Input
                                 type='number'
                                 min='1'
                                 placeholder='Days'
                                 className='w-full'
                                 value={days}
                                 onChange={(e) => setDays(e.target.value)}
                              />
                           </div>
                           <div>
                              <Input
                                 type='number'
                                 min='0'
                                 placeholder='Nights'
                                 className='w-full'
                                 value={nights}
                                 onChange={(e) => setNights(e.target.value)}
                              />
                           </div>
                        </div>
                     </div>

                     {/* Travel Style */}
                     <div className='space-y-2'>
                        <Label htmlFor='travel-style' className='flex items-center'>
                           <PlaneIcon className='h-4 w-4 mr-2 text-blue-600' />
                           What's your travel style?
                        </Label>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                           {['Relaxed', 'Balanced', 'Active'].map((style) => (
                              <Button
                                 key={style}
                                 type='button'
                                 variant={travelStyle === style ? 'default' : 'outline'}
                                 className='w-full'
                                 onClick={() => setTravelStyle(style)}
                              >
                                 {style}
                              </Button>
                           ))}
                        </div>
                     </div>

                     {/* Additional Preferences */}
                     <div className='space-y-2'>
                        <Label htmlFor='preferences' className='flex items-center'>
                           <SearchIcon className='h-4 w-4 mr-2 text-blue-600' />
                           Any specific preferences or interests?
                        </Label>
                        <Textarea
                           id='preferences'
                           placeholder='Tell us about your interests (e.g., museums, hiking, food, beaches)'
                           className='w-full'
                           rows={3}
                           value={preferences}
                           onChange={(e) => setPreferences(e.target.value)}
                        />
                     </div>

                     {error && <div className='p-3 bg-red-50 text-red-500 rounded-md'>{error}</div>}

                     {/* Submit Button */}
                     <Button
                        className='w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white'
                        type='submit'
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? (
                           <div className='flex items-center'>
                              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                              Generating Your Trip...
                           </div>
                        ) : (
                           'Generate My Perfect Trip'
                        )}
                     </Button>
                  </form>
               </CardContent>
            </Card>

            {/* How it works section */}
            <div className='mt-12 text-center'>
               <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                  How It Works
               </h2>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='p-4'>
                     <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 dark:text-blue-300 font-bold'>1</span>
                     </div>
                     <h3 className='font-medium mb-2'>Tell us your preferences</h3>
                     <p className='text-sm text-gray-600 dark:text-gray-300'>
                        Fill out the form with your travel details and preferences
                     </p>
                  </div>
                  <div className='p-4'>
                     <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 dark:text-blue-300 font-bold'>2</span>
                     </div>
                     <h3 className='font-medium mb-2'>AI generates your itinerary</h3>
                     <p className='text-sm text-gray-600 dark:text-gray-300'>
                        Our AI creates a personalized travel plan based on your preferences
                     </p>
                  </div>
                  <div className='p-4'>
                     <div className='bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 dark:text-blue-300 font-bold'>3</span>
                     </div>
                     <h3 className='font-medium mb-2'>Book your trip</h3>
                     <p className='text-sm text-gray-600 dark:text-gray-300'>
                        Review your itinerary and book flights, hotels, and activities
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PlanTripPage;
