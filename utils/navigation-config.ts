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
      title: 'My Trips',
      path: '/trips',
      isProtected: true,
      children: [
         {
            title: 'All Trips',
            path: '/trips',
         },
         {
            title: 'Create Trip',
            path: '/trips/create',
         },
      ],
   },
];

export const authRoutes: NavRoute[] = [
   {
      title: 'Sign In',
      path: '/signin',
   },
   {
      title: 'Sign Up',
      path: '/signup',
   },
];
