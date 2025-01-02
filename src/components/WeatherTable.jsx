import React, { useState } from 'react';

const WeatherTable = ({ data, tempUnit, windUnit, toggleTempUnit, toggleWindUnit,  addFavorite, removeFavorites  }) => {
    const [isFavorite, setIsFavorite] = useState(false); // is fav state

    // get temp function
    const getTemperature = (temp) => {
        return tempUnit === 'Fahrenheit'
            ? (temp * 9 / 5) + 32
            : temp;
    };

    // get wind speed function
    const getWindSpeed = (speed) => {
        return windUnit === 'm/ph'
            ? (speed * 0.621371).toFixed(1)
            : speed;
    };

    // toggle fav function
    const handleFavoriteChange = () => {
        if (isFavorite) {
            removeFavorites(data);
        } else {
            addFavorite(data);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="md:w-3/4 w-full bg-white md:p-4 p-2">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-500 text-white">
                    <tr className="border-b">
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Location</th>
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Temperature</th>
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Weather</th>
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Humidity</th>
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Wind Speed</th>
                        <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Make Fav</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.name}</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300 flex gap-4">
                            {getTemperature(data.main.temp)}°{tempUnit === 'Fahrenheit' ? 'F' : 'C'}
                            <button
                                onClick={toggleTempUnit}
                                className="bg-red-300 text-white rounded px-2"
                            >
                                To {tempUnit === "Celsius" ? "Fahrenheit" : "Celsius"}
                            </button>
                        </td>
                        <td className="px-4 py-2 text-sm md:text-base capitalize border border-gray-300">{data.weather[0].description}</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.main.humidity}%</td>
                        <td className="px-4 py-2 text-sm md:text-base border border-gray-300 flex gap-4">
                            {getWindSpeed(data.wind.speed)} {windUnit === 'm/ph' ? 'm/ph' : 'km/h'}
                            <button
                                onClick={toggleWindUnit}
                                className="bg-blue-300 text-white rounded px-2"
                            >
                                To {windUnit === "km/h" ? "m/ph" : "km/h"}
                            </button>
                        </td>
                        {/* toggle to fav and remove from fav */}
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
        </div>
    );
}

export default WeatherTable;
