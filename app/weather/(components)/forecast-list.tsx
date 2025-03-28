import Image from 'next/image';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ForecastData } from '@/types/weather';

export default function ForecastList({ forecastData }: { forecastData?: ForecastData }) {
   return (
      <Card>
         <Tabs defaultValue='daily' className='p-4 sm:p-6'>
            <div className='w-full overflow-x-auto'>
               <TabsList className='mb-6 w-full justify-start sm:justify-center'>
                  <TabsTrigger value='daily'>Daily Forecast</TabsTrigger>
               </TabsList>
            </div>

            <div className='flex justify-center items-center'>
               {!forecastData?.forecast.forecastday && (
                  <p className='text-gray-500'>No forecast data available</p>
               )}
            </div>

            <TabsContent value='daily' className='space-y-0'>
               <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
                  {forecastData?.forecast?.forecastday.map((day) => (
                     <div key={day.date} className='p-3 md:p-4 text-center'>
                        <p className='text-xs md:text-sm text-gray-500 mb-1 md:mb-2'>{day.date}</p>
                        <div className='flex justify-center items-center mb-2'>
                           <Image
                              src={`https:${day.day.condition.icon}`}
                              alt={day.day.condition.text}
                              width={75}
                              height={75}
                           />
                        </div>
                        <div className='flex justify-center items-center gap-1 md:gap-2'>
                           <span className='font-medium text-sm md:text-base'>
                              {day.day.maxtemp_c}°
                           </span>
                           <span className='text-gray-400 text-sm md:text-base'>
                              {day.day.mintemp_c}°
                           </span>
                        </div>
                        <p className='text-xs md:text-sm mt-1 md:mt-2'>{day.day.condition.text}</p>
                     </div>
                  ))}
               </div>
            </TabsContent>
         </Tabs>
      </Card>
   );
}
