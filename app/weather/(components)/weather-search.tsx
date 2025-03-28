'use client';

import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { getForecastWeather, searchWeather } from '@/actions/weatherAction';
import { ForecastData, WeatherData } from '@/types/weather';

export default function WeatherSearch({
   onWeatherData,
   onForecastData,
   reccomendation,
}: {
   onWeatherData: (data: WeatherData) => void;
   onForecastData: (data: ForecastData) => void;
   reccomendation: string;
}) {
   const [searchTerm, setSearchTerm] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleSearch = async (term?: string) => {
      const searchValue = term || searchTerm;
      if (!searchValue.trim()) return;

      setIsLoading(true);

      try {
         const result = await searchWeather(searchValue);
         const forecast = await getForecastWeather(searchValue);
         if (result.success) {
            onWeatherData(result.data);
            onForecastData(forecast);
         }
      } catch (error) {
         console.error('Error fetching weather data:', error);
      } finally {
         setIsLoading(false);
      }
      if (!term) {
         setSearchTerm('');
      }
   };

   const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   useEffect(() => {
      if (reccomendation && !searchTerm) {
         handleSearch(reccomendation);
      }
   }, [reccomendation]);

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
                  value={searchTerm || reccomendation}
                  onChange={(e) => {
                     if (!e.target.value) {
                        setSearchTerm('');
                        handleSearch(reccomendation);
                     } else {
                        setSearchTerm(e.target.value);
                     }
                  }}
                  onKeyPress={handleKeyPress}
               />
            </div>
            <Button
               className='bg-primary hover:bg-primary/90 text-white flex gap-2 items-center'
               onClick={() => handleSearch()}
               disabled={isLoading}
            >
               <Search size={16} />
               {isLoading ? 'Loading...' : 'Get Weather'}
            </Button>
         </div>
      </div>
   );
}
