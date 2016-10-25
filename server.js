  //should be abstracted into a server config file
const express = require('express');
const betterErrors = require('better-express-errors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const app = express();
const routes = require('./server/routes.js');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//basic router
app.get('/', routes.root);

// returns a user's subscriptions
app.get('/user/:username/subscriptions', routes.getSubscriptions);

// adds a new channel to a user's subscriptions
app.post('/user/:username/subscriptions', routes.addSubscription);

// get's a user's public information
app.get('/user/:username', routes.getUser);

// adds a new user
app.post('/user', routes.addUser);

// returns an array of a channel's episodes
app.get('/channel/:channelId', routes.getEpisodes);

app.listen(3000, () => console.log('GreenCast listening on port 3000'));

//run this after all routes and middlware
app.use(betterErrors(app));

module.exports = app;