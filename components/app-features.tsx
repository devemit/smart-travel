import { Globe, MapPin, Sun, User } from 'lucide-react';

const features = [
   {
      icon: <Globe className='h-10 w-10 text-primary' />,
      title: 'Smart Destinations',
      description: 'Discover destinations tailored to your preferences and travel style.',
   },
   {
      icon: <MapPin className='h-10 w-10 text-primary' />,
      title: 'Travel Planner',
      description: 'Plan your itinerary with our intelligent trip builder.',
   },
   {
      icon: <Sun className='h-10 w-10 text-primary' />,
      title: 'Weather Insights',
      description: 'Get real-time weather forecasts for your travel dates.',
   },
   {
      icon: <User className='h-10 w-10 text-primary' />,
      title: 'Personalized',
      description: 'Your experiences inform better recommendations over time.',
   },
];

export default function AppFeatures() {
   return (
      <section className='container mx-auto px-4 sm:px-6 py-12 overflow-hidden'>
         <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12'>
            Travel Smarter with Our Features
         </h2>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            {features.map((feature, index) => (
               <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'
               >
                  <div className='flex justify-center mb-4'>{feature.icon}</div>
                  <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
}
