import WeatherContext from "../../store/weather-context";
import classes from "./WeatherForm.module.scss";
import { useContext, useRef } from "react";

const WeatherForm = () => {
  const { getForecast } = useContext(WeatherContext);
  const cityRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cityInputValue = cityRef.current!.value;

    if (cityInputValue.trim() === "") {
      console.log("Por favor, insira uma cidade");
      return;
    }

    getForecast(cityInputValue);

    event.currentTarget.reset();
  };

  return (
    <form className={classes["weather-form"]} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Insira aqui o nome da cidade"
        ref={cityRef}
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default WeatherForm;
