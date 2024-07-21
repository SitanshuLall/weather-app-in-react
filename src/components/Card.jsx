import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} alt="WeatherImage" />
      <h2>{weather.data?.current?.temp_c}{`\u00B0`}C</h2>
      <p>{weather.data?.current?.condition?.text}</p>
      <h5>{weather.data?.location?.name}</h5>
      <h6>{weather.data?.location?.region}, {weather.data?.location?.country}</h6>
    </div>
  );
};

export default Card;
