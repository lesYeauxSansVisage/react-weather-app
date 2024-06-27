import { expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import WeatherInfo from "../WeatherInfo";
import { WeatherContext } from "../../../../store/weather-context";
import {
  valueWithError,
  valueWithLoading,
  valueWithData,
  valueWithoutData,
} from "../../../../mocks/context-mocks";

it("should show the error popup if foreCastDataHasErrors is true", () => {
  render(
    <WeatherContext.Provider value={valueWithError}>
      <WeatherInfo />
    </WeatherContext.Provider>
  );

  const errorPopup = screen.getByText(
    /Desculpa, não conseguimos achar o clima para a cidade que você procurou/i
  );

  expect(errorPopup).toBeInTheDocument();
});

it("should show the loading spinner if forecast is loading", () => {
  render(
    <WeatherContext.Provider value={valueWithLoading}>
      <WeatherInfo />
    </WeatherContext.Provider>
  );

  const loadingSpinner = screen.getByLabelText(/loading-spinner/i);

  expect(loadingSpinner).toBeInTheDocument();
});

it("should show the weather info when forecastData has a value", () => {
  render(
    <WeatherContext.Provider value={valueWithData}>
      <WeatherInfo />
    </WeatherContext.Provider>
  );

  const weatherInfo = screen.getByLabelText("weather-info");

  expect(weatherInfo).toBeInTheDocument();
});

it("should show not show the weather info when forecastData is null", () => {
  render(
    <WeatherContext.Provider value={valueWithoutData}>
      <WeatherInfo />
    </WeatherContext.Provider>
  );

  const weatherInfo = screen.queryByLabelText("weather-info");

  expect(weatherInfo).not.toBeInTheDocument();
});
