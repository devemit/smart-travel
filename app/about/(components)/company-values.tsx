import { GlobeIcon, UserIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react';

const values = [
   {
      icon: <GlobeIcon className='h-10 w-10 text-primary' />,
      title: 'Global Perspective',
      description:
         'We embrace diversity and celebrate the unique cultures, traditions, and landscapes that make our world beautiful.',
   },
   {
      icon: <UserIcon className='h-10 w-10 text-primary' />,
      title: 'Traveler First',
      description:
         'Every decision we make is focused on enhancing the experience of travelers and making their journeys more memorable.',
   },
   {
      icon: <ShieldCheckIcon className='h-10 w-10 text-primary' />,
      title: 'Trust & Safety',
      description:
         'We prioritize the safety of our users and are committed to providing reliable, accurate information they can trust.',
   },
   {
      icon: <SparklesIcon className='h-10 w-10 text-primary' />,
      title: 'Innovation',
      description:
         'We continuously push boundaries, leveraging the latest technologies to revolutionize how people explore the world.',
   },
];

export default function CompanyValues() {
   return (
      <section className='bg-gray-50 py-16'>
         <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
               <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>Our Values</h2>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  The principles that guide everything we do at Smart Travel
               </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
               {values.map((value, index) => (
                  <div
                     key={index}
                     className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow'
                  >
                     <div className='mb-4'>{value.icon}</div>
                     <h3 className='text-xl font-bold mb-2 text-gray-800'>{value.title}</h3>
                     <p className='text-gray-600'>{value.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
