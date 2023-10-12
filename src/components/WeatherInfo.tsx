import { useContext } from "react";
import classes from "./WeatherInfo.module.scss";
import WeeklyWeather from "./WeeklyWeather";
import WeatherContext from "../store/weather-context";

const WeatherInfo = () => {
  const weatherCtx = useContext(WeatherContext);

  return (
    <div className={classes["weather-info"]}>
      <span className={classes["weather-info__city"]}>
        {weatherCtx.foreCastData.location.name},{" "}
        {weatherCtx.foreCastData.location.region} -{" "}
        {weatherCtx.foreCastData.location.country}
      </span>
      <button className={classes["weather-info__close-btn"]}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <span
        className={classes["weather-info__weather"]}
      >{`${weatherCtx.foreCastData.current.temp_c}ºC ${weatherCtx.foreCastData.current.condition.text}`}</span>
      <div className={classes["weather-info__min-max"]}>
        <p className={classes["weather-info__min-max-text"]}>
          <i className="fa-solid fa-arrow-down"></i>
          {weatherCtx.foreCastData.forecast.forecastday[0].day.mintemp_c + "º"}
        </p>

        <p className={classes["weather-info__min-max-text"]}>
          <i className="fa-solid fa-arrow-up"></i>
          {weatherCtx.foreCastData.forecast.forecastday[0].day.maxtemp_c + "º"}
        </p>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Sensação: </span>
        <span
          className={classes["weather-info__text-number"]}
        >{`${weatherCtx.foreCastData.current.feelslike_c}ºC`}</span>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Vento: </span>
        <span
          className={classes["weather-info__text-number"]}
        >{`${weatherCtx.foreCastData.current.wind_kph}km/h`}</span>
      </div>

      <div className={classes["weather-info__text"]}>
        <span className={classes["weather-info__text-title"]}>Humidade: </span>
        <span
          className={classes["weather-info__text-number"]}
        >{`${weatherCtx.foreCastData.current.humidity}%`}</span>
      </div>

      <WeeklyWeather />
    </div>
  );
};

export default WeatherInfo;
