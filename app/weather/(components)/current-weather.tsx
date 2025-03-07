import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';

const weatherData = {
   location: 'New York, USA',
   date: 'Monday, July 15, 2023',
   time: '12:30 PM',
   temperature: 24,
   condition: 'Partly Cloudy',
   feelsLike: 26,
   humidity: 65,
   windSpeed: 12,
   windDirection: 'NE',
   uvIndex: 5,
   precipitation: 20,
   icon: '☁️',
};

export default function CurrentWeather() {
   return (
      <Card className='overflow-hidden'>
         <div className='p-4 sm:p-6'>
            <div className='flex justify-between items-start mb-4 sm:mb-6'>
               <div>
                  <h2 className='text-xl sm:text-2xl font-bold'>{weatherData.location}</h2>
                  <p className='text-sm text-gray-500'>
                     {weatherData.date} | {weatherData.time}
                  </p>
               </div>
               <div className='text-4xl sm:text-6xl'>{weatherData.icon}</div>
            </div>

            <div className='flex items-center mb-6 sm:mb-8'>
               <span className='text-3xl sm:text-5xl font-bold'>{weatherData.temperature}°C</span>
               <div className='ml-4 sm:ml-6'>
                  <p className='text-base sm:text-lg'>{weatherData.condition}</p>
                  <p className='text-sm text-gray-500'>Feels like {weatherData.feelsLike}°C</p>
               </div>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
               <div className='flex items-center'>
                  <Thermometer className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Feels Like</p>
                     <p className='text-sm font-medium'>{weatherData.feelsLike}°C</p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Droplets className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Humidity</p>
                     <p className='text-sm font-medium'>{weatherData.humidity}%</p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Wind className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Wind</p>
                     <p className='text-sm font-medium'>
                        {weatherData.windSpeed} km/h {weatherData.windDirection}
                     </p>
                  </div>
               </div>

               <div className='flex items-center'>
                  <Cloud className='text-primary mr-2 h-5 w-5' />
                  <div>
                     <p className='text-xs sm:text-sm text-gray-500'>Precipitation</p>
                     <p className='text-sm font-medium'>{weatherData.precipitation}%</p>
                  </div>
               </div>
            </div>
         </div>
      </Card>
   );
}
