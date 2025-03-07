import Image from 'next/image';
import Link from 'next/link';

const destinations = [
   {
      id: 1,
      name: 'Bali, Indonesia',
      image: '/images/bali.jpg',
      description: 'Tropical paradise with beautiful beaches and vibrant culture',
      rating: 4.8,
   },
   {
      id: 2,
      name: 'Paris, France',
      image: '/images/paris.jpg',
      description: 'City of light and love with iconic landmarks',
      rating: 4.7,
   },
   {
      id: 3,
      name: 'Kyoto, Japan',
      image: '/images/kyoto.jpg',
      description: 'Ancient temples and traditional Japanese culture',
      rating: 4.9,
   },
   {
      id: 4,
      name: 'New York, USA',
      image: '/images/newyork.jpg',
      description: 'The city that never sleeps with endless activities',
      rating: 4.6,
   },
];

export default function FeaturedDestinations() {
   return (
      <section className='container mx-auto px-6 py-12'>
         <h2 className='text-3xl font-bold mb-2'>Featured Destinations</h2>
         <p className='text-gray-600 mb-8'>Explore our top picks for your next adventure</p>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {destinations.map((destination) => (
               <Link
                  href={`/destinations/${destination.id}`}
                  key={destination.id}
                  className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow'
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
                     <div className='flex items-center justify-between mb-2'>
                        <h3 className='font-bold text-lg'>{destination.name}</h3>
                        <div className='flex items-center'>
                           <span className='text-yellow-500'>★</span>
                           <span className='ml-1'>{destination.rating}</span>
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
