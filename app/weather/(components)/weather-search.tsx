'use client';

import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { searchWeather } from '@/actions/weatherAction';
import { WeatherData } from '@/types/weather';

export default function WeatherSearch({
   onWeatherData,
}: {
   onWeatherData: (data: WeatherData) => void;
}) {
   const [searchTerm, setSearchTerm] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleSearch = async () => {
      if (!searchTerm.trim()) return;

      setIsLoading(true);

      try {
         const result = await searchWeather(searchTerm);
         if (result.success) {
            onWeatherData(result.data);
         }
      } catch (error) {
         console.error('Error fetching weather data:', error);
      } finally {
         setIsLoading(false);
      }
      setSearchTerm('');
   };

   const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 sm:mt-8'>
         <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <div className='relative flex-grow'>
               <MapPin
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={18}
               />
               <Input
                  placeholder='Enter city or location'
                  className='pl-10'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
               />
            </div>
            <Button
               className='bg-primary hover:bg-primary/90 text-white flex gap-2 items-center'
               onClick={handleSearch}
               disabled={isLoading}
            >
               <Search size={16} />
               {isLoading ? 'Loading...' : 'Get Weather'}
            </Button>
         </div>
      </div>
   );
}
