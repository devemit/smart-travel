'use client';

import { useState, useEffect } from 'react';

interface User {
   id: string;
   name: string;
   email: string;
}

const DUMMY_USER: User = {
   id: '1',
   name: 'John Doe',
   email: 'john@example.com',
};

const USE_DUMMY_USER = true;

export function useAuthState() {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(USE_DUMMY_USER);
   const [user, setUser] = useState<User | null>(USE_DUMMY_USER ? DUMMY_USER : null);

   useEffect(() => {
      const storedUser = localStorage.getItem('smartTravel_user');
      if (storedUser) {
         setUser(JSON.parse(storedUser));
         setIsAuthenticated(true);
      } else if (USE_DUMMY_USER) {
         localStorage.setItem('smartTravel_user', JSON.stringify(DUMMY_USER));
         setUser(DUMMY_USER);
         setIsAuthenticated(true);
      }
   }, []);

   return {
      isAuthenticated,
      user,
      login: (userData: User) => {
         setUser(userData);
         setIsAuthenticated(true);
         localStorage.setItem('smartTravel_user', JSON.stringify(userData));
      },
      logout: () => {
         setUser(null);
         setIsAuthenticated(false);
         localStorage.removeItem('smartTravel_user');
      },
   };
}
