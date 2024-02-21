import React, { useState, useEffect } from "react";
import Image from "next/image";
import MapHeat from "../mapbox/map-heat";

import TemperMan from "../../assets/images/TemperMan.gif";

const Temperature = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER; // Replace with your OpenWeatherMap API key
  const cities = ["Bangkok", "New York", "Tokyo"]; // Example cities, add more as needed

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherDataPromises = cities.map((city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        return fetch(url).then((response) => response.json());
      });

      Promise.all(weatherDataPromises)
        .then((data) => {
          const weatherData = data.map((item) => ({
            city: item.name,
            temperatureC: item.main.temp.toFixed(0),
            temperatureF: ((item.main.temp * 9) / 5 + 32).toFixed(0),
          }));
          setCitiesWeather(weatherData);
        })
        .catch((error) =>
          console.error("Failed to fetch weather data:", error)
        );
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="py-10 space-y-10">
      <div className="flex justify-center items-start gap-5 px-5">
        {citiesWeather.map(({ city, temperatureC, temperatureF }) => (
          <div
            key={city}
            className="w-5/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white"
          >
            <p className="text-xl text-gray-700 mb-2">{city}</p>
            <p className="text-lg text-gray-700 mb-2">{temperatureC} °C</p>
            <p className="text-lg text-gray-700">{temperatureF} °F</p>
          </div>
        ))}
        {/* <div className="w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white">
          <p className="text-xl text-gray-700 mb-2">
            วันนี้น้องปรอทขอแนะนำให้ใส่เสื้อผ้าสบาย ๆ
            และสวมใส่แมสก์เพื่อป้องกันฝุ่นนะครับ
          </p>
        </div> */}
      </div>

      <div className="flex justify-center items-start gap-16 px-5">
        <div className="w-5/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white">
          <p className="text-xl text-gray-700 mb-2">Current Air Pollution</p>
          <div className="flex items-start gap-4">
            <p className="text-xl text-gray-700 mb-2">AQI</p>
            <p className="text-xl text-gray-700 mb-2">999</p>
          </div>
          <div className="flex items-start gap-4">
            <p className="text-xl text-gray-700">PM 2.5</p>
            <p className="text-xl text-gray-700">999</p>
          </div>
        </div>
        {/* <Image className="w-2/6 mr-6 md:w-64" alt="TemperMan" src={TemperMan} /> */}
      </div>
    </div>
  );
};

export default Temperature;
