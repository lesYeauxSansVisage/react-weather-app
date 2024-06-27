import "./App.scss";
import CapitalWeathers from "./components/Weathers/CapitalWeathers/CapitalWeathers";
import MainHeader from "./components/UI/MainHeader";
import WeatherForm from "./components/Weathers/WeatherForm";
import WeatherInfo from "./components/Weathers/WeatherInfo/WeatherInfo";
import { WeatherContextProvider } from "./store/weather-context";
import SeparatorLine from "./components/UI/SeparatorLine";

function App() {
  return (
    <div className="container">
      <WeatherContextProvider>
        <MainHeader />
        <WeatherInfo />
        <WeatherForm />
        <SeparatorLine />
        <CapitalWeathers />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
