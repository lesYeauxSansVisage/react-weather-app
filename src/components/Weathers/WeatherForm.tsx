import WeatherContext from "../../store/weather-context";
import classes from "./WeatherForm.module.scss";
import { useContext, useRef, useState } from "react";

const WeatherForm = () => {
  const { getForecast } = useContext(WeatherContext);
  const cityRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cityInputValue = cityRef.current!.value;

    if (cityInputValue.trim() === "") {
      setError(true);
      return;
    }

    getForecast(cityInputValue);

    event.currentTarget.reset();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const formClasses = error
    ? `${classes["weather-form"]} ${classes["error"]}`
    : classes["weather-form"];

  return (
    <form
      className={formClasses}
      onSubmit={submitHandler}
      aria-label="city-search-form"
    >
      <input
        type="text"
        placeholder="Insira aqui o nome da cidade"
        onChange={changeHandler}
        ref={cityRef}
      />
      <button type="submit" aria-label="search-submit-button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default WeatherForm;
