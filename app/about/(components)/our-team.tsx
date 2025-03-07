import Image from 'next/image';
import { Twitter, Linkedin, Github } from 'lucide-react';

const team = [
   {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former travel blogger with 10+ years in the tourism industry, passionate about sustainable travel.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D',
      social: {
         twitter: 'https://twitter.com/example',
         linkedin: 'https://linkedin.com/in/example',
         github: 'https://github.com/example',
      },
   },
   {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech innovator with background in AI and machine learning, focused on creating intuitive travel experiences.',
      image: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      social: {
         twitter: 'https://twitter.com/example',
         linkedin: 'https://linkedin.com/in/example',
         github: 'https://github.com/example',
      },
   },
   {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with expertise in UX/UI design and a passion for creating user-centered experiences.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      social: {
         twitter: 'https://twitter.com/example',
         linkedin: 'https://linkedin.com/in/example',
      },
   },
   {
      name: 'David Kim',
      role: 'Head of Partnerships',
      bio: 'Expert in building strategic partnerships with hotels, airlines, and local tourism boards globally.',
      image: 'https://images.unsplash.com/photo-1729558446316-67ed74b26d0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      social: {
         linkedin: 'https://linkedin.com/in/example',
      },
   },
];

export default function OurTeam() {
   return (
      <section className='container mx-auto px-6 py-16'>
         <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>Meet Our Team</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
               The passionate individuals behind Smart Travel&apos;s success
            </p>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member) => (
               <div
                  key={member.name}
                  className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group'
               >
                  <div className='relative h-72'>
                     <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                     />
                  </div>
                  <div className='p-6'>
                     <h3 className='text-xl font-bold text-gray-800'>{member.name}</h3>
                     <p className='text-primary font-medium mb-3'>{member.role}</p>
                     <p className='text-gray-600 mb-4 text-sm'>{member.bio}</p>

                     <div className='flex space-x-3'>
                        {member.social.twitter && (
                           <a
                              href={member.social.twitter}
                              className='text-gray-500 hover:text-primary'
                           >
                              <Twitter size={18} />
                           </a>
                        )}
                        {member.social.linkedin && (
                           <a
                              href={member.social.linkedin}
                              className='text-gray-500 hover:text-primary'
                           >
                              <Linkedin size={18} />
                           </a>
                        )}
                        {member.social.github && (
                           <a
                              href={member.social.github}
                              className='text-gray-500 hover:text-primary'
                           >
                              <Github size={18} />
                           </a>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
