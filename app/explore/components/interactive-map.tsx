import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function InteractiveMap() {
   return (
      <Card className='w-full'>
         <CardHeader className='pb-2'>
            <CardTitle>Explore the Map</CardTitle>
         </CardHeader>
         <CardContent>
            <div className='relative aspect-square rounded-md overflow-hidden border border-gray-200'>
               <Image
                  src='https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop'
                  alt='Interactive map'
                  fill
                  className='object-cover'
               />
               <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
                  <p className='text-white bg-black/50 px-4 py-2 rounded-md text-center text-sm'>
                     Interactive map coming soon
                  </p>
               </div>
            </div>

            <div className='mt-4 text-sm text-gray-500'>
               Find destinations, attractions, and experiences around the world.
            </div>

            <div className='mt-4 space-y-2'>
               <div className='bg-gray-50 p-3 rounded-lg'>
                  <h3 className='font-medium text-sm'>Near You</h3>
                  <div className='mt-2 text-sm'>
                     <p className='text-gray-700'>
                        Enable location services to see options near you.
                     </p>
                  </div>
               </div>

               <div className='bg-gray-50 p-3 rounded-lg'>
                  <h3 className='font-medium text-sm'>Recently Viewed</h3>
                  <div className='mt-2 text-xs text-gray-500'>
                     <p>No recently viewed places</p>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
