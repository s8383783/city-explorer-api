const axios = require('axios');
require('dotenv').config();

async function getMovies(request, response) {
  const city = request.query.query;
  let mURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${city}`;
  console.log(mURL);
  try {
    let getMovieList = await axios.get(mURL);
    response.status(200).send(getMovieList.data);
  }
  catch (error) {
    response.status(404).send('Woops!');
    console.log(error.message);
  }
}
module.exports = getMovies;
