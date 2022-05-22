import React from "react";
import "./App.css";
import Weather from "./weather";
import WeatherIcon from "./weatherIcon";

function App() {
 

  return (
    <div>
      <header>
        <h3>Weather</h3>
        <Weather />
        <WeatherIcon />
      </header>
    </div>
  );
}

export default App;
