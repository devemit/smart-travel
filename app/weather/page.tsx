'use client';

import { useState } from 'react';

import WeatherSearch from './(components)/weather-search';
import CurrentWeather from './(components)/current-weather';
import ForecastList from './(components)/forecast-list';
import WeatherMap from './(components)/weather-map';
import PopularCities from './(components)/popular-cities';
import { WeatherData } from '@/types/weather';

export default function Weather() {
   const [weatherData, setWeatherData] = useState<WeatherData | undefined>(undefined);

   return (
      <main className='flex flex-col min-h-screen overflow-hidden'>
         <div className='relative bg-gradient-to-r from-blue-600 to-blue-400 py-8 sm:py-12'>
            <div className='container mx-auto px-4 sm:px-6 relative z-10'>
               <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6'>
                  Weather Forecasts
               </h1>
               <p className='text-base sm:text-xl text-white/90 max-w-2xl'>
                  Plan your trips with confidence by checking accurate weather forecasts for
                  destinations around the world.
               </p>

               <WeatherSearch onWeatherData={setWeatherData} />
            </div>
         </div>

         <div className='container mx-auto px-4 sm:px-6 py-6 sm:py-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
               <div className='lg:col-span-2 space-y-6 sm:space-y-8'>
                  <CurrentWeather weatherData={weatherData} />
                  <ForecastList />
               </div>
               <div className='space-y-6 sm:space-y-8'>
                  <WeatherMap />
                  <PopularCities />
               </div>
            </div>
         </div>
      </main>
   );
}
