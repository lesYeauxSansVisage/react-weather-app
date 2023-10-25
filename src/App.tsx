import "./App.scss";
import CapitalWeathers from "./components/Weathers/CapitalWeathers/CapitalWeathers";
import MainHeader from "./components/UI/MainHeader";
import WeatherForm from "./components/Weathers/WeatherForm";
import WeatherInfo from "./components/Weathers/WeatherInfo/WeatherInfo";
import { WeatherContextProvider } from "./store/weather-context";

function App() {
  return (
    <div className="container">
      <WeatherContextProvider>
        <MainHeader />
        <WeatherInfo />
        <WeatherForm />
        <CapitalWeathers />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
