import axios from "axios";

// base url
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// my api key
const API_KEY = "9eb0d1d35eea4cbbaa580eb6027b9dea"

//  function to fetch the weather data by city name and unit (metric)
export const fetchApi = async (city, unit = "metric") => {
   try {
    const response = await axios.get(`${BASE_URL}?q=${city}&units=${unit}&&appid=${API_KEY}`);
    return response.data;   
   } catch (err) {
    console.log(err)
    // throwing error
    throw new Error("Failed to fetch weather data. Please check the city name or your connection!!!");
   }
}
