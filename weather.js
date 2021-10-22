const axios = require('axios');
require('dotenv').config();


async function getWeather(request, response) {
  let wURL = ` https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_KEY}&lat=${request.query.lat}&lon=${request.query.lon}&days=4`;

  try {
    let getForecast = await axios.get(wURL);
    response.status(200).send(getForecast.data.data);
    console.log(getForecast.data.data);
  }
  catch (error) {
    response.status(404).send('Woops!');
    console.log(error.message);
  }
}
module.exports = getWeather;
