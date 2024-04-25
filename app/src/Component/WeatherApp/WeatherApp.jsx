import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import clear from "../Media/clear.png";
import cloud from "../Media/cloud.png";
import drizzle from "../Media/drizzle.png";
import rain from "../Media/rain.png";
import search_icon from "../Media/search.png";
import snow from "../Media/snow.png";
import humidity_icon from "../Media/humidity.png";
import wind_icon from "../Media/wind.png";

const WeatherApp = () => {
  let apikey = "3e08c64cba5faf08aaee48b3b8d98189";
  const defaultCity = "Pune";

  const [wicon, setWicon] = useState(cloud);
  const [weatherData, setWeatherData] = useState({
    humidity: "",
    wind: "",
    temperature: "",
    location: defaultCity
  });

  useEffect(() => {
    search(defaultCity);
  }, []);

  const search = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apikey}`;

    let response = await fetch(url);
    let data = await response.json();

    setWeatherData({
      humidity: data.main.humidity + " %",
      wind: data.wind.speed + " km/h",
      temperature: Math.floor(data.main.temp) + "°c",
      location: data.name
    });

    setWeatherIcon(data.weather[0].icon);
  };

  const setWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        setWicon(clear);
        break;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
        setWicon(cloud);
        break;
      case "04d":
      case "04n":
        setWicon(drizzle);
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        setWicon(rain);
        break;
      case "13d":
      case "13n":
        setWicon(snow);
        break;
      default:
        setWicon(clear);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder="Search cities" />
        <div
          className="search-icon"
          onClick={() => {
            const element = document.getElementsByClassName("cityinput");
            search(element[0].value || defaultCity);
          }}
        >
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="img" />
      </div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind">{weatherData.wind}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
