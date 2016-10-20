//should be abstracted into a server config file
const express = require('express');
const betterErrors = require('better-express-errors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const app = express();
const routes = require('./server/routes.js');

//basic router - could be refactored into a 
app.get('/', (req, res) => routes.root(req, res));

app.listen(3000, () => console.log('GreenCast listening on port 3000'));

//run this after all routes and middlware
app.use(betterErrors(app));

module.exports = app;