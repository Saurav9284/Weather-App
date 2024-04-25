import React from 'react'
import './WeatherApp.css'
import clear from '../Media/clear.png';
import cloud from '../Media/cloud.png';
import drizzle from '../Media/drizzle.png';
import rain from '../Media/rain.png';
import search from '../Media/search.png';
import snow from '../Media/snow.png';
import humidity from '../Media/humidity.png';
import wind from '../Media/wind.png';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityinput' placeholder='Search cities'/>
        <div className='search-icon'>
           <img src={search} alt='search'/>
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud} alt='img'/>
      </div>
      <div className="weather-temp">
      24°c
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="humidity">20 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
