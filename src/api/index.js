const baseURL = "https://api.weatherapi.com/v1/current.json?key=3e1e69c4cbc34de59db93254242703";

export const getWeatherByCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}`);
    const data = await response.json();
    return data;
}

export const getWeatherByLoc = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}`);
    const data = await response.json();
    return data;
}