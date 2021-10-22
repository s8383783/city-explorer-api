'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');




const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

let getMovies = require('./modules/movies');
let getWeather = require('./modules/weather');

app.get('/', (request, response) => response.status(200).send('This is the root.'));

app.get('/weather', getWeather);
app.get('/movie', getMovies);



app.get('*', (request, response) => {
  response.status(404).send('Page not found.');
});

// async function getWeather(request, response) {
//   let wURL = ` https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_KEY}&lat=${request.query.lat}&lon=${request.query.lon}&days=4`;

//   try {
//     let getForecast = await axios.get(wURL);
//     response.status(200).send(getForecast.data.data);
//     console.log(getForecast.data.data);
//   }
//   catch (error) {
//     response.status(404).send('Woops!');
//     console.log(error.message);
//   }
// }
// async function getMovies(request, response) {
//   const city = request.query.query;
//   let mURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${city}`;
//   console.log(mURL);
//   try {
//     let getMovieList = await axios.get(mURL);
//     response.status(200).send(getMovieList.data);
//   }
//   catch (error) {
//     response.status(404).send('Woops!');
//     console.log(error.message);
//   }
// }
// class Forecast {
//   constructor(day) {
//     this.date = day.valid_date;
//     this.description = `Low of ${day.low_temp}, high of ${day.max_temp}  with ${day.weather.description}`;
//   }
// }

app.listen(PORT, () => console.log('Listening on Port', PORT));
