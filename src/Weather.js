import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [message, setMessage] = useState("");

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      <ul>
        <li>Temperature: {Math.round(weather.temperature)}</li>
        <li>Wind: {weather.wind}</li>
        <li>Humidity: {weather.humidity}</li>
        <li>Description: {weather.description}</li>

        <img src={weather.icon} alt="icon" />
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let apiKey = "87c1ffa5aeea6815bec2694e4cdfdd9e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);

  if (weather.temperature) {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type City" onChange={updateCity} />
        <input type="submit" value="Search" />
        <h1>{message}</h1>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type City" onChange={updateCity} />
        <input type="submit" value="Search" />
        <h4>Loading</h4>
      </form>
    );
  }
}
