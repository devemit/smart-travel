export interface WeatherData {
   location: {
      name: string;
      region: string;
      country: string;
      localtime: string;
   };
   current: {
      temp_c: number;
      feelslike_c: number;
      humidity: number;
      wind_kph: number;
      wind_dir: string;
      precip_mm: number;
      condition: {
         text: string;
         icon: string;
      };
   };
}

export interface ForecastData {
   forecast: {
      forecastday: ForecastDay[];
   };
}

export interface ForecastDay {
   date: string;
   day: {
      maxtemp_c: number;
      mintemp_c: number;
      condition: {
         text: string;
         icon: string;
      };
   };
}
