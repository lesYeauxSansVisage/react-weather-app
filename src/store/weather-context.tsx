import React, { useState } from "react";
import ApiDataType from "../types/ApiDataType";

type Props = React.PropsWithChildren;

export const mockApiData: ApiDataType = {
  location: {
    name: "Niteroi",
    region: "Rio de Janeiro",
    country: "Brazil",
  },
  current: {
    temp_c: 26.0,

    condition: {
      text: "Encoberto",
      icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
    },
    wind_kph: 15.1,
    humidity: 70,
    feelslike_c: 29.7,
  },
  forecast: {
    forecastday: [
      {
        date: "2023-10-10",
        day: {
          maxtemp_c: 25,
          mintemp_c: 19,
        },
      },
    ],
  },
};

type WeatherContextTypes = {
  getForecast: (city: string) => void;
  resetForecast: () => void;
  foreCastData: ApiDataType | null;
};

export const WeatherContext = React.createContext<WeatherContextTypes>({
  getForecast: () => {},
  resetForecast: () => {},
  foreCastData: {} as ApiDataType,
});

export const WeatherContextProvider = (props: Props) => {
  const [foreCastData, setForeCastData] = useState<ApiDataType | null>(null);

  const getForecast = async (city: string) => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=7b23400cf7984c81947145338230510&q=${city}&days=6&lang=pt&hours=23`
    );

    const res = await data.json();

    setForeCastData(res);
  };

  const resetForecast = () => {
    setForeCastData(null);
  };

  return (
    <WeatherContext.Provider
      value={{
        getForecast,
        foreCastData,
        resetForecast,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
