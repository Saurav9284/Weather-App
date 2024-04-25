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
    </div>
  )
}

export default WeatherApp
