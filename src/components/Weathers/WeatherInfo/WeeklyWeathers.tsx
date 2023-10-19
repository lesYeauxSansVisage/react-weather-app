import { useContext } from "react";
import classes from "./WeeklyWeathers.module.scss";
import WeatherContext from "../../../store/weather-context";

const getWeekDay = (dayNumber: number) => {
  const weekDaysName = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return weekDaysName[dayNumber];
};

const formatApiDate = (apiDate: string) => {
  const formattedDate = apiDate.split("-").join(",");

  return formattedDate;
};

const WeeklyWeathers = () => {
  const { foreCastData } = useContext(WeatherContext);

  const weeklyWeathersArray = foreCastData?.forecast.forecastday
    .splice(1, foreCastData.forecast.forecastday.length - 1)
    .map((day) => {
      const formattedData = formatApiDate(day.date);

      const weekdayNumber = new Date(formattedData).getDay();

      const weekdayName = getWeekDay(weekdayNumber);

      return {
        ...day,
        weekdayName: weekdayName,
      };
    });

  return (
    <div className={classes["weekly-weather"]}>
      {weeklyWeathersArray!.map((weeklyDay) => (
        <div key={weeklyDay.date} className={classes["weekly-weather__day"]}>
          <p className={classes["weekly-weather__day-name"]}>
            {weeklyDay.weekdayName}
          </p>
          <p className={classes["weekly-weather__day-temperature"]}>
            <span>{Math.round(weeklyDay.day.mintemp_c) + "%"}</span>
            <span>{Math.round(weeklyDay.day.maxtemp_c) + "%"}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyWeathers;
