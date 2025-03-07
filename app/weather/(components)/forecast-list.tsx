import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dailyForecast = [
   {
      day: 'Tuesday',
      date: 'Jul 16',
      high: 26,
      low: 18,
      condition: 'Sunny',
      icon: '☀️',
      precipitation: 0,
   },
   {
      day: 'Wednesday',
      date: 'Jul 17',
      high: 28,
      low: 19,
      condition: 'Partly Cloudy',
      icon: '⛅',
      precipitation: 10,
   },
   {
      day: 'Thursday',
      date: 'Jul 18',
      high: 25,
      low: 17,
      condition: 'Rainy',
      icon: '🌧️',
      precipitation: 80,
   },
   {
      day: 'Friday',
      date: 'Jul 19',
      high: 22,
      low: 16,
      condition: 'Thunderstorms',
      icon: '⛈️',
      precipitation: 75,
   },
   {
      day: 'Saturday',
      date: 'Jul 20',
      high: 24,
      low: 17,
      condition: 'Cloudy',
      icon: '☁️',
      precipitation: 30,
   },
   {
      day: 'Sunday',
      date: 'Jul 21',
      high: 27,
      low: 18,
      condition: 'Sunny',
      icon: '☀️',
      precipitation: 5,
   },
   {
      day: 'Monday',
      date: 'Jul 22',
      high: 29,
      low: 20,
      condition: 'Clear',
      icon: '☀️',
      precipitation: 0,
   },
];

const hourlyForecast = [
   { time: '2 PM', temp: 25, condition: 'Partly Cloudy', icon: '⛅', precipitation: 10 },
   { time: '4 PM', temp: 26, condition: 'Partly Cloudy', icon: '⛅', precipitation: 15 },
   { time: '6 PM', temp: 24, condition: 'Cloudy', icon: '☁️', precipitation: 20 },
   { time: '8 PM', temp: 22, condition: 'Cloudy', icon: '☁️', precipitation: 25 },
   { time: '10 PM', temp: 20, condition: 'Partly Cloudy', icon: '🌙', precipitation: 15 },
   { time: '12 AM', temp: 19, condition: 'Clear', icon: '🌙', precipitation: 0 },
   { time: '2 AM', temp: 18, condition: 'Clear', icon: '🌙', precipitation: 0 },
   { time: '4 AM', temp: 17, condition: 'Clear', icon: '🌙', precipitation: 0 },
   { time: '6 AM', temp: 18, condition: 'Sunrise', icon: '🌅', precipitation: 0 },
   { time: '8 AM', temp: 20, condition: 'Sunny', icon: '☀️', precipitation: 0 },
   { time: '10 AM', temp: 22, condition: 'Sunny', icon: '☀️', precipitation: 0 },
   { time: '12 PM', temp: 24, condition: 'Sunny', icon: '☀️', precipitation: 5 },
];

export default function ForecastList() {
   return (
      <Card>
         <Tabs defaultValue='daily' className='p-4 sm:p-6'>
            <div className='w-full overflow-x-auto'>
               <TabsList className='mb-6 w-full justify-start sm:justify-center'>
                  <TabsTrigger value='daily'>Daily Forecast</TabsTrigger>
                  <TabsTrigger value='hourly'>Hourly Forecast</TabsTrigger>
               </TabsList>
            </div>

            <TabsContent value='daily' className='space-y-0'>
               <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
                  {dailyForecast.map((day) => (
                     <div key={day.day} className='p-3 md:p-4 text-center'>
                        <p className='font-medium text-sm md:text-base'>{day.day}</p>
                        <p className='text-xs md:text-sm text-gray-500 mb-1 md:mb-2'>{day.date}</p>
                        <div className='text-2xl md:text-3xl my-1 md:my-2'>{day.icon}</div>
                        <div className='flex justify-center items-center gap-1 md:gap-2'>
                           <span className='font-medium text-sm md:text-base'>{day.high}°</span>
                           <span className='text-gray-400 text-sm md:text-base'>{day.low}°</span>
                        </div>
                        <p className='text-xs md:text-sm mt-1 md:mt-2'>{day.condition}</p>
                        <p className='text-xs text-gray-500 mt-1'>{day.precipitation}% rain</p>
                     </div>
                  ))}
               </div>
            </TabsContent>

            <TabsContent value='hourly'>
               <div className='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'>
                  <div className='inline-grid grid-flow-col gap-3 md:gap-4 pb-2 min-w-max'>
                     {hourlyForecast.map((hour) => (
                        <div key={hour.time} className='text-center w-16 sm:w-20'>
                           <p className='font-medium text-sm'>{hour.time}</p>
                           <div className='text-xl md:text-2xl my-1 md:my-2'>{hour.icon}</div>
                           <p className='font-medium text-sm'>{hour.temp}°</p>
                           <p className='text-xs text-gray-500 mt-1'>{hour.precipitation}%</p>
                        </div>
                     ))}
                  </div>
               </div>
            </TabsContent>
         </Tabs>
      </Card>
   );
}
