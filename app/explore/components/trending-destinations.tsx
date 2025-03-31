import Image from 'next/image';

import Link from 'next/link';

import { TrendingUp } from 'lucide-react';

const trendingDestinations = [
   {
      id: 1,
      name: 'Lisbon, Portugal',
      image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2070&auto=format&fit=crop',
      trend: '+32% interest this month',
      description: "Historic charm meets coastal beauty in Portugal's vibrant capital",
   },
   {
      id: 2,
      name: 'Copenhagen, Denmark',
      image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop',
      trend: '+28% interest this month',
      description:
         "Scandinavian design, world-class cuisine, and cycling culture in Denmark's capital",
   },
   {
      id: 3,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1613395877347-5d4a0f8d9c8d?q=80&w=2070&auto=format&fit=crop',
      trend: '+25% interest this month',
      description: 'Iconic white-washed buildings on dramatic cliffs overlooking the Aegean Sea',
   },
];

export default function TrendingDestinations() {
   return (
      <section>
         <div className='flex items-center mb-6'>
            <TrendingUp className='text-primary mr-2' />
            <h2 className='text-2xl font-bold'>Trending Now</h2>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {trendingDestinations.map((destination) => (
               <Link
                  href={`/destinations/${destination.id}`}
                  key={destination.id}
                  className='group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
               >
                  <div className='relative h-48'>
                     <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                     />
                  </div>
                  <div className='p-4'>
                     <div className='flex justify-between items-start mb-2'>
                        <h3 className='font-bold'>{destination.name}</h3>
                        <div className='flex items-center text-green-600 text-xs font-medium'>
                           <TrendingUp size={14} className='mr-1' />
                           <span>{destination.trend.split(' ')[0]}</span>
                        </div>
                     </div>
                     <p className='text-gray-600 text-sm'>{destination.description}</p>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
}
