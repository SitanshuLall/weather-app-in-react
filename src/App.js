import Card from "./components/Card";
import Search from "./components/Search";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import "./App.css";
import { useWeather } from "./context/Weather";

function App() {
  useEffect(() => {
    weather.fetchLocation();
  }, []);
  const weather = useWeather();
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search placeholder="Enter City Name" />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
