import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const popularCities = [
   { city: 'London', country: 'UK', temperature: 19, condition: '🌧️ Rainy' },
   { city: 'Paris', country: 'France', temperature: 23, condition: '⛅ Partly Cloudy' },
   { city: 'Tokyo', country: 'Japan', temperature: 28, condition: '☀️ Sunny' },
   { city: 'Sydney', country: 'Australia', temperature: 17, condition: '☀️ Sunny' },
   { city: 'New York', country: 'USA', temperature: 24, condition: '☁️ Cloudy' },
];

export default function PopularCities({ onCityClick }: { onCityClick: (city: string) => void }) {
   return (
      <Card>
         <CardHeader className='px-4 sm:px-6 py-4'>
            <CardTitle>Popular Cities</CardTitle>
         </CardHeader>
         <CardContent className='px-2 py-0'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
               {popularCities.map((city) => (
                  <Button
                     variant='ghost'
                     key={city.city}
                     onClick={() => onCityClick(city.city)}
                     className='w-full h-auto py-3 px-4 hover:bg-gray-50 rounded-none flex flex-col items-center justify-center gap-1'
                  >
                     <div className='text-2xl mb-1'>{city.condition.split(' ')[0]}</div>
                     <p className='font-medium text-sm sm:text-base'>{city.city}</p>
                     <p className='text-xs text-gray-500'>{city.country}</p>
                     <p className='font-medium text-sm sm:text-base mt-1'>{city.temperature}°C</p>
                  </Button>
               ))}
            </div>
         </CardContent>
      </Card>
   );
}
