export default function AboutHero() {
   return (
      <div className='relative h-[50vh] bg-gradient-to-r from-blue-700 to-purple-700 flex items-center'>
         <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-25"></div>
         <div className='container mx-auto px-6 relative z-10 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>About Smart Travel</h1>
            <p className='text-xl text-white/90 max-w-2xl mx-auto'>
               Transforming the way people explore the world with intelligent travel solutions
            </p>
         </div>
      </div>
   );
}
