import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Weather from './weather';
import WeatherIcon from './weatherIcon';

window.renderWeather = (containerId, history, args) => {
  console.log("Arguments",{...args})
  ReactDOM.render(
    <Weather history={history} {...args} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountWeather = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

window.renderWeatherIcon = (containerId, history, args) => {
  ReactDOM.render(
    <WeatherIcon history={history} {...args} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountWeatherIcon = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (document.getElementById('weather-root')) {
  ReactDOM.render(<App />, document.getElementById('weather-root'));
  serviceWorker.unregister();
}