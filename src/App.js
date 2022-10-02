import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Weather App</p>
          <Weather />
          <a href="https://github.com/MarynaMVM/my-react-app">GitHub</a>
        </div>
      </header>
    </div>
  );
}

export default App;
