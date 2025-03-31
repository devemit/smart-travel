'use client';

import { useState } from 'react';

import Image from 'next/image';

interface FeaturedCollectionsProps {
   activeCategory: string;
}

const collections = [
   {
      id: 1,
      title: 'Hidden Gems of Europe',
      description: 'Discover lesser-known destinations away from the tourist crowds',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop',
      category: 'city',
      destinations: [
         {
            name: 'Hallstatt, Austria',
            description: 'A picturesque village nestled between mountains and a lake',
         },
         { name: 'Giethoorn, Netherlands', description: 'The Venice of the North with no roads' },
         {
            name: 'Cinque Terre, Italy',
            description: 'Five colorful villages perched on the Italian Riviera',
         },
      ],
   },
   {
      id: 2,
      title: 'Mediterranean Paradise',
      description: 'The most stunning coastal destinations in Southern Europe',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070&auto=format&fit=crop',
      category: 'beach',
      destinations: [
         {
            name: 'Santorini, Greece',
            description: 'Iconic white-washed buildings and stunning sunsets',
         },
         {
            name: 'Amalfi Coast, Italy',
            description: 'Dramatic coastline with colorful villages perched on cliffs',
         },
         { name: 'Costa Brava, Spain', description: 'Crystal clear waters and hidden coves' },
      ],
   },
   {
      id: 3,
      title: 'Alpine Adventures',
      description: 'For adrenaline seekers: hiking, climbing, and outdoor adventures in the Alps',
      image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2070&auto=format&fit=crop',
      category: 'adventure',
      destinations: [
         { name: 'Interlaken, Switzerland', description: 'Paradise for outdoor enthusiasts' },
         { name: 'Chamonix, France', description: 'Gateway to Mont Blanc and world-class skiing' },
         {
            name: "Cortina d'Ampezzo, Italy",
            description: 'Dolomites adventures and luxury resorts',
         },
      ],
   },
   {
      id: 4,
      title: 'European Culinary Journey',
      description: 'Explore Europe through its diverse flavors and food cultures',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
      category: 'culinary',
      destinations: [
         { name: 'Barcelona, Spain', description: 'Tapas and Mediterranean cuisine' },
         { name: 'Bologna, Italy', description: 'Home of authentic Italian cuisine' },
         {
            name: 'Copenhagen, Denmark',
            description: 'Nordic cuisine and Michelin-starred restaurants',
         },
      ],
   },
   {
      id: 5,
      title: 'European Nature Escapes',
      description: "Immerse yourself in Europe's most beautiful natural landscapes",
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
      category: 'nature',
      destinations: [
         {
            name: 'Swiss Alps, Switzerland',
            description: 'Majestic mountains and pristine lakes',
         },
         { name: 'Norwegian Fjords', description: 'Dramatic coastal landscapes and waterfalls' },
         { name: 'Plitvice Lakes, Croatia', description: 'Crystal clear lakes and waterfalls' },
      ],
   },
   {
      id: 6,
      title: 'Family Adventures in Europe',
      description: 'Perfect destinations for memorable family vacations',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
      category: 'family',
      destinations: [
         {
            name: 'Disneyland Paris, France',
            description: 'The magical world of Disney in Europe',
         },
         { name: 'Legoland, Denmark', description: 'Interactive LEGO-themed attractions' },
         {
            name: 'Europa-Park, Germany',
            description: "Europe's second-largest theme park",
         },
      ],
   },
   {
      id: 7,
      title: 'European Luxury Retreats',
      description: 'Exclusive destinations for the ultimate luxury experience',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      category: 'luxury',
      destinations: [
         { name: 'Monaco', description: 'Riviera glamour and high-end casinos' },
         { name: 'Lake Como, Italy', description: 'Luxury villas and stunning lake views' },
         { name: 'St. Moritz, Switzerland', description: 'Alpine luxury and world-class skiing' },
      ],
   },
];

// TODO: all the destinations listed make them in europe
// TODO: on the free routes, where we have destinations add a text "log in to plan your trip"
// TODO: remove the unnecessary Link tags

export default function FeaturedCollections({ activeCategory }: FeaturedCollectionsProps) {
   const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

   const filteredCollections = collections.filter(
      (collection) => activeCategory === 'all' || collection.category === activeCategory
   );

   return (
      <section className='max-w-full overflow-hidden'>
         <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6'>
            <h2 className='text-2xl font-bold'>Featured Collections</h2>
            <span className='hidden'>{hoveredCollection}</span>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            {filteredCollections.map((collection) => (
               <div
                  key={collection.id}
                  onMouseEnter={() => setHoveredCollection(collection.id)}
                  onMouseLeave={() => setHoveredCollection(null)}
                  className='relative group'
               >
                  <div className='relative h-[400px] rounded-xl shadow-md overflow-hidden'>
                     <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className='object-cover transition-all duration-500 group-hover:scale-110'
                     />

                     <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300' />

                     <div className='absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300'>
                        <h3 className='font-bold text-xl text-white mb-2 transition-transform duration-300 group-hover:-translate-y-2'>
                           {collection.title}
                        </h3>
                        <p className='text-sm text-white/80 mb-4 transition-opacity duration-300 group-hover:opacity-0'>
                           {collection.destinations.length} destinations
                        </p>

                        <div className='space-y-3 transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
                           {collection.destinations.map((destination, index) => (
                              <div
                                 key={index}
                                 className='flex flex-col space-y-1 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20'
                                 style={{ transitionDelay: `${index * 100}ms` }}
                              >
                                 <h4 className='text-sm font-medium leading-none text-white'>
                                    {destination.name}
                                 </h4>
                                 <p className='text-sm text-white/80'>{destination.description}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
