import { ArrowRight } from 'lucide-react';

const tips = [
   {
      id: 1,
      title: '10 Essential Items for Every Trip',
      category: 'Packing Tips',
      readTime: '5 min read',
   },
   {
      id: 2,
      title: 'How to Find the Best Local Food',
      category: 'Food & Dining',
      readTime: '4 min read',
   },
   {
      id: 3,
      title: 'Budget Travel: Save Money While Exploring',
      category: 'Travel Hacks',
      readTime: '7 min read',
   },
   {
      id: 4,
      title: 'Solo Travel Safety Guide',
      category: 'Safety',
      readTime: '6 min read',
   },
];

export default function TravelTips() {
   return (
      <section className='container mx-auto px-4 sm:px-6 py-8 sm:py-12 overflow-hidden'>
         <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 sm:mb-8'>
            <h2 className='text-2xl sm:text-3xl font-bold'>Travel Tips & Guides</h2>
            <button className='text-primary hover:underline font-medium flex items-center'>
               All articles <ArrowRight size={16} className='ml-1' />
            </button>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {tips.map((tip) => (
               <div
                  key={tip.id}
                  className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
               >
                  <span className='text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full'>
                     {tip.category}
                  </span>
                  <h3 className='font-bold text-lg mt-3 mb-2'>{tip.title}</h3>
                  <p className='text-sm text-gray-500'>{tip.readTime}</p>
               </div>
            ))}
         </div>
      </section>
   );
}
