const express = require('express');
const sequelize = require('sequelize');
const path = require('path');
const mysql = require('mysql');
const colors = require('colors');
const logger = require('morgan');

const app = express();
const routes = require('./routes/routes');
const routesApi = require('./routes/routes-api');
const connection = require('./lib/db-connection');
const temporizador = require('./scripts/generarToken');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());

// Server
//temporizador.conteoSegundos();
//console.log(temporizador.token);

// Routes
app.use(routes);
app.use(routesApi);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(app.get('port'), () => {
    console.log("\nServer on port ".yellow, app.get('port'));
});