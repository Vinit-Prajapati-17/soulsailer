import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react'
import './WeatherWidget.css'

const WeatherWidget = ({ city = 'Mumbai' }) => {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: 'Sunny',
    humidity: 65,
    wind: 12
  })

  // Simulated weather data - in production, connect to a weather API
  const weatherConditions = {
    'Sunny': <Sun />,
    'Cloudy': <Cloud />,
    'Rainy': <CloudRain />
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div className="weather-icon">
          {weatherConditions[weather.condition]}
        </div>
        <div className="weather-main">
          <span className="temp">{weather.temp}°C</span>
          <span className="condition">{weather.condition}</span>
        </div>
      </div>
      <div className="weather-city">{city}</div>
      <div className="weather-details">
        <div className="detail">
          <Droplets size={16} />
          <span>{weather.humidity}%</span>
        </div>
        <div className="detail">
          <Wind size={16} />
          <span>{weather.wind} km/h</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget
