import React, { useState } from "react";
import type { ApiDataType } from "../types/ApiDataType";

type Props = React.PropsWithChildren;

type WeatherContextTypes = {
  // eslint-disable-next-line no-unused-vars
  getForecast: (city: string) => void;
  resetForecast: () => void;
  foreCastData: ApiDataType | null;
  isForecastLoading: boolean;
  getCapitalWeather: () => void;
  capitalForecastData: ApiDataType[] | null;
  isCapitalForecastDataLoading: boolean;
  foreCastDataHasErrors: boolean;
};

export const WeatherContext = React.createContext<WeatherContextTypes>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  getForecast: async (_city: string) => {},
  resetForecast: () => {},
  foreCastData: {} as ApiDataType,
  isForecastLoading: false,
  getCapitalWeather: async () => {},
  capitalForecastData: [],
  isCapitalForecastDataLoading: false,
  foreCastDataHasErrors: false,
});

export const WeatherContextProvider = (props: Props) => {
  const [foreCastData, setForeCastData] = useState<ApiDataType | null>(null);
  const [capitalForecastData, setCapitalForeCastData] = useState<
    ApiDataType[] | null
  >(null);

  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [isCapitalForecastDataLoading, setIsCapitalForecastDataLoading] =
    useState(false);

  const [foreCastDataHasErrors, setForeCastDataHasErrors] = useState(false);

  const getForecast = async (city: string, days: number = 6) => {
    setIsForecastLoading(true);
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7b23400cf7984c81947145338230510&q=${city}&days=${days}&lang=pt&hours=23`
      );

      if (data.ok) {
        setForeCastDataHasErrors(false);
        const res = await data.json();

        setForeCastData(res);
      } else {
        setForeCastDataHasErrors(true);
        throw new Error(
          "Erro durante a busca. Há algum problema com os dados."
        );
      }

      setIsForecastLoading(false);
    } catch (e) {
      setIsForecastLoading(false);
      setForeCastDataHasErrors(true);
    }
  };

  const resetForecast = () => {
    setForeCastData(null);
  };

  const getCapitalWeather = async () => {
    setIsCapitalForecastDataLoading(true);
    const capitalNames = [
      "Rio de Janeiro",
      "Salvador",
      "São Paulo",
      "Curitiba",
      "Belo Horizonte",
      "Fortaleza",
      "Brasília",
      "Manaus",
      "Belém",
      "Joao Pessoa",
    ];
    const promises = [];

    for (const capital of capitalNames) {
      promises.push(
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=7b23400cf7984c81947145338230510&q=${capital}&days=1&lang=pt`
        )
      );
    }

    try {
      const res = await Promise.all(promises);
      const data = (await Promise.all(
        res.map((r) => r.json())
      )) as ApiDataType[];
      setCapitalForeCastData(data.flat());
      setIsCapitalForecastDataLoading(false);
    } catch (e) {
      throw new Error("Unable to get data");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        getForecast: getForecast,
        foreCastData: foreCastData,
        resetForecast: resetForecast,
        isForecastLoading: isForecastLoading,
        capitalForecastData: capitalForecastData,
        getCapitalWeather: getCapitalWeather,
        isCapitalForecastDataLoading: isCapitalForecastDataLoading,
        foreCastDataHasErrors: foreCastDataHasErrors,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
