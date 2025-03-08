import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Smart Travel - Your Intelligent Travel Companion',
   description: 'Plan your trips, discover new places, and travel smarter',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en' className='overflow-x-hidden'>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
         >
            <div className='flex flex-col min-h-screen overflow-x-hidden'>
               <Navbar />
               <div className='md:pb-0 pb-16 w-full overflow-x-hidden'>{children}</div>
            </div>
         </body>
      </html>
   );
}
