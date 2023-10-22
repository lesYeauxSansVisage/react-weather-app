import classes from "./CapitalWeather.module.scss";

export type Weather = {
  min: string | number;
  max: string | number;
  city?: undefined | string;
};

type CapitalWeatherProps = {
  weather: Weather;
};

const CapitalWeather = ({ weather }: CapitalWeatherProps) => {
  const degreeSymbol = !weather.city ? "" : "º";
  const isBold = typeof weather.city === "string";

  return (
    <div
      className={`${classes["capital-weather"]} ${isBold ? classes.bold : ""}`}
    >
      <div>
        {weather.min}
        {degreeSymbol}
      </div>
      <div>
        {weather.max}
        {degreeSymbol}
      </div>
      <div>{weather.city}</div>
    </div>
  );
};
export default CapitalWeather;
