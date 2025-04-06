'use client';

import React, { useState, useEffect } from 'react';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, DollarSignIcon, UsersIcon, SearchIcon, Loader2 } from 'lucide-react';
import dayjs from 'dayjs';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { getSession } from '@/actions/authActions';
import { generateTripPlan } from '@/actions/tripActions';

const TripPlanDisplay = ({ tripPlan }: { tripPlan: string }) => {
   // Function to format the trip plan with proper styling
   const formatTripPlan = (text: string): React.ReactNode[] => {
      const lines = text.split('\n');
      const formattedLines: React.ReactNode[] = [];
      let currentList: React.ReactNode[] = [];
      let inList = false;

      for (let i = 0; i < lines.length; i++) {
         const line = lines[i].trim();

         // Skip empty lines
         if (!line) {
            if (inList) {
               formattedLines.push(
                  <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                     {currentList}
                  </ul>
               );
               currentList = [];
               inList = false;
            }
            formattedLines.push(<div key={`empty-${i}`} className='h-3'></div>);
            continue;
         }

         // Format headings (lines starting with **)
         if (line.startsWith('**') && line.endsWith('**')) {
            if (inList) {
               formattedLines.push(
                  <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                     {currentList}
                  </ul>
               );
               currentList = [];
               inList = false;
            }
            const headingText = line.replace(/\*\*/g, '');
            formattedLines.push(
               <h2
                  key={`heading-${i}`}
                  className='text-2xl font-bold mt-8 mb-4 text-primary border-b pb-2'
               >
                  {headingText}
               </h2>
            );
            continue;
         }

         // Format subheadings (lines starting with ###)
         if (line.startsWith('###')) {
            if (inList) {
               formattedLines.push(
                  <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                     {currentList}
                  </ul>
               );
               currentList = [];
               inList = false;
            }
            const subheadingText = line.replace(/###\s*/, '');
            formattedLines.push(
               <h3
                  key={`subheading-${i}`}
                  className='text-xl font-semibold mt-6 mb-3 text-primary/80 bg-muted/30 p-2 rounded-md'
               >
                  {subheadingText}
               </h3>
            );
            continue;
         }

         // Format list items (lines starting with *)
         if (line.startsWith('*')) {
            const listItemText = line.replace(/^\*\s*/, '');
            currentList.push(
               <li key={`list-item-${i}`} className='mb-2 pl-1'>
                  {listItemText}
               </li>
            );
            inList = true;
            continue;
         }

         // Regular text
         if (inList) {
            formattedLines.push(
               <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                  {currentList}
               </ul>
            );
            currentList = [];
            inList = false;
         }
         formattedLines.push(
            <p key={`text-${i}`} className='mb-3 leading-relaxed'>
               {line}
            </p>
         );
      }

      // Handle any remaining list items
      if (inList) {
         formattedLines.push(
            <ul key='final-list' className='list-disc pl-6 mb-4 space-y-1'>
               {currentList}
            </ul>
         );
      }

      return formattedLines;
   };

   return (
      <div className='prose prose-sm max-w-none'>
         <div className='font-sans text-base leading-relaxed bg-white p-6 rounded-lg shadow-sm'>
            {formatTripPlan(tripPlan)}
         </div>
      </div>
   );
};

const PlanTripPage = () => {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(true);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [tripPlan, setTripPlan] = useState<string>('');
   const [showResults, setShowResults] = useState(false);
   const [formData, setFormData] = useState({
      destination: '',
      startDate: '',
      endDate: '',
      budget: 5000,
      travelers: 2,
      preferences: '',
   });

   // Function to clean up the trip plan formatting
   const cleanTripPlan = (text: string): string => {
      // Simply ensure proper line breaks and remove any extra whitespace
      return text
         .replace(/\n\s*\n/g, '\n\n') // Normalize multiple newlines
         .replace(/\s+$/gm, ''); // Remove trailing whitespace on each line
   };

   useEffect(() => {
      const checkSession = async () => {
         const session = await getSession();
         if (!session) {
            router.push('/');
         } else {
            setIsLoading(false);
         }
      };
      checkSession();
   }, [router]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSliderChange = (name: string, value: number[]) => {
      setFormData((prev) => ({ ...prev, [name]: value[0] }));
   };

   const handleDateSelect = (name: string, date: Date | undefined) => {
      if (date) {
         setFormData((prev) => ({ ...prev, [name]: dayjs(date).format('YYYY-MM-DD') }));
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);
      setTripPlan('');
      setShowResults(false);

      try {
         if (!formData.destination || !formData.startDate || !formData.endDate) {
            setError('Please fill in all required fields');
            setIsSubmitting(false);
            return;
         }

         // Show results immediately to display streaming content
         setShowResults(true);

         // Call the server action to generate the trip plan
         const result = await generateTripPlan(formData);

         if (result.error) {
            throw new Error(result.error);
         }

         // Simply clean the trip plan and display it as is
         const cleanedTripPlan = cleanTripPlan(result.tripPlan || '');
         setTripPlan(cleanedTripPlan);
      } catch (err) {
         console.error('Error generating trip plan:', err);
         setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
         setIsSubmitting(false);
      }
   };

   if (isLoading) {
      return (
         <div className='flex items-center justify-center min-h-screen'>
            <Loader2 className='h-8 w-8 animate-spin text-primary' />
         </div>
      );
   }

   return (
      <div className='container mx-auto py-8 px-4'>
         <h1 className='text-3xl font-bold mb-8 text-center'>Plan Your Trip</h1>

         {!showResults ? (
            <Card className='max-w-2xl mx-auto'>
               <CardHeader>
                  <CardTitle>Tell us about your trip</CardTitle>
                  <CardDescription>
                     Fill in the details below to generate a personalized travel itinerary
                  </CardDescription>
               </CardHeader>
               <form onSubmit={handleSubmit}>
                  <CardContent className='space-y-6'>
                     <div className='space-y-2'>
                        <Label htmlFor='destination'>Destination *</Label>
                        <div className='relative'>
                           <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
                           <Input
                              id='destination'
                              name='destination'
                              placeholder='e.g., Paris, France'
                              value={formData.destination}
                              onChange={handleInputChange}
                              className='pl-10'
                              required
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                           <Label htmlFor='startDate'>Start Date *</Label>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button
                                    variant='outline'
                                    className={cn(
                                       'w-full justify-start text-left font-normal',
                                       !formData.startDate && 'text-muted-foreground'
                                    )}
                                 >
                                    <CalendarIcon className='mr-2 h-4 w-4' />
                                    {formData.startDate
                                       ? dayjs(formData.startDate).format('MMM D, YYYY')
                                       : 'Pick a date'}
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent className='w-auto p-0'>
                                 <Calendar
                                    selected={
                                       formData.startDate ? new Date(formData.startDate) : undefined
                                    }
                                    onSelect={(date) => handleDateSelect('startDate', date)}
                                 />
                              </PopoverContent>
                           </Popover>
                        </div>
                        <div className='space-y-2'>
                           <Label htmlFor='endDate'>End Date *</Label>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button
                                    variant='outline'
                                    className={cn(
                                       'w-full justify-start text-left font-normal',
                                       !formData.endDate && 'text-muted-foreground'
                                    )}
                                 >
                                    <CalendarIcon className='mr-2 h-4 w-4' />
                                    {formData.endDate
                                       ? dayjs(formData.endDate).format('MMM D, YYYY')
                                       : 'Pick a date'}
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent className='w-auto p-0'>
                                 <Calendar
                                    selected={
                                       formData.endDate ? new Date(formData.endDate) : undefined
                                    }
                                    onSelect={(date) => handleDateSelect('endDate', date)}
                                 />
                              </PopoverContent>
                           </Popover>
                        </div>
                     </div>

                     <div className='space-y-2'>
                        <div className='flex justify-between'>
                           <Label htmlFor='budget'>Budget (USD)</Label>
                           <span className='text-sm text-muted-foreground'>${formData.budget}</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                           <DollarSignIcon className='h-4 w-4 text-muted-foreground' />
                           <Slider
                              id='budget'
                              name='budget'
                              min={500}
                              max={10000}
                              step={100}
                              value={[formData.budget]}
                              onValueChange={(value) => handleSliderChange('budget', value)}
                              className='flex-1'
                           />
                        </div>
                     </div>

                     <div className='space-y-2'>
                        <div className='flex justify-between'>
                           <Label htmlFor='travelers'>Number of Travelers</Label>
                           <span className='text-sm text-muted-foreground'>
                              {formData.travelers} people
                           </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                           <UsersIcon className='h-4 w-4 text-muted-foreground' />
                           <Slider
                              id='travelers'
                              name='travelers'
                              min={1}
                              max={10}
                              step={1}
                              value={[formData.travelers]}
                              onValueChange={(value) => handleSliderChange('travelers', value)}
                              className='flex-1'
                           />
                        </div>
                     </div>

                     <div className='space-y-2'>
                        <Label htmlFor='preferences'>Additional Preferences</Label>
                        <Textarea
                           id='preferences'
                           name='preferences'
                           placeholder='e.g., I prefer luxury accommodations, interested in local cuisine, want to visit historical sites'
                           value={formData.preferences}
                           onChange={handleInputChange}
                           rows={4}
                        />
                     </div>

                     {error && <p className='text-red-500 text-sm'>{error}</p>}
                  </CardContent>
                  <CardFooter>
                     <Button type='submit' className='w-full' disabled={isSubmitting}>
                        {isSubmitting ? (
                           <>
                              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                              Generating Trip Plan...
                           </>
                        ) : (
                           'Generate Trip Plan'
                        )}
                     </Button>
                  </CardFooter>
               </form>
            </Card>
         ) : (
            <div className='max-w-4xl mx-auto'>
               <div className='flex justify-between items-center mb-6'>
                  <h2 className='text-2xl font-bold'>Your Trip Plan</h2>
                  <Button variant='outline' onClick={() => setShowResults(false)}>
                     Back to Form
                  </Button>
               </div>

               <Card className='overflow-hidden border-2 border-primary/20'>
                  <CardContent className='p-0'>
                     {isSubmitting ? (
                        <div className='flex flex-col items-center justify-center py-12'>
                           <Loader2 className='h-8 w-8 animate-spin text-primary mb-4' />
                           <p className='text-muted-foreground'>Generating your trip plan...</p>
                        </div>
                     ) : (
                        <TripPlanDisplay tripPlan={tripPlan} />
                     )}
                  </CardContent>
               </Card>
            </div>
         )}
      </div>
   );
};

export default PlanTripPage;
