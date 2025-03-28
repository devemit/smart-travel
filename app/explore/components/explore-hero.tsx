export default function ExploreHero() {
   return (
      <div className='relative bg-gradient-to-r from-indigo-600 to-purple-600 py-16'>
         <div className="absolute inset-0 bg-[url('/images/explore-bg.jpg')] bg-cover bg-center opacity-20"></div>
         <div className='container mx-auto px-6 relative z-10 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Explore the World</h1>
            <p className='text-xl text-white/90 max-w-2xl mx-auto mb-8'>
               Discover unique destinations, authentic experiences, and hidden gems around the globe
            </p>
         </div>
      </div>
   );
}
