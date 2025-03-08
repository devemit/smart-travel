import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

const experiences = [
   {
      id: 1,
      title: 'Hiking Trail Adventure',
      location: 'Swiss Alps, Switzerland',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviews: 128,
      price: 89,
   },
   {
      id: 2,
      title: 'Food Tour Experience',
      location: 'Barcelona, Spain',
      image: 'https://plus.unsplash.com/premium_photo-1679591002405-13fec066bd53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 97,
      price: 65,
   },
   {
      id: 3,
      title: 'Historical City Tour',
      location: 'Rome, Italy',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 156,
      price: 55,
   },
];

export default function PopularExperiences() {
   return (
      <section className='bg-gray-50 py-12 w-full overflow-x-hidden'>
         <div className='container mx-auto px-4 sm:px-6'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8'>
               <h2 className='text-2xl sm:text-3xl font-bold'>Popular Experiences</h2>
               <Link href='/explore' className='text-primary hover:underline font-medium'>
                  View all experiences →
               </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {experiences.map((exp) => (
                  <div
                     key={exp.id}
                     className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all'
                  >
                     <div className='relative h-48'>
                        <Image src={exp.image} alt={exp.title} fill className='object-cover' />
                     </div>
                     <div className='p-5'>
                        <h3 className='font-bold text-lg mb-1'>{exp.title}</h3>
                        <p className='text-gray-500 text-sm mb-3'>{exp.location}</p>

                        <div className='flex justify-between items-center mb-4'>
                           <div className='flex items-center'>
                              <Star className='h-4 w-4 text-yellow-500 mr-1' />
                              <span className='text-sm font-medium'>{exp.rating}</span>
                              <span className='text-xs text-gray-500 ml-1'>({exp.reviews})</span>
                           </div>
                           <span className='font-bold'>${exp.price}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
