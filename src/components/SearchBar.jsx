import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState(""); // city state

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city);
        }
    }

    // input and button for search
    return (
        <div className='flex gap-4 p-4 bg-white rounded-lg'>
            <input placeholder='Search by city' input="text" value={city} onChange={(e) => setCity(e.target.value)}  className='md:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;
