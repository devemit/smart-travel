'use client';

import Image from 'next/image';
import { useState } from 'react';

export const TabTitle = ({
   title,
   index,
   activeTab,
   setActiveTab,
}: {
   title: string;
   index: number;
   activeTab: number;
   setActiveTab: (index: number) => void;
}) => {
   return (
      <button
         onClick={() => setActiveTab(index)}
         className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            activeTab === index
               ? 'bg-white text-blue-800 font-medium'
               : 'text-white hover:bg-white/10'
         }`}
      >
         {title}
      </button>
   );
};

export const TabContent = ({
   title,
   index,
   desc,
   img,
   activeTab,
}: {
   title: string;
   index: number;
   desc: string;
   img: string;
   activeTab: number;
}) => {
   return (
      <div
         className={`absolute inset-0 transition-opacity duration-300 ${
            activeTab === index ? 'opacity-100' : 'opacity-0'
         }`}
      >
         <Image
            src={img}
            alt={title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={index === 0}
         />
         <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
         <div className='absolute bottom-0 left-0 right-0 p-6'>
            <p className='text-white font-medium text-lg'>{desc}</p>
         </div>
      </div>
   );
};

export const Tabs = ({
   tabs,
}: {
   tabs: { title: string; description: string; image: string }[];
}) => {
   const [activeTab, setActiveTab] = useState(0);

   return (
      <>
         <div className='flex mb-4 gap-2'>
            {tabs.map((tab, index) => (
               <TabTitle
                  key={index}
                  title={tab.title}
                  index={index}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
            ))}
         </div>

         <div className='relative rounded-lg overflow-hidden aspect-[4/3] bg-gray-900'>
            {tabs.map((tab, index) => (
               <TabContent
                  key={index}
                  index={index}
                  title={tab.title}
                  desc={tab.description}
                  img={tab.image}
                  activeTab={activeTab}
               />
            ))}
         </div>
      </>
   );
};
