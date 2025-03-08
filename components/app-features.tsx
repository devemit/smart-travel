import { MapPin, Calendar, CloudSun, CreditCard, Globe, HeartHandshake } from 'lucide-react';

export default function AppFeatures() {
   const features = [
      {
         icon: <Globe className='h-6 w-6 text-blue-600' />,
         title: 'Intelligent Recommendations',
         description: 'AI-powered suggestions based on your travel style and preferences',
      },
      {
         icon: <Calendar className='h-6 w-6 text-blue-600' />,
         title: 'Smart Itineraries',
         description: 'Create optimized day-by-day plans that make the most of your time',
      },
      {
         icon: <CloudSun className='h-6 w-6 text-blue-600' />,
         title: 'Real-time Weather',
         description: 'Make informed decisions with accurate forecasts for your destinations',
      },
      {
         icon: <CreditCard className='h-6 w-6 text-blue-600' />,
         title: 'Budget Tracking',
         description: 'Keep expenses under control with built-in financial planning tools',
      },
      {
         icon: <MapPin className='h-6 w-6 text-blue-600' />,
         title: 'Destination Discovery',
         description: 'Uncover hidden gems and local favorites wherever you travel',
      },
      {
         icon: <HeartHandshake className='h-6 w-6 text-blue-600' />,
         title: 'Travel Community',
         description: 'Connect with fellow travelers and share insider tips and experiences',
      },
   ];

   return (
      <section className='py-20 bg-white'>
         <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
               <p className='text-blue-600 font-medium mb-2 uppercase tracking-wide'>
                  Why Choose EasyTravel
               </p>
               <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                  Your All-in-One Travel Companion
               </h2>
               <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                  Simplify your travel experience with powerful features designed to make every
                  journey memorable
               </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12'>
               {features.map((feature, index) => (
                  <div key={index} className='relative'>
                     <div className='bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                        {feature.icon}
                     </div>
                     <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                     <p className='text-gray-600'>{feature.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
