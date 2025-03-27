'use server';

export const getWeatherByCity = async (city: string) => {
   if (!process.env.WEATHER_API_KEY) {
      throw new Error('Weather API key is not configured');
   }

   const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`
   );

   if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to fetch weather data');
   }

   const data = await response.json();
   return data;
};

export const searchWeather = async (city: string) => {
   try {
      const data = await getWeatherByCity(city);
      return { success: true, data };
   } catch (error) {
      return {
         success: false,
         error: error instanceof Error ? error.message : 'Failed to fetch weather data',
      };
   }
};
