import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(false);

  const apiKey = "c6ef0802b01c74cff6067a4cb0029c28";

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    console.log(data)
  };

  return (
    <div className="mx-auto p-4">
      <form className="d-flex" role="search" value={city}
onChange={(e) => setCity(e.target.value)} onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  )

}
