interface NavRoute {
   title: string;
   path: string;
   isProtected?: boolean;
   children?: NavRoute[];
}

export const navConfig: NavRoute[] = [
   {
      title: 'Home',
      path: '/',
   },
   {
      title: 'Destinations',
      path: '/destinations',
   },
   {
      title: 'Explore',
      path: '/explore',
   },
   {
      title: 'Weather',
      path: '/weather',
   },
   {
      title: 'About',
      path: '/about',
   },
];

export const protectedRoutes: NavRoute[] = [
   {
      title: 'Dashboard',
      path: '/dashboard',
      isProtected: true,
   },
   {
      title: 'Trips',
      path: '/trips',
      isProtected: true,
      children: [
         {
            title: 'My Trips',
            path: '/trips',
         },
         {
            title: 'Create Trip',
            path: '/trips/create',
         },
      ],
   },
   {
      title: 'Profile',
      path: '/profile',
      isProtected: true,
   },
   {
      title: 'Bookings',
      path: '/bookings',
      isProtected: true,
   },
];

export const authRoutes: NavRoute[] = [
   {
      title: 'Sign In',
      path: '/auth/signin',
   },
   {
      title: 'Sign Up',
      path: '/auth/signup',
   },
];
