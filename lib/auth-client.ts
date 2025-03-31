import { createAuthClient } from 'better-auth/react';

// Determine the base URL correctly for all environments
const getBaseUrl = () => {
   if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
   }

   if (typeof window !== 'undefined') {
      // Use the current window location in production
      return window.location.origin;
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
