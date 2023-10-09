import classes from "./WeatherForm.module.scss";

const WeatherForm = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("submitted");
  };

  return (
    <form className={classes["weather-form"]} onSubmit={submitHandler}>
      <input type="text" placeholder="Insira aqui o nome da cidade" />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default WeatherForm;
