export const capitalizeFirstLetter = (str: string) => {
   return str?.charAt(0).toUpperCase() + str?.slice(1);
};

export const getGreeting = () => {
   const hour = new Date().getHours();
   if (hour < 12) return 'Good morning';
   if (hour < 18) return 'Good afternoon';
   return 'Good evening';
};

export const firstLetter = (str: string) => {
   return str?.charAt(0);
};
