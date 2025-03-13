import { createAuthClient } from 'better-auth/react';

// Determine the base URL correctly for all environments
const getBaseUrl = () => {
   if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
   }

   if (process.env.NODE_ENV === 'production') {
      return 'https://smart-travel-devemits-projects.vercel.app';
   }

   return 'http://localhost:3000';
};

const baseURL = getBaseUrl();

// Log the baseURL to verify it's correct during initialization
if (typeof window !== 'undefined') {
   console.log('Auth client initialized with baseURL:', baseURL);
}

export const authClient = createAuthClient({
   baseURL,
   apiPath: '/api/auth',
});
