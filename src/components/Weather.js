import React, { useState } from "react";
import axios from "axios";
import Custom from "./Custom";
import WeatherCard from "./WeatherCard";
import UserGroup from "./UserGroup";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userGroup, setUserGroup] = useState("");
  const [city, setCity] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
    }
  };

  console.log(weatherData);
  return (
    <div className="container">
      <header>
        <h1>Weather Dashboard</h1>
      </header>
      <UserGroup userGroup={userGroup} setUserGroup={setUserGroup} />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <WeatherCard weatherData={weatherData} userGroup={userGroup} />
      )}
      <Custom weatherData={weatherData} />
    </div>
  );
};

export default Weather;
