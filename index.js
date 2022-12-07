
const express = require('express');
const axios = require("axios");
const { getWeatherData } = require('./service/weather');
const app = express();
const port = 6500;
app.set('view engine','ejs')
app.engine('ejs', require('ejs').__express);
app.get('/', async(req, res) => {
    let data=await getWeatherData();
    console.log(data)
    res.render('index',{weatherData:data});
});



//submit = SubmitEvent.apply(city.value)


app.listen(port, ()=>console.log(`App is listening at : http://localhost:${port} `))