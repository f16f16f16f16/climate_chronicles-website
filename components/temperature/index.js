import React, { useState, useEffect } from "react";

const Temperature = () => {
  const [selectedCity, setSelectedCity] = useState("Bangkok");
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [airPollution, setAirPollution] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER;
  const cities = [
    { name: "Bangkok", lat: "13.7563", lon: "100.5018" },
    { name: "London", lat: "51.5073510", lon: "-0.127758" },
    { name: "Tokyo", lat: "35.6895", lon: "139.6917" },
    { name: "Delhi", lat: "28.6517178", lon: "77.2219388" },
    { name: "Shanghai", lat: "31.2322758", lon: "121.4692071" },
    { name: "São Paulo", lat: "-23.5506507", lon: "-46.6333824" },
    { name: "Mexico City", lat: "19.4326296", lon: "-99.1331785" },
    { name: "Cairo", lat: "30.0443879", lon: "31.2357257" },
    { name: "New York", lat: "40.7127281", lon: "-74.0060152" },
    { name: "Buenos Aires", lat: "-34.6075682", lon: "-58.4370894" },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherDataPromises = cities.map(({ name }) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`;
        return fetch(url).then((response) => response.json());
      });

      const airPollutionPromises = cities.map(({ lat, lon }) => {
        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        return fetch(url).then((response) => response.json());
      });

      Promise.all(weatherDataPromises)
        .then((data) => {
          setCitiesWeather(
            data.map((item, index) => ({
              ...item,
              city: cities[index].name,
            }))
          );
        })
        .catch((error) =>
          console.error("Failed to fetch weather data:", error)
        );

      Promise.all(airPollutionPromises)
        .then((data) => {
          setAirPollution(
            data.map((item, index) => ({
              ...item.list[0],
              city: cities[index].name,
            }))
          );
        })
        .catch((error) =>
          console.error("Failed to fetch air pollution data:", error)
        );
    };

    fetchWeatherData();
  }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const selectedWeather = citiesWeather.find(
    (city) => city.city === selectedCity
  );
  const selectedPollution = airPollution.find(
    (city) => city.city === selectedCity
  );

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
      <div className="flex justify-center">
        <div className="mb-4 w-full max-w-xs">
          <select
            onChange={handleCityChange}
            value={selectedCity}
            className="block w-full px-4 py-2 text-base border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedWeather && (
        <div className="flex justify-center items-start gap-5 px-5">
          <div className="w-5/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white">
            <p className="text-xl text-gray-700 mb-2">{selectedWeather.city}</p>
            <p className="text-lg text-gray-700 mb-2">
              {selectedWeather.main.temp.toFixed(0)} °C
            </p>
            <p className="text-lg text-gray-700">
              {((selectedWeather.main.temp * 9) / 5 + 32).toFixed(0)} °F
            </p>
          </div>
        </div>
      )}

      {selectedPollution && (
        <div className="md:flex justify-center items-start gap-6 px-5 space-y-6 md:space-y-0">
          <div className="w-6/6 md:w-3/6 p-5 border border-gray-200 shadow-lg rounded-md bg-white mx-auto">
            <p className="text-xl text-gray-700 mb-2">
              Air Pollution in {selectedPollution.city}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              AQI: {selectedPollution.main.aqi} -{" "}
              {mapAqiToDescription(selectedPollution.main.aqi)}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              PM₂.₅ : {selectedPollution.components.pm2_5}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              PM₁₀ : {selectedPollution.components.pm10}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              NO₂ (Nitrogen dioxide) : {selectedPollution.components.no2}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              SO₂ (Sulphur dioxide) : {selectedPollution.components.so2}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              CO (Carbon monoxide) : {selectedPollution.components.co}
            </p>
            <p className="text-xl text-gray-700">
              O₃ (Ozone) : {selectedPollution.components.o3}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Temperature;
