type ApiDataType = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };

  forecast: {
    forecastday: ForecastDayType[];
  };
};

type ForecastDayType = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
  };
};

export type { ApiDataType };

export type { ForecastDayType };
