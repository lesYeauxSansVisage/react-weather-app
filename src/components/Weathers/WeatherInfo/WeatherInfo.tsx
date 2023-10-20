import { useContext } from "react";
import classes from "./WeatherInfo.module.scss";
import WeeklyWeathers from "./WeeklyWeathers";
import WeatherContext from "../../../store/weather-context";
import LoadingSpinner from "../../UI/LoadingSpinner";

const WeatherInfo = () => {
  const { foreCastData, resetForecast, isForecastLoading } =
    useContext(WeatherContext);

  const closeHandler = () => {
    resetForecast();
  };

  if (isForecastLoading) {
    return <LoadingSpinner />;
  }

  if (!foreCastData) {
    return;
  }

  return (
    <div className={classes["weather-info"]}>
      <span className={classes["weather-info__city"]}>
        {foreCastData!.location.name}, {foreCastData!.location.region} -{" "}
        {foreCastData!.location.country}
      </span>
      <button
        className={classes["weather-info__close-btn"]}
        onClick={closeHandler}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <span className={classes["weather-info__weather"]}>{`${
        foreCastData!.current.temp_c
      }ºC ${foreCastData!.current.condition.text}`}</span>
      <div className={classes["weather-info__min-max"]}>
        <p className={classes["weather-info__min-max-text"]}>
          <i className="fa-solid fa-arrow-down"></i>
          {foreCastData!.forecast.forecastday[0].day.mintemp_c + "º"}
        </p>

        <p className={classes["weather-info__min-max-text"]}>
          <i className="fa-solid fa-arrow-up"></i>
          {foreCastData!.forecast.forecastday[0].day.maxtemp_c + "º"}
        </p>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Sensação: </span>
        <span className={classes["weather-info__text-number"]}>{`${
          foreCastData!.current.feelslike_c
        }ºC`}</span>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Vento: </span>
        <span className={classes["weather-info__text-number"]}>{`${
          foreCastData!.current.wind_kph
        }km/h`}</span>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Humidade: </span>
        <span className={classes["weather-info__text-number"]}>{`${
          foreCastData!.current.humidity
        }%`}</span>
      </div>

      <WeeklyWeathers />
    </div>
  );
};

export default WeatherInfo;
