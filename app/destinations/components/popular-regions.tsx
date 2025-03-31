import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const regions = [
   {
      name: 'Europe',
      description: '45 countries, hundreds of cities',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: 156,
   },
   {
      name: 'Asia',
      description: 'Ancient traditions meet modern cities',
      image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&w=2070&auto=format&fit=crop',
      destinations: 142,
   },
   {
      name: 'Americas',
      description: 'From mountains to beaches and everything in between',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
      destinations: 128,
   },
   {
      name: 'Africa',
      description: 'Safari adventures and diverse cultures',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop',
      destinations: 87,
   },
   {
      name: 'Oceania',
      description: 'Island paradises and natural wonders',
      image: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=2070&auto=format&fit=crop',
      destinations: 63,
   },
];

export default function PopularRegions() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Popular Regions</CardTitle>
         </CardHeader>
         <CardContent className='p-0'>
            <div className='space-y-4'>
               {regions.map((region) => (
                  <div
                     key={region.name}
                     className='flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer'
                  >
                     <div className='relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0'>
                        <Image src={region.image} alt={region.name} fill className='object-cover' />
                     </div>
                     <div className='ml-3 flex-grow'>
                        <h3 className='font-medium'>{region.name}</h3>
                        <p className='text-sm text-gray-500'>{region.description}</p>
                     </div>
                     <div className='text-right'>
                        <span className='text-sm font-medium'>{region.destinations}</span>
                        <span className='text-xs text-gray-500 block'>destinations</span>
                     </div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>
   );
}
