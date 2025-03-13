import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
         },
         {
            protocol: 'https',
            hostname: 'images.unsplash.com',
         },
      ],
   },
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               {
                  key: 'Access-Control-Allow-Origin',
                  value:
                     process.env.NODE_ENV === 'production'
                        ? process.env.NEXT_PUBLIC_SITE_URL || '*'
                        : 'http://localhost:3000',
               },
               {
                  key: 'Access-Control-Allow-Methods',
                  value: 'GET, POST, PUT, DELETE, OPTIONS',
               },
               {
                  key: 'Access-Control-Allow-Headers',
                  value: 'Content-Type, Authorization',
               },
               {
                  key: 'Access-Control-Allow-Credentials',
                  value: 'true',
               },
            ],
         },
      ];
   },
};

export default nextConfig;
