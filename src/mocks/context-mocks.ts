import type { ApiDataType } from "../types/ApiDataType";

export const valueWithError = {
  getForecast: () => {},
  foreCastData: null,
  resetForecast: () => {},
  isForecastLoading: false,
  capitalForecastData: null,
  getCapitalWeather: () => {},
  isCapitalForecastDataLoading: false,
  foreCastDataHasErrors: true,
};

export const valueWithLoading = {
  getForecast: () => {},
  foreCastData: null,
  resetForecast: () => {},
  isForecastLoading: true,
  capitalForecastData: null,
  getCapitalWeather: () => {},
  isCapitalForecastDataLoading: true,
  foreCastDataHasErrors: false,
};

export const apiMockResponse: ApiDataType = {
  location: {
    name: "Fortaleza",
    region: "Ceara",
    country: "Brazil",
  },
  current: {
    temp_c: 32.2,
    condition: {
      text: "Parcialmente nublado",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    },
    wind_kph: 19.1,
    humidity: 59,
    feelslike_c: 34.2,
  },
  forecast: {
    forecastday: [
      {
        date: "20-06-2024",
        day: {
          maxtemp_c: 30,
          mintemp_c: 25,
        },
      },
      {
        date: "21-06-2024",
        day: {
          maxtemp_c: 30,
          mintemp_c: 25,
        },
      },
    ],
  },
};

export const valueWithData = {
  getForecast: () => {},
  foreCastData: apiMockResponse,
  resetForecast: () => {},
  isForecastLoading: false,
  capitalForecastData: [],
  getCapitalWeather: () => {},
  isCapitalForecastDataLoading: false,
  foreCastDataHasErrors: false,
};

export const valueWithoutData = {
  getForecast: () => {},
  foreCastData: null,
  resetForecast: () => {},
  isForecastLoading: false,
  capitalForecastData: [],
  getCapitalWeather: () => {},
  isCapitalForecastDataLoading: false,
  foreCastDataHasErrors: false,
};
