/* eslint-disable no-console */
require('dotenv').config();

/* Build Up Requirements */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* APP INITIALIZATION */
const app = express();

/* DATABASE CONNECTION */
mongoose.connect('mongodb://localhost/secret-friends', { useNewUrlParser: true })
  .then((output) => {
    console.log(`Connected to Mongo: Database ${output.connections[0].name}`);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

/* APP SETUP */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* We must require CORS sometime along the development! */

/* APP ROUTES */
const secret = require('./routes/secret');

app.use('/', secret);

module.exports = app;
