import React, { useState } from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [message, setMessage] = useState("");

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      <div>
        <WeatherTemperature celsius={weather.temperature} />
        <div className="row">
          <div className="col-8">
            <ul>
              <li>Wind: {weather.wind} km/h</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Description: {weather.description}</li>
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <img className="m-0" src={weather.icon} alt="icon" />
            </ul>
          </div>
        </div>

        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let apiKey = "7d478f69e1b2f5d563653f13f5f91d76"; //"e288098f1d3541b4647bed4f5298449a";
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
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="type City"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary btn-primary-sm w-20 "
              type="submit"
              value="Search"
            />
          </div>
        </div>
        <h1>{message}</h1>
      </form>
    );
  }
}
