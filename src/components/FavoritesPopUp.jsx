import React from "react";

const FavoritesPopUp = ({ showSidePanel, favorites, handleCityClick, clearAllFavorites }) => {
    return(
        <>
            {showSidePanel && favorites.length > 0 && (
                <div className="fixed right-0 top-0 bg-white p-4 w-48 h-full shadow-lg flex items-center flex-col">
                    <h2 className="font-bold text-xl underline my-4">Favorite Cities</h2>
                    <ul>
                        {favorites.map((data, index) => (

                            <li
                                className="cursor-pointer text-blue-700 hover:text-blue-500 hover:underline"
                                onClick={() => handleCityClick(data.name)}
                                key={index}
                            >
                                {data.name}
                            </li>

                        ))}
                    </ul>
                    <button className='px-4 py-2 bg-red-500 text-white mt-4' onClick={clearAllFavorites}>Remove All</button>
                </div>
            )}
        </>

    )
}

export default FavoritesPopUp;