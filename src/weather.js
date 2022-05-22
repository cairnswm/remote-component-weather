import React, { useState, useEffect, useCallback } from "react";

function Weather(props) {
  const [weather, setWeather]  = useState();

  const fetchWeather = useCallback(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=${props?.location || "Johannesburg"}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Weather data",data)
            setWeather(data);
        });
  },[props.location]);

  useEffect(() => {
      fetchWeather();
  },[fetchWeather]);

  return (
    <>
        {weather?.current.condition.icon ? (
          <span>
            Location: {props.location}<br/>
            Temp: {weather.current.temp_c} &deg;C<br/>
          </span>
        ) : (
          <span>Loading Image</span>
        )}
    </>
  );
}

export default Weather;
