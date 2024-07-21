import React, { createContext, useContext, useState } from "react";
import { getWeatherByCity, getWeatherByLoc } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherByCity(city);
    setData(response);
  };
  
  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByLoc(position.coords.latitude, position.coords.longitude).then(data => setData(data))
    })
  }

  return (
    <WeatherContext.Provider value={{ data, city, setCity, fetchData, fetchLocation}}>
      {props.children}
    </WeatherContext.Provider>
  );
};
