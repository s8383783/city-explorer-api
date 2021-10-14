'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const weather = require('./data/weather.json');
const { response, request } = require('express');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => response.status(200).send('This is the root.'));

app.get('/weather', (request, response) => {
  let { lat, lon, searchQuery } = request.query;
  console.log(lat, lon, searchQuery);
  try {
    let foundCity = weather.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());
    const weatherArray = foundCity.data.map(day => {
      return new Forecast(day);
    });
    response.status(200).send(weatherArray);
  }
  catch (error) {
    console.log('error');
    response.status(404).send('Unable to locate city');
  }
 

});


app.get('*', (request, response) => {
  response.status(404).send('Page not found.');
});

app.listen(PORT, () => console.log('Listening on Port', PORT));

class Forecast {
  constructor(day){
    this.date = day.valid_date;
    this.description = `Low of ${day.low_temp}, high of ${day.max_temp}  with ${day.weather.description}`;
  }
}
