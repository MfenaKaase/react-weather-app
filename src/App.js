import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import WeatherDetails from './components/WeatherDetails';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = 'c6ef0802b01c74cff6067a4cb0029c28';

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const weatherData = {
        city: data['name'],
        country: data['sys']['country'],
        temperature: Math.round(data['main']['temp']),
        description: 'Sunny',
        icon: '01d',
      };
      setWeatherDetails(weatherData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    console.log(data);
  };

  return (
    <div className="mx-auto p-4">
      <form
        className="d-flex"
        role="search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSubmit={handleSearch}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div>
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden m-4 d-flex justify-content-center">
              Loading...
            </span>
          </div>
        ) : (
          <WeatherDetails weatherData={weatherDetails} />
        )}
      </div>
    </div>
  );
}
