import Image from 'next/image';
import Link from 'next/link';

const collections = [
   {
      id: 1,
      title: 'Hidden Gems of Europe',
      description: 'Discover lesser-known destinations away from the tourist crowds',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1986&auto=format&fit=crop',
      destinations: 12,
   },
   {
      id: 2,
      title: 'Tropical Paradise Getaways',
      description: 'The most stunning beaches and island retreats around the world',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop',
      destinations: 8,
   },
   {
      id: 3,
      title: 'Adventure Awaits',
      description: 'For adrenaline seekers: hiking, climbing, and outdoor adventures',
      image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1974&auto=format&fit=crop',
      destinations: 15,
   },
];

export default function FeaturedCollections() {
   return (
      <section className='max-w-full overflow-hidden'>
         <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6'>
            <h2 className='text-2xl font-bold'>Featured Collections</h2>
            <Link href='/explore' className='text-primary hover:underline text-sm font-medium'>
               View All Collections
            </Link>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            {collections.map((collection) => (
               <Link
                  key={collection.id}
                  href='/explore'
                  className='group block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow'
               >
                  <div className='relative h-48'>
                     <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                     />
                     <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
                     <div className='absolute bottom-0 left-0 p-4 text-white'>
                        <h3 className='font-bold text-lg'>{collection.title}</h3>
                        <p className='text-sm text-white/80'>
                           {collection.destinations} destinations
                        </p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
}
