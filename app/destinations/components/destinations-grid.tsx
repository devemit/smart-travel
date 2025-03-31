'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { Badge, MapPin, Star, Users } from 'lucide-react';

const allDestinations = [
   {
      id: 1,
      name: 'Paris',
      country: 'France',
      description:
         'City of light and love with iconic landmarks like the Eiffel Tower and Louvre Museum.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1245,
      category: 'historical',
      region: 'europe',
      tags: ['Culture', 'Art', 'Architecture'],
      popular: true,
      visitors: 2450,
   },
   {
      id: 2,
      name: 'Amalfi Coast',
      country: 'Italy',
      description:
         'Dramatic coastline with colorful villages perched on cliffs above the Mediterranean.',
      image: 'https://images.unsplash.com/photo-1596736743518-eef8c49026b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviews: 978,
      category: 'beach',
      region: 'europe',
      tags: ['Beaches', 'Villages', 'Mediterranean'],
      popular: true,
      visitors: 1890,
   },
   {
      id: 3,
      name: 'Barcelona',
      country: 'Spain',
      description: 'Vibrant city with stunning architecture, beaches, and Catalan culture.',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 856,
      category: 'city',
      region: 'europe',
      tags: ['Architecture', 'Beaches', 'Culture'],
      trending: true,
      visitors: 2150,
   },
   {
      id: 4,
      name: 'Swiss Alps',
      country: 'Switzerland',
      description:
         'Majestic mountains, pristine lakes, and world-class skiing in the heart of Europe.',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
      rating: 4.9,
      reviews: 1102,
      category: 'mountain',
      region: 'europe',
      tags: ['Mountains', 'Skiing', 'Nature'],
      trending: true,
      visitors: 1780,
   },

   {
      id: 6,
      name: 'Amsterdam',
      country: 'Netherlands',
      description:
         'Historic canals, world-class museums, and vibrant cultural scene in the Dutch capital.',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1823,
      category: 'city',
      region: 'europe',
      tags: ['Culture', 'Canals', 'Museums'],
      popular: true,
      visitors: 1980,
   },
   {
      id: 7,
      name: 'Reykjavik',
      country: 'Iceland',
      description:
         "Northern lights, geothermal pools, and dramatic landscapes in the world's northernmost capital.",
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2070&auto=format&fit=crop',
      rating: 4.7,
      reviews: 2456,
      category: 'city',
      region: 'europe',
      tags: ['Northern Lights', 'Hot Springs', 'Nature'],
      popular: true,
      visitors: 1560,
   },
   {
      id: 8,
      name: 'Venice',
      country: 'Italy',
      description: 'Historic canals, stunning architecture, and romantic gondola rides.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2070&auto=format&fit=crop',
      rating: 4.6,
      reviews: 987,
      category: 'city',
      region: 'europe',
      tags: ['Canals', 'Culture', 'Romance'],
      trending: true,
      visitors: 2340,
   },
   {
      id: 9,
      name: 'Edinburgh',
      country: 'Scotland',
      description: 'Historic city with medieval architecture and dramatic castle views.',
      image: 'https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      reviews: 1567,
      category: 'city',
      region: 'europe',
      tags: ['Culture', 'History', 'Architecture'],
      popular: true,
      visitors: 1670,
   },
   {
      id: 10,
      name: 'Copenhagen',
      country: 'Denmark',
      description: 'Scandinavian charm, world-class cuisine, and cycling culture.',
      image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1890,
      category: 'city',
      region: 'europe',
      tags: ['Culture', 'Food', 'Design'],
      popular: true,
      visitors: 1890,
   },
   {
      id: 11,
      name: 'Prague',
      country: 'Czech Republic',
      description: 'Historic city with stunning architecture, beer culture, and medieval charm.',
      image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=2070&auto=format&fit=crop',
      rating: 4.7,
      reviews: 1678,
      category: 'city',
      region: 'europe',
      tags: ['Architecture', 'Culture', 'History'],
      trending: true,
      visitors: 2120,
   },
   {
      id: 12,
      name: 'Monaco',
      country: 'Monaco',
      description: 'Luxury destination with casinos, yachts, and Mediterranean charm.',
      image: 'https://images.unsplash.com/photo-1518123522418-a0c837fd10ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.6,
      reviews: 1456,
      category: 'city',
      region: 'europe',
      tags: ['Luxury', 'Casino', 'Mediterranean'],
      popular: true,
      visitors: 1450,
   },
];

export default function DestinationsGrid() {
   const [displayedDestinations, setDisplayedDestinations] = useState(6);
   const [isLoading, setIsLoading] = useState(false);

   const handleLoadMore = () => {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
         setDisplayedDestinations((prev) => Math.min(prev + 6, allDestinations.length));
         setIsLoading(false);
      }, 1000);
   };

   return (
      <section>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {allDestinations.slice(0, displayedDestinations).map((destination) => (
               <div
                  key={destination.id}
                  className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer'
               >
                  <div className='relative h-52'>
                     <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                     />
                     {destination.popular && (
                        <Badge className='absolute top-3 left-3 bg-primary text-white'>
                           Popular
                        </Badge>
                     )}
                     {destination.trending && (
                        <Badge className='absolute top-3 left-3 bg-green-600 text-white'>
                           Trending
                        </Badge>
                     )}
                  </div>
                  <div className='p-5'>
                     <div className='flex justify-between items-start mb-2'>
                        <div>
                           <h3 className='font-bold text-xl'>{destination.name}</h3>
                           <div className='flex items-center gap-1 text-sm text-gray-600 mb-1'>
                              <MapPin size={14} />
                              <span>{destination.country}</span>
                           </div>
                        </div>
                        <div className='flex items-center bg-yellow-50 px-2 py-1 rounded-md'>
                           <Star size={16} className='text-yellow-500 mr-1' />
                           <span className='font-medium'>{destination.rating}</span>
                           <span className='text-xs text-gray-500 ml-1'>
                              ({destination.reviews})
                           </span>
                        </div>
                     </div>

                     <p className='text-gray-600 text-sm mb-4'>{destination.description}</p>

                     <div className='flex flex-wrap gap-1 mb-3'>
                        {destination.tags.map((tag) => (
                           <span key={tag} className='px-2 py-1 bg-gray-100 text-xs rounded-full'>
                              {tag}
                           </span>
                        ))}
                     </div>

                     <div className='flex justify-between items-center pt-3 border-t border-gray-100'>
                        <div className='flex items-center text-gray-500 text-sm'>
                           <Users size={16} className='mr-1' />
                           <span>{destination.visitors.toLocaleString()} travelers visited</span>
                        </div>
                        <Button size='sm' variant='ghost' className='text-primary'>
                           Explore
                        </Button>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {displayedDestinations < allDestinations.length && (
            <div className='mt-8 flex justify-center'>
               <Button className='rounded-full px-8' onClick={handleLoadMore} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Load More Destinations'}
               </Button>
            </div>
         )}
      </section>
   );
}
