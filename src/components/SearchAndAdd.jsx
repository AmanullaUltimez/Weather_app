import React from 'react';
import WeatherTable from './WeatherTable';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom'; 

const SearchAndAdd = ({
  onSearch,
  data,
  tempUnit,
  windUnit,
  toggleTempUnit,
  toggleWindUnit,
  addFavorite,
  removeFavorite,
  errors
}) => {
  const navigate = useNavigate(); // for navigation

  return (
    <>
      <SearchBar onSearch={onSearch} /> 
      {errors && <div className="text-red-500 text-lg">{errors}</div>}
      {data && (
        <WeatherTable
          data={data}
          tempUnit={tempUnit}
          windUnit={windUnit}
          toggleTempUnit={toggleTempUnit}
          toggleWindUnit={toggleWindUnit}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
      
      {/* favorites navigation button */}
      <div className="mt-4">
        <button 
          onClick={() => navigate('/')} 
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Back to Favorites
        </button>
       
      </div>
    </>
  );
};

export default SearchAndAdd;
