import React from 'react';
import WeatherTable from './WeatherTable';
import SearchBar from './SearchBar';

const SearchAndAdd = ({
  onSearch,
  data,
  tempUnit,
  windUnit,
  toggleTempUnit,
  toggleWindUnit,
  addFavorite,
  removeFavorite,
  errors,
  favorites,
  clearAllFavorites
}) => {

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
          favorites={favorites}
          clearAllFavorites={clearAllFavorites}
        />
      )}
    </>
  );
};

export default SearchAndAdd;
