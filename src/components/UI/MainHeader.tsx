import { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./MainHeader.module.scss";

const MainHeader = () => {
  const { foreCastData } = useContext(WeatherContext);

  const fontSize = foreCastData ? "default" : "big";

  const titleClasses = classes[`${fontSize}`];

  return (
    <header className={classes.header}>
      <h1 className={titleClasses}>Previsão do Tempo</h1>
    </header>
  );
};

export default MainHeader;
