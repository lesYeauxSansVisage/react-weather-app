import { useContext, useEffect } from "react";
import CapitalWeather from "./CapitalWeather";
import classes from "./CapitalWeathers.module.scss";
import WeatherContext from "../../../store/weather-context";
import LoadingSpinner from "../../UI/LoadingSpinner";

const CapitalWeathers = () => {
  const {
    capitalForecastData,
    isCapitalForecastDataLoading,
    getCapitalWeather,
  } = useContext(WeatherContext);

  useEffect(() => {
    getCapitalWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isCapitalForecastDataLoading) {
    return <LoadingSpinner />;
  }

  if (!capitalForecastData) {
    return;
  }

  const mappedWeathers = capitalForecastData!.map((data) => {
    return {
      min: Math.round(data.forecast.forecastday[0].day.mintemp_c),
      max: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
      city: data.location.name,
    };
  });

  return (
    <section className={classes["capital-weathers-section"]}>
      <h2 className={classes["capital-weathers-section__title"]}>Capitais</h2>
      <div className={classes["capital-weathers"]}>
        <CapitalWeather
          weather={{
            max: "Max",
            min: "Min",
          }}
        />

        <CapitalWeather
          weather={{
            max: "Max",
            min: "Min",
          }}
        />

        {mappedWeathers.map((weather, index) => (
          <CapitalWeather weather={weather} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CapitalWeathers;
