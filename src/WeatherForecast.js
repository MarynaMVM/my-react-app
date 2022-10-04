import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thu</div>
          <h5>icon</h5>
          <div>
            <span className="max-temp">15°</span>
            <span className="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
