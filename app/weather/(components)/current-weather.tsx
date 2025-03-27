import { Cloud, Droplets, Thermometer, Wind, Sun } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { WeatherData } from '@/types/weather';

export default function CurrentWeather({ weatherData }: { weatherData?: WeatherData }) {
   if (!weatherData) {
      return (
         <Card className='overflow-hidden'>
            <div className='p-8 text-center'>
               <div className='flex justify-center gap-4 mb-4'>
                  <Sun className='w-8 h-8 text-yellow-400' />
                  <Cloud className='w-8 h-8 text-blue-400' />
                  <Droplets className='w-8 h-8 text-blue-500' />
               </div>
               <h3 className='text-lg font-medium text-gray-600'>
                  Search for a city to see weather
               </h3>
            </div>
         </Card>
      );
   }

   return (
      <Card className='overflow-hidden'>
         <div className='p-4 sm:p-6'>
            <div className='flex justify-between items-start mb-4 sm:mb-6'>
               <div>
                  <h2 className='text-xl sm:text-2xl font-bold'>{weatherData?.location?.name}</h2>
                  <p className='text-sm text-gray-500'>{weatherData?.location?.localtime}</p>
               </div>
            </div>

            <div className='flex items-center mb-6 sm:mb-8'>
               <span className='text-3xl sm:text-5xl font-bold'>
                  {weatherData?.current?.temp_c}°C
               </span>
               <div className='ml-4 sm:ml-6'>
                  <p className='text-base sm:text-lg'>{weatherData?.current?.condition?.text}</p>
               </div>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
               <div className='flex items-center'>
                  <Thermometer className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Feels Like</p>
                     <p className='text-sm font-medium'>{weatherData?.current?.feelslike_c}</p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Droplets className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Humidity</p>
                     <p className='text-sm font-medium'>{weatherData?.current?.humidity}%</p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Wind className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Wind</p>
                     <p className='text-sm font-medium'>{weatherData.current.wind_kph}</p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Cloud className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Precipitation</p>
                     <p className='text-sm font-medium'>{weatherData?.current?.precip_mm}%</p>
                  </div>
               </div>
            </div>
         </div>
      </Card>
   );
}
