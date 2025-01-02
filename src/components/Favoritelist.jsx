import React from 'react';
import { useNavigate } from 'react-router-dom';

const FavoritesList = ({ favorites, removeFavorite, clearAllFavorites }) => {
    const navigate = useNavigate(); // for navigation

    // conditionally rendering the favorites data
    return (
        <div className="md:w-3/4 w-full bg-white md:p-4 p-2">
            {favorites.length > 0 ? (
                <>
                    <h2 className="font-bold text-3xl text-center underline mb-4 text-gray-700">My Favorites Cities</h2>
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="bg-gray-500 text-white">
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Location</th>
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Temperature</th>
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Weather</th>
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Humidity</th>
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300">Wind Speed</th>
                                <th className="px-4 py-2 text-left underline text-sm md:text-base border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {favorites.map((data, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.name}</td>
                                    <td className="px-4 py-2 text-sm md:text-base border border-gray-300">
                                        {data.main.temp}°C
                                    </td>
                                    <td className="px-4 py-2 text-sm md:text-base capitalize border border-gray-300">{data.weather[0].description}</td>
                                    <td className="px-4 py-2 text-sm md:text-base border border-gray-300">{data.main.humidity}%</td>
                                    <td className="px-4 py-2 text-sm md:text-base border border-gray-300">
                                        {data.wind.speed}km/h
                                    </td>
                                    <td className="px-4 py-2 text-sm md:text-base border text-red-500 border-gray-300 cursor-pointer" onClick={() => removeFavorite(data)}>Remove</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='px-4 py-2 bg-red-500 text-white mt-4' onClick={clearAllFavorites}>Clear All</button>
                </>
            ) : (
                <p>No favorites available. Add some favorites cities! :)</p>
            )}

            {/* search navigation button */}
            <div className="mt-4 flex items-center justify-center">
                <button
                    onClick={() => navigate('/search')}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 ml-4"
                >
                    Back to Search
                </button>
            </div>
        </div>
    );
};

export default FavoritesList;
