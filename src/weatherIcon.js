import React, { useState, useEffect, useCallback } from "react";

function WeatherIcon(props) {
  const [weather, setWeather]  = useState();

  const fetchWeather = useCallback(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=${props?.location || "Johannesburg"}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Weather data",data)
            setWeather(data);
        });
  },[props]);

  useEffect(() => {
      fetchWeather();
  },[fetchWeather]);

  return (
    <>
        {weather?.current.condition.icon ? (
          <span>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          </span>
        ) : (
          <span>Loading Image</span>
        )}
    </>
  );
}

export default WeatherIcon;
