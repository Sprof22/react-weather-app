import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, log] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${log}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${log}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
