import React from "react";
import { useWeather } from "../context/Weather";

const Search = () => {
  const weather = useWeather();
  return (
    <div>        
      <input
        className="search" 
        placeholder="Enter City Name"
        value={weather.city}
        onChange={(e) => weather.setCity(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
