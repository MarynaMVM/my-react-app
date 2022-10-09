import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h3>
        {" "}
        Weather is {Math.round(props.celsius)}{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </h3>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h3>
        {" "}
        Weather is {Math.round(fahrenheit)}{" "}
        <span className="unit">
          <a href="/" onClick={convertToC}>
            °C
          </a>{" "}
          | °F
        </span>
      </h3>
    );
  }
}
