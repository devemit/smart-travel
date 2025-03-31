import Image from 'next/image';

import { Card } from '@/components/ui/card';

import { Star, MapPin, CalendarDays, Plane } from 'lucide-react';

export default function FeaturedDestination() {
   const featuredDestination = {
      id: 7,
      name: 'Paris',
      country: 'France',
      description:
         'The City of Light, known for its iconic Eiffel Tower, world-class museums like the Louvre, and romantic atmosphere. From historic architecture to haute cuisine, Paris offers a perfect blend of culture, art, and French charm.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop',
      bestTime: 'April to October',
      flightTime: '7+ hours from US',
      rating: 4.8,
      reviews: 3245,
   };

   return (
      <Card className='overflow-hidden'>
         <div className='relative h-64 md:h-80'>
            <Image
               src={featuredDestination.image}
               alt={featuredDestination.name}
               fill
               className='object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
               <h2 className='text-white text-2xl md:text-3xl font-bold'>
                  {featuredDestination.name}, {featuredDestination.country}
               </h2>
               <div className='flex items-center text-white/90 mt-1'>
                  <Star className='fill-yellow-400 text-yellow-400 h-4 w-4 mr-1' />
                  <span className='font-medium mr-1'>{featuredDestination.rating}</span>
                  <span className='text-sm'>({featuredDestination.reviews} reviews)</span>
               </div>
            </div>
         </div>

         <div className='p-4 sm:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
               <div className='flex items-start'>
                  <MapPin className='h-5 w-5 text-primary mr-2 mt-0.5' />
                  <div>
                     <h3 className='font-medium'>Location</h3>
                     <p className='text-sm text-gray-600'>{featuredDestination.country}</p>
                  </div>
               </div>

               <div className='flex items-start'>
                  <CalendarDays className='h-5 w-5 text-primary mr-2 mt-0.5' />
                  <div>
                     <h3 className='font-medium'>Best Time to Visit</h3>
                     <p className='text-sm text-gray-600'>{featuredDestination.bestTime}</p>
                  </div>
               </div>

               <div className='flex items-start'>
                  <Plane className='h-5 w-5 text-primary mr-2 mt-0.5' />
                  <div>
                     <h3 className='font-medium'>Travel Time</h3>
                     <p className='text-sm text-gray-600'>{featuredDestination.flightTime}</p>
                  </div>
               </div>
            </div>

            <p className='text-gray-700 mb-6 break-words'>{featuredDestination.description}</p>
         </div>
      </Card>
   );
}
