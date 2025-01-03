import React, { useState, useEffect } from 'react';
import './App.css';
import FavoritesList from './components/Favoritelist';
import { fetchApi } from './utils/api';
import Cookies from 'js-cookie';
import { getFavorites, removeFavorites, clearFavorites, addFavoriate } from './utils/storage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAndAdd from './components/SearchAndAdd';
import SideDash from './components/SideDash';

function App() {
  const [weatherData, setWeatherData] = useState(null); // weather data state
  const [tempUnit, setTempUnit] = useState("Celsius"); // temperature unit
  const [windUnit, setWindUnit] = useState("km/h"); // wind speed unit
  const [errors, setErrors] = useState(""); // errors
  const [favorites, setFavorites] = useState([]); // favorites array

  // setting the units of temp and wind speed in cookies
  useEffect(() => {
    const storedTempUnit = Cookies.get("tempUnit");
    const storedWindUnit = Cookies.get("windUnit");

    if (storedTempUnit) setTempUnit(storedTempUnit);
    if (storedWindUnit) setWindUnit(storedWindUnit);

    setFavorites(getFavorites());
  }, []);

  // handle search function
  const handleSearch = async (city) => {
    try {
      const data = await fetchApi(city, tempUnit === "Celsius" ? "metric" : "imperial");
      setWeatherData(data);
      setErrors("");
    } catch (error) {
      setWeatherData(null);
      setErrors(error.message);
    }
  };

  // toggle temperature unit function
  const toggleTempUnit = () => {
    const newTempUnit = tempUnit === "Celsius" ? "Fahrenheit" : "Celsius";
    setTempUnit(newTempUnit);
    Cookies.set("tempUnit", newTempUnit);
  };

  // toggle wind speed unit function
  const toggleWindUnit = () => {
    const newWindUnit = windUnit === "km/h" ? "m/ph" : "km/h";
    setWindUnit(newWindUnit);
    Cookies.set("windUnit", newWindUnit);
  };

  // add to favorite function which takes city name as argument
  const addFavorite = (cityData) => {
    addFavoriate(cityData);
    setFavorites(getFavorites());
  };

  // remove from favorites 
  const removeFavorite = (cityData) => {
    removeFavorites(cityData);
    setFavorites(getFavorites());
  };

  // removing all cities details from favorites
  const clearAllFavorites = () => {
    clearFavorites();
    setFavorites([]);
  };

  // used routing for 2 pages: favorite (main) page and search page, and passing some props to pages
  return (
    <BrowserRouter>
      <div className="flex w-full h-screen">
        <SideDash className="w-1/3 p-4" /> 

        <div className="p-4 flex flex-col items-center w-full"> 
          <h1 className="font-bold text-4xl underline mt-4">Weather App</h1>

          <Routes>
            <Route
              path="/favs"
              element={
                <FavoritesList
                  favorites={favorites}
                  removeFavorite={removeFavorite}
                  clearAllFavorites={clearAllFavorites}
                />
              }
            />
            <Route
              path="/"
              element={
                <SearchAndAdd
                  onSearch={handleSearch}
                  data={weatherData}
                  tempUnit={tempUnit}
                  windUnit={windUnit}
                  toggleTempUnit={toggleTempUnit}
                  toggleWindUnit={toggleWindUnit}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                  errors={errors}
                  favorites={favorites}
                  clearAllFavorites={clearAllFavorites}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
