import React, { useState } from "react";
import { ApiDataType } from "../types/ApiDataType";

type Props = React.PropsWithChildren;

type WeatherContextTypes = {
  getForecast: (city: string) => void;
  resetForecast: () => void;
  foreCastData: ApiDataType | null;
  isLoading: boolean;
};

export const WeatherContext = React.createContext<WeatherContextTypes>({
  getForecast: () => {},
  resetForecast: () => {},
  foreCastData: {} as ApiDataType,
  isLoading: false,
});

export const WeatherContextProvider = (props: Props) => {
  const [foreCastData, setForeCastData] = useState<ApiDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getForecast = async (city: string) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7b23400cf7984c81947145338230510&q=${city}&days=6&lang=pt&hours=23`
      );

      if (data.ok) {
        const res = await data.json();
        console.log(res);

        setForeCastData(res);
      } else {
        throw new Error("Something has going wrong!");
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
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
        isLoading,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
