import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Weather />

          <br />
          <div>
            <p>
              This project was built by
              <a href="https://www.linkedin.com/in/marina-makarenkova-b86a29152/">
                {" "}
                Maryna Makarankava
              </a>
            </p>
          </div>
          <div>
            {" "}
            <p>
              It is open sourced on
              <a href="https://github.com/MarynaMVM/my-react-app"> GitHub</a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
