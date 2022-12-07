const axios = require("axios");

const getWeatherData=async()=>{
    try {
      const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: 'Delhi'},
        headers: {
          'X-RapidAPI-Key': 'fa23850d47msh01990b77ad774eap1d06f3jsn8cafd96d6d00',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        //console.log(response.data); 
    
        temp = response.temp
        feels_like = response.feels_like
        humidity = response.humidity
        min_temp = response.min_temp
        max_temp = response.max_temp
        wind_speed = response.wind_speed
        wind_degrees = response.wind_degrees
        sunrise = response.sunrise
        sunset = response.sunset
        return response.data
      
      
      }).catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      throw error;
    }
  }

  module.exports={getWeatherData}