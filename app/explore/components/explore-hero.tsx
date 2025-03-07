import { Search, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ExploreHero() {
   return (
      <div className='relative bg-gradient-to-r from-indigo-600 to-purple-600 py-16'>
         <div className="absolute inset-0 bg-[url('/images/explore-bg.jpg')] bg-cover bg-center opacity-20"></div>
         <div className='container mx-auto px-6 relative z-10 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Explore the World</h1>
            <p className='text-xl text-white/90 max-w-2xl mx-auto mb-8'>
               Discover unique destinations, authentic experiences, and hidden gems around the globe
            </p>

            <div className='max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-xl'>
               <div className='flex flex-col sm:flex-row gap-3'>
                  <div className='relative flex-grow'>
                     <MapPin
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                        size={20}
                     />
                     <Input
                        placeholder='What would you like to explore?'
                        className='pl-10 bg-white'
                     />
                  </div>
                  <Button className='bg-primary hover:bg-primary/90 flex gap-2 items-center'>
                     <Search size={18} />
                     Discover
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
