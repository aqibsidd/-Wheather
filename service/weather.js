const axios = require("axios");

const getWeatherData=async(city="Delhi")=>{
    try {
      const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: city},
        headers: {
          'X-RapidAPI-Key': 'fa23850d47msh01990b77ad774eap1d06f3jsn8cafd96d6d00',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      let weatherData=await axios(options);
      if(weatherData) return weatherData.data;
      else return "no-data";
    } catch (error) {
      throw error;
    }
  }

  module.exports={getWeatherData}