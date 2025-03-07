import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const popularCities = [
   { city: 'London', country: 'UK', temperature: 19, condition: '🌧️ Rainy' },
   { city: 'Paris', country: 'France', temperature: 23, condition: '⛅ Partly Cloudy' },
   { city: 'Tokyo', country: 'Japan', temperature: 28, condition: '☀️ Sunny' },
   { city: 'Sydney', country: 'Australia', temperature: 17, condition: '☀️ Sunny' },
   { city: 'New York', country: 'USA', temperature: 24, condition: '☁️ Cloudy' },
];

export default function PopularCities() {
   return (
      <Card>
         <CardHeader className='px-4 sm:px-6 py-4'>
            <CardTitle>Popular Cities</CardTitle>
         </CardHeader>
         <CardContent className='px-2 py-0'>
            <div className='divide-y divide-gray-100'>
               {popularCities.map((city) => (
                  <Link
                     href={`#${city.city.toLowerCase()}`}
                     key={city.city}
                     className='flex items-center justify-between py-2 sm:py-3 px-2 sm:px-4 hover:bg-gray-50 rounded-md'
                  >
                     <div>
                        <p className='font-medium text-sm sm:text-base'>{city.city}</p>
                        <p className='text-xs sm:text-sm text-gray-500'>{city.country}</p>
                     </div>
                     <div className='text-right'>
                        <p className='font-medium text-sm sm:text-base'>{city.temperature}°C</p>
                        <p className='text-xs sm:text-sm text-gray-500'>{city.condition}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </CardContent>
      </Card>
   );
}
