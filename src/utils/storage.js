// get fav function
export const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]");

// add fav function
export const addFavoriate = (city) => {
    const favorites = getFavorites();  
    if (!favorites.some(fav => fav.name === city.name)) {
        favorites.push(city);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

// remove fav function
export const removeFavorites = (city) => {
    const favorites = getFavorites().filter((fav) => fav.name !== city.name); 
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// clear all fav function
export const clearFavorites = () => localStorage.removeItem("favorites");