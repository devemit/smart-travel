import { Search, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DestinationsHero() {
   return (
      <div className='relative bg-gradient-to-r from-teal-600 to-blue-600 py-16'>
         <div className="absolute inset-0 bg-[url('/images/destinations-bg.jpg')] bg-cover bg-center opacity-25"></div>
         <div className='container mx-auto px-6 relative z-10 text-center'>
            <Globe className='h-16 w-16 text-white/70 mx-auto mb-4' />
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
               Discover Amazing Destinations
            </h1>
            <p className='text-xl text-white/90 max-w-2xl mx-auto mb-8'>
               Find your perfect destination from hundreds of locations around the world
            </p>

            <div className='max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-xl'>
               <div className='flex flex-col sm:flex-row gap-3'>
                  <div className='relative flex-grow'>
                     <Input
                        placeholder='Search for destinations by name, country, or region'
                        className='pr-10 bg-white'
                     />
                     <Search
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                        size={18}
                     />
                  </div>
                  <Button className='bg-primary hover:bg-primary/90'>Find Destinations</Button>
               </div>
            </div>
         </div>
      </div>
   );
}
