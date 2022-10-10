import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className="day">{day()}</div>
      <img className="forecastIcon" src={icon} alt="icon" />
      <div>
        <span className="max-temp">{Math.round(props.data.temp.max)}° </span>
        <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
