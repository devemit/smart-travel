import Image from 'next/image';
import Link from 'next/link';
import { MapPin, TrendingUp } from 'lucide-react';

const trendingDestinations = [
   {
      id: 1,
      name: 'Lisbon, Portugal',
      image: 'https://plus.unsplash.com/premium_photo-1672116453103-a38879a3ef0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlzYm9ufGVufDB8fDB8fHww',
      trend: '+32% interest this month',
      description: "Historic charm meets coastal beauty in Portugal's vibrant capital",
   },
   {
      id: 2,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop',
      trend: '+28% interest this month',
      description: "Traditional temples, gardens and geisha districts in Japan's cultural heart",
   },
   {
      id: 3,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2062&auto=format&fit=crop',
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
