import React, { useEffect, useState } from "react";
import "./Card.css";
import { fetchWeatherData, WeatherData } from "./WeatherApi";

interface CardProps {
  place: string;
}

const Card: React.FC<CardProps> = ({ place }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(place);
        setWeatherData(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, [place]);

  if (error) {
    return <div className="card error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="card">טוען...</div>;
  }

  const getImage = (temp: number) => {
    if (temp <= 20) return "/Thunder.svg";
    if (temp > 20 && temp < 30) return "/cloud.svg";
    return "/sun.svg";
  };

  const imgSrc = getImage(weatherData.temp);

  return (
    <div className="card">
      <div className="card-title">
        <div>
          <img src={imgSrc} alt={place} />
        </div>
        <div className="place-title">{place}</div>
      </div>
      <div className="short-info">{weatherData.description}</div>
      <div className="card-info">
        <span>טמפ' נמדדת</span>
        <span>טמפ' מורגשת</span>
        <span>לחות</span>
      </div>
      <div className="card-data">
        <span>{Math.floor(weatherData.temp)}°C</span>
        <span>{Math.floor(weatherData.feels_like)}°C</span>
        <span>{Math.floor(weatherData.humidity)}%</span>
      </div>
    </div>
  );
};

export default Card;
