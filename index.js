
const express = require('express');
const axios = require("axios");
const { getWeatherData } = require('./service/weather');
const app = express();
const port = 6500;
app.set('view engine','ejs')
app.engine('ejs', require('ejs').__express);
app.get('/', async(req, res) => {
    let {city}=req.query;
    city=city?city :"Delhi";
    let data=await getWeatherData(city);
    if(data){
        data=Object.assign(data,{city:city});
        console.log(data);
        res.render('index',{ejsData:data});
    }
    else res.render('index',{error:"No weather data found"});
    
});



//submit = SubmitEvent.apply(city.value)


app.listen(port, ()=>console.log(`App is listening at : http://localhost:${port} `))