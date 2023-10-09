import CapitalWeather, { Weather } from "./CapitalWeather";
import classes from "./CapitalWeathers.module.scss";

const mockWeathers: Weather[] = [
  { max: 36, min: 34, city: "Fortaleza" },
  { max: 36, min: 34, city: "Belo Horizonte" },
  { max: 36, min: 34, city: "Manaus" },
  { max: 36, min: 34, city: "São Paulo" },
  { max: 36, min: 34, city: "Porto Alegre" },
];

const CapitalWeathers = () => {
  return (
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

      {mockWeathers.map((weather, index) => (
        <CapitalWeather weather={weather} key={index} />
      ))}
    </div>
  );
};

export default CapitalWeathers;
