import Image from 'next/image';
import { CalendarIcon, MapPin } from 'lucide-react';

const trips = [
   {
      id: 1,
      title: 'Summer in Barcelona',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 15-22, 2023',
      location: 'Barcelona, Spain',
   },
   {
      id: 2,
      title: 'Hiking in Swiss Alps',
      image: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'August 5-12, 2023',
      location: 'Interlaken, Switzerland',
   },
   {
      id: 3,
      title: 'Beach Weekend',
      image: 'https://images.unsplash.com/photo-1499898595565-f424ed1d075c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'September 3-5, 2023',
      location: 'Malibu, USA',
   },
];

export default function RecentTrips() {
   return (
      <section className='container mx-auto px-6 py-12 bg-gray-50'>
         <h2 className='text-3xl font-bold mb-2'>Your Recent Trips</h2>
         <p className='text-gray-600 mb-8'>Continue planning or revisit memories</p>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {trips.map((trip) => (
               <div key={trip.id} className='bg-white rounded-lg overflow-hidden shadow-md'>
                  <div className='relative h-48'>
                     <Image src={trip.image} alt={trip.title} fill className='object-cover' />
                  </div>
                  <div className='p-4'>
                     <h3 className='font-bold text-xl mb-2'>{trip.title}</h3>
                     <div className='flex items-center text-gray-600 mb-2'>
                        <CalendarIcon size={16} className='mr-2' />
                        <span className='text-sm'>{trip.date}</span>
                     </div>
                     <div className='flex items-center text-gray-600'>
                        <MapPin size={16} className='mr-2' />
                        <span className='text-sm'>{trip.location}</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
