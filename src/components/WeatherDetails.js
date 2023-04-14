import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const WeatherDetails = ({ weatherData }) => {
  const { city, country, temperature, description, icon } = weatherData;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{city}, {country}</h5>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
        <p className="card-text">Temperature: {temperature}&#176;C</p>
        <p className="card-text">Weather: {description}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;