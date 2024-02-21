import React, { useState, useEffect } from "react";
import Image from "next/image";
import MapHeat from "../mapbox/map-heat";

import TemperMan from "../../assets/images/TemperMan.gif";

const Temperature = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [airPollution, setAirPollution] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER; // Replace with your OpenWeatherMap API key
  const cities = [
    { name: "Bangkok", lat: "13.7563", lon: "100.5018" },
    { name: "New York", lat: "40.7128", lon: "-74.0060" },
    { name: "Tokyo", lat: "35.6895", lon: "139.6917" },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherDataPromises = cities.map(({ name, lat, lon }) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`;
        return fetch(url).then((response) => response.json());
      });

      const airPollutionPromises = cities.map(({ lat, lon }) => {
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
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

      Promise.all(airPollutionPromises)
        .then((data) => {
          const pollutionData = data.map((item, index) => ({
            city: cities[index].name,
            aqi: item.list[0].main.aqi,
            aqiDescription: mapAqiToDescription(item.list[0].main.aqi),
            pm2_5: item.list[0].components.pm2_5,
            pm10: item.list[0].components.pm10,
            no2: item.list[0].components.no2,
            so2: item.list[0].components.so2,
            co: item.list[0].components.co,
            o3: item.list[0].components.o3,
          }));
          setAirPollution(pollutionData);
        })
        .catch((error) =>
          console.error("Failed to fetch air pollution data:", error)
        );
    };

    fetchWeatherData();
  }, []);

  const mapAqiToDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="py-10 space-y-10">
      {/* <div className="flex justify-center items-start gap-5 px-5">
        {citiesWeather.map(({ city, temperatureC, temperatureF }) => (
          <div
            key={city}
            className="w-5/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white"
          >
            <p className="text-xl text-gray-700 mb-2">{city}</p>
            <p className="text-lg text-gray-700 mb-2">{temperatureC} °C</p>
            <p className="text-lg text-gray-700">{temperatureF} °F</p>
          </div>
        ))} */}
        {/* <div className="w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white">
          <p className="text-xl text-gray-700 mb-2">
            วันนี้น้องปรอทขอแนะนำให้ใส่เสื้อผ้าสบาย ๆ
            และสวมใส่แมสก์เพื่อป้องกันฝุ่นนะครับ
          </p>
        </div> */}
      {/* </div> */}

      <div className="md:flex justify-center items-start gap-6 px-5 space-y-6 md:space-y-0">
        {airPollution.map(({ city, aqi, aqiDescription, pm2_5, pm10, no2, so2, co, o3 }) => (
          <div
            key={city}
            className="w-6/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white mx-auto"
          >
            <p className="text-xl text-gray-700 mb-2">
              Air Pollution in {city}
            </p>
            <p className="text-lg text-gray-700 mb-2">AQI: {aqi} - {aqiDescription}</p>
            <p className="text-xl text-gray-700 mb-2">PM₂.₅ : {pm2_5}5</p>
            <p className="text-xl text-gray-700 mb-2">PM₁₀ : {pm10}</p>
            <p className="text-xl text-gray-700 mb-2">NO₂ (Nitrogen dioxide) : {no2}</p>
            <p className="text-xl text-gray-700 mb-2">SO₂ (Sulphur dioxide) : {so2}</p>
            <p className="text-xl text-gray-700 mb-2">CO (Carbon monoxide) : {co}</p>
            <p className="text-xl text-gray-700">O₃ (Ozone) : {o3}</p>
          </div>
        ))}
        {/* <Image className="w-2/6 mr-6 md:w-64" alt="TemperMan" src={TemperMan} /> */}
      </div>
    </div>
  );
};

export default Temperature;
