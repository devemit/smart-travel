import Link from 'next/link';
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
      <section className='container mx-auto px-6 py-12'>
         <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold'>Travel Tips & Guides</h2>
            <Link
               href='/blog'
               className='text-primary hover:underline font-medium flex items-center'
            >
               All articles <ArrowRight size={16} className='ml-1' />
            </Link>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {tips.map((tip) => (
               <Link
                  href={`/blog/${tip.id}`}
                  key={tip.id}
                  className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
               >
                  <span className='text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full'>
                     {tip.category}
                  </span>
                  <h3 className='font-bold text-lg mt-3 mb-2'>{tip.title}</h3>
                  <p className='text-sm text-gray-500'>{tip.readTime}</p>
               </Link>
            ))}
         </div>
      </section>
   );
}
