import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function WeatherMap() {
   return (
      <Card>
         <CardHeader className='pb-3'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
               <CardTitle>Weather Map</CardTitle>
               <select className='w-full sm:w-auto px-2 py-1 text-sm border rounded'>
                  <option value='temperature'>Temperature</option>
                  <option value='precipitation'>Precipitation</option>
                  <option value='clouds'>Clouds</option>
                  <option value='wind'>Wind</option>
               </select>
            </div>
         </CardHeader>
         <CardContent>
            <div className='relative aspect-video rounded-md overflow-hidden border border-gray-200'>
               <Image
                  src='https://images.unsplash.com/photo-1735660244565-9574ca46c57d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Weather map'
                  fill
                  className='object-cover'
               />
               <div className='absolute inset-0 bg-black/20 flex items-center justify-center p-4'>
                  <p className='text-white bg-black/50 px-4 py-2 rounded-md text-center text-sm'>
                     Interactive map will be available soon
                  </p>
               </div>
            </div>
            <div className='mt-4 text-xs sm:text-sm text-gray-500'>
               Select different layers to view temperature, precipitation, cloud coverage and wind
               conditions.
            </div>
         </CardContent>
      </Card>
   );
}
