import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "18078e777072db84f45c739bd581d387";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h4>Currently in {city}</h4>
        <ul>
          <li> {Math.round(weather.temperature)} °C </li>
          <li>
            <img src={weather.icon} alt="weather Icon" />
          </li>
          <li> {weather.description}</li>
          <li> {weather.humidity}% Humidity</li>
          <li>{weather.wind} km/h winds</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
