/**
 * API definition
 */
const express = require('express');
const morgan = require('morgan');
const oapi = require('./oapi-impl');
const router = require('./routes/routes');

var api = express();


api.use(oapi);
api.use(express.json());
api.use(morgan('dev'));

// Routes
api.use(router);
api.use('/redoc', oapi.redoc);
api.use('/swagger', oapi.swaggerui);

// variable definition
api.set('port', 8080);

module.exports = api;