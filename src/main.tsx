import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { WeatherContextProvider } from "./store/weather-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);
