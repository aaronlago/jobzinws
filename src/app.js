'use strict';//força aplicar mais criterio

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb+srv://aarondb:1234567890@cluster0-hajvg.mongodb.net/test?retryWrites=true&w=majority');

// Carregar os Models
const Planet = require('./models/planets');

// Carregar as Rotas
const indexRoute = require('./routes/indexRoute');
const planetaRoute = require('./routes/planetaRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/planeta', planetaRoute);

module.exports = app;