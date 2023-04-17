'use strict';

const api_key = "3a7e82fa6438566ca7de48a83af79489"

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=&{api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3a7e82fa6438566ca7de48a83af79489`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=3a7e82fa6438566ca7de48a83af79489`;
    },
    airPollution(lat, lon) {
      return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=3a7e82fa6438566ca7de48a83af79489`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=3a7e82fa6438566ca7de48a83af79489`;
    },
    geo(query) {
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=3a7e82fa6438566ca7de48a83af79489`;
    },
  };
  