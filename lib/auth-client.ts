import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
   baseURL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.NODE_ENV === 'production'
         ? 'https://smart-travel-devemits-projects.vercel.app/'
         : 'http://localhost:3000'),
});
