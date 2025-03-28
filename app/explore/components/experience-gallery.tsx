'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Star, Heart } from 'lucide-react';

const experiences = [
   {
      id: 1,
      title: 'Cooking Class in Florence',
      type: 'Culinary',
      image: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?q=80&w=1974&auto=format&fit=crop',
      rating: 4.9,
      reviews: 128,
      price: 79,
      location: 'Florence, Italy',
      favorite: false,
   },
   {
      id: 2,
      title: 'Kayaking through Amsterdam Canals',
      type: 'Adventure',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1zdGVyZGFtfGVufDB8fDB8fHww',
      rating: 4.7,
      reviews: 95,
      price: 49,
      location: 'Amsterdam, Netherlands',
      favorite: false,
   },
   {
      id: 3,
      title: 'Northern Lights Tour',
      type: 'Nature',
      image: 'https://images.unsplash.com/photo-1560185678-759b5712a60e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviews: 203,
      price: 129,
      location: 'Tromsø, Norway',
      favorite: false,
   },
   {
      id: 4,
      title: 'Street Art Tour in Berlin',
      type: 'Culture',
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 87,
      price: 35,
      location: 'Berlin, Germany',
      favorite: false,
   },
];

export default function ExperienceGallery() {
   const [favorites, setFavorites] = useState<number[]>([]);

   const toggleFavorite = (id: number) => {
      if (favorites.includes(id)) {
         setFavorites(favorites.filter((fav) => fav !== id));
      } else {
         setFavorites([...favorites, id]);
      }
   };

   return (
      <section>
         <h2 className='text-2xl font-bold mb-6'>Unique Experiences</h2>

         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {experiences.map((experience) => (
               <div key={experience.id} className='bg-white rounded-xl overflow-hidden shadow-md'>
                  <div className='relative h-48'>
                     <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className='object-cover'
                     />
                     <button
                        onClick={(e) => {
                           e.preventDefault();
                           toggleFavorite(experience.id);
                        }}
                        className='absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors'
                     >
                        <Heart
                           size={18}
                           className={
                              favorites.includes(experience.id)
                                 ? 'fill-red-500 text-red-500'
                                 : 'text-gray-600'
                           }
                        />
                     </button>
                     <div className='absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-full'>
                        <span className='text-xs font-medium'>{experience.type}</span>
                     </div>
                  </div>
                  <div className='p-4'>
                     <Link href={`/experiences/${experience.id}`}>
                        <h3 className='font-bold mb-1'>{experience.title}</h3>
                     </Link>
                     <p className='text-gray-500 text-sm mb-2'>{experience.location}</p>
                     <div className='flex items-center text-sm mb-3'>
                        <Star size={16} className='text-yellow-500 mr-1' />
                        <span className='font-medium mr-1'>{experience.rating}</span>
                        <span className='text-gray-500'>({experience.reviews} reviews)</span>
                     </div>
                     <div className='flex justify-between items-center'>
                        <span className='font-bold'>${experience.price}</span>
                        <span className='text-xs text-gray-500'>per person</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
