// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request: { headers: { get: (arg0: string) => any }; method: string }) {
   const response = NextResponse.next();

   // Define allowed origins
   const allowedOrigins = ['https://your-frontend-domain.com', 'https://another-domain.com'];
   const origin = request.headers.get('origin');

   // Add CORS headers
   if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
   }
   response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

   // Handle preflight requests
   if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
         headers: response.headers,
      });
   }

   return response;
}

export const config = {
   matcher: '/api/:path*', // Apply to all API routes
};
