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
const lat = request.query.lat;
const lon = request.query.lon;
const searchQuery = request.query.searchQuery;
});


app.get('*', (request, response) => {
  response.status(404).send('Page not found.');
});

app.listen(PORT, () => console.log('Listening on Port', PORT));
