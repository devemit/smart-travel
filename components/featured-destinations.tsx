import Image from 'next/image';

const destinations = [
   {
      id: 1,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop',
      description: 'City of light and love with iconic landmarks and world-class museums',
      rating: 4.8,
   },
   {
      id: 2,
      name: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Vibrant city with stunning architecture and Mediterranean charm',
      rating: 4.7,
   },
   {
      id: 3,
      name: 'Amsterdam, Netherlands',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop',
      description: 'Historic canals, world-class museums, and cycling culture',
      rating: 4.9,
   },
   {
      id: 4,
      name: 'Venice, Italy',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2070&auto=format&fit=crop',
      description: 'Romantic canals, stunning architecture, and Italian charm',
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
               <div
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
               </div>
            ))}
         </div>
      </section>
   );
}
