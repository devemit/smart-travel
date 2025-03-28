import { Globe } from 'lucide-react';

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
         </div>
      </div>
   );
}
