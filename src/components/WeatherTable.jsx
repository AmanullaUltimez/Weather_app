import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesPopUp from './FavoritesPopUp';

const WeatherTable = ({ data, tempUnit, windUnit, toggleTempUnit, toggleWindUnit, addFavorite, removeFavorite, favorites, clearAllFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(false); // Favorite state
    const [showSidePanel, setShowSidePanel] = useState(false); // State for the side panel visibility
    const navigate = useNavigate();

    // Get temperature
    const getTemperature = (temp) => {
        return tempUnit === 'Fahrenheit'
            ? (temp * 9 / 5) + 32
            : temp;
    };

    // Get wind speed
    const getWindSpeed = (speed) => {
        return windUnit === 'm/ph'
            ? (speed * 0.621371).toFixed(1)
            : speed;
    };

    // Toggle favorite function
    const handleFavoriteChange = () => {
        if (isFavorite) {
            removeFavorite(data);
            setShowSidePanel(false)
        } else {
            addFavorite(data);
            setShowSidePanel(true)
        }
        setIsFavorite(!isFavorite);
    };

    const handleCityClick = () => {
        navigate(`/favs`); 
        setShowSidePanel(false); // Close the side panel
    };

    return (
        <div className="md:w-3/4 w-full bg-white md:p-4 p-2">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-500 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm md:text-base border border-gray-300">Description</th>
                        <th className="px-4 py-2 text-left text-sm md:text-base border border-gray-300">Details</th>
                    </tr>
                </thead>
                <tbody>
                   
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Location</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.name}</td>
                    </tr>

                    
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Temperature</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">
                            {getTemperature(data.main.temp)}°{tempUnit === 'Fahrenheit' ? 'F' : 'C'}
                            <button
                                onClick={toggleTempUnit}
                                className="bg-red-300 text-white rounded px-2"
                            >
                                To {tempUnit === "Celsius" ? "Fahrenheit" : "Celsius"}
                            </button>
                        </td>
                    </tr>

                   
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Weather</td>
                        <td className="px-4 py-2 text-sm md:text-base capitalize border border-gray-300">{data.weather[0].description}</td>
                    </tr>

                  
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Humidity</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.main.humidity}%</td>
                    </tr>

                    
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Wind Speed</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">
                            {getWindSpeed(data.wind.speed)} {windUnit === 'm/ph' ? 'm/ph' : 'km/h'}
                            <button
                                onClick={toggleWindUnit}
                                className="bg-blue-300 text-white rounded px-2"
                            >
                                To {windUnit === "km/h" ? "m/ph" : "km/h"}
                            </button>
                        </td>
                    </tr>

                   
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">Make Favorite</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">
                            <input
                                type="checkbox"
                                checked={isFavorite}
                                onChange={handleFavoriteChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Side panel for favorites */}
            <FavoritesPopUp showSidePanel={showSidePanel} favorites={favorites} handleCityClick={handleCityClick} clearAllFavorites={clearAllFavorites}/>
        </div>
    );
}

export default WeatherTable;
