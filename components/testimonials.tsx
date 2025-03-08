import Image from 'next/image';

const testimonials = [
   {
      quote: 'Smart Travel made planning my European vacation so easy. The recommendations were spot on!',
      name: 'Sarah Johnson',
      title: 'Adventure Traveler',
      avatar:
         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      quote: 'I love how the app shows me weather forecasts for my destinations. It&apos;s helped me pack perfectly every time.',
      name: 'Michael Chen',
      title: 'Business Traveler',
      avatar:
         'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      quote: 'The personalized recommendations have introduced me to hidden gems I would have never found otherwise.',
      name: 'Priya Sharma',
      title: 'Culture Explorer',
      avatar:
         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
];

export default function Testimonials() {
   return (
      <section className='container mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden'>
         <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4'>What Our Travelers Say</h2>
         <p className='text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto'>
            Join thousands of satisfied travelers who have discovered new destinations and
            experiences with Smart Travel.
         </p>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {testimonials.map((item, index) => (
               <div key={index} className='bg-white p-6 rounded-xl shadow-md'>
                  <div className='flex items-center mb-4'>
                     <div className='relative h-12 w-12 rounded-full overflow-hidden mr-4'>
                        <Image src={item.avatar} alt={item.name} fill className='object-cover' />
                     </div>
                     <div>
                        <h3 className='font-bold'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.title}</p>
                     </div>
                  </div>
                  <p className='text-gray-700 italic'>&quot;{item.quote}&quot;</p>
               </div>
            ))}
         </div>
      </section>
   );
}
