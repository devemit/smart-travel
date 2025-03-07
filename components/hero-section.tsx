import { Button } from './ui/button';

export default function HeroSection() {
   return (
      <div className='relative h-[70vh] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center'>
         <div className="absolute inset-0 bg-[url('/images/travel-bg.jpg')] bg-cover bg-center opacity-30"></div>
         <div className='container mx-auto px-6 relative z-10'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
               Discover Your Next <br />
               Adventure
            </h1>
            <p className='text-xl text-white/90 max-w-lg mb-8'>
               Plan your perfect trip with our smart travel companion. Get personalized
               recommendations, weather forecasts, and travel tips.
            </p>
            <div className='flex gap-4'>
               <Button size='lg' className='bg-white text-blue-600 hover:bg-white/90'>
                  Plan Your Trip
               </Button>
               <Button
                  size='lg'
                  variant='outline'
                  className='text-white border-white hover:bg-white/10'
               >
                  Explore Destinations
               </Button>
            </div>
         </div>
      </div>
   );
}
