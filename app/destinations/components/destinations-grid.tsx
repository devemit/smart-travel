import Image from 'next/image';

import Link from 'next/link';

import { Badge, MapPin, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const destinations = [
   {
      id: 1,
      name: 'Kyoto',
      country: 'Japan',
      description:
         'Ancient temples, traditional tea houses and beautiful gardens in Japans former capital.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1245,
      category: 'historical',
      region: 'asia',
      tags: ['Culture', 'Temples', 'Gardens'],
      popular: true,
   },
   {
      id: 2,
      name: 'Amalfi Coast',
      country: 'Italy',
      description:
         'Dramatic coastline with colorful villages perched on cliffs above the Mediterranean.',
      image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=2070&auto=format&fit=crop',
      rating: 4.9,
      reviews: 978,
      category: 'beach',
      region: 'europe',
      tags: ['Beaches', 'Villages', 'Mediterranean'],
      popular: true,
   },
   {
      id: 3,
      name: 'Cape Town',
      country: 'South Africa',
      description: 'Stunning coastal city nestled between mountains and the Atlantic Ocean.',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop',
      rating: 4.7,
      reviews: 856,
      category: 'city',
      region: 'africa',
      tags: ['Mountains', 'Beaches', 'Wineries'],
      trending: true,
   },
   {
      id: 4,
      name: 'Queenstown',
      country: 'New Zealand',
      description:
         'Adventure capital of the world surrounded by dramatic mountains and crystal clear lakes.',
      image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2070&auto=format&fit=crop',
      rating: 4.9,
      reviews: 1102,
      category: 'mountain',
      region: 'oceania',
      tags: ['Adventure', 'Mountains', 'Lakes'],
      trending: true,
   },
   {
      id: 5,
      name: 'Machu Picchu',
      country: 'Peru',
      description:
         'Ancient Incan citadel set high in the Andes Mountains, a marvel of engineering and architecture.',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
      rating: 4.9,
      reviews: 2145,
      category: 'historical',
      region: 'americas',
      tags: ['Ruins', 'Mountains', 'Hiking'],
      popular: true,
   },
   {
      id: 6,
      name: 'Santorini',
      country: 'Greece',
      description:
         'Iconic island with white-washed buildings, blue domes, and spectacular sunsets over the Aegean.',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2056&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1823,
      category: 'beach',
      region: 'europe',
      tags: ['Islands', 'Views', 'Romance'],
      popular: true,
   },
];

export default function DestinationsGrid() {
   return (
      <section>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {destinations.map((destination) => (
               <Link
                  // href={`/destinations/${destination.id}`}
                  href='/destinations'
                  key={destination.id}
                  className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'
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
                           <span>2,450 travelers visited</span>
                        </div>
                        <Button size='sm' variant='ghost' className='text-primary'>
                           Explore
                        </Button>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         <div className='mt-8 flex justify-center'>
            <Button className='rounded-full px-8'>Load More Destinations</Button>
         </div>
      </section>
   );
}
