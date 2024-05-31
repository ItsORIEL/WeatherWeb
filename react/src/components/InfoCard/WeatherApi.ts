import axios from 'axios';

export interface WeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
}

export async function fetchWeatherData(place: string): Promise<WeatherData> {
  const apiKey = '8ee633956bad6ae1965b557a94ecfcba';
  const encodedPlace = encodeURIComponent(place);

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedPlace}&appid=${apiKey}&units=metric&lang=he`);
    const data = response.data;
    return {
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data. Please check the city name or try again later.');
  }
}
