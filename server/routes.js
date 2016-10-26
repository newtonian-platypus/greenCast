const helpers = require('./db/controllers/user.js');
const db = require('./db/config.js');
const Promise = require('bluebird');

const root = (req, res) => {
  res.status(200);
  res.send('hello world');
};

// routes for subscriptions
const getSubscriptions = (req, res) => {
  // returns a user's subscriptions
  var username = req.user.username;
  helpers.findOne(username, function(err, user) {
    if (err) {
      console.log('The error is: ', err);
    }
    res.json(user.subscriptions); 
  });
};

const addSubscription = (req, res) => {
  // adds a channel to a user's subscriptions
  var username = req.user.username;
  var subscription = req.body.channel;
  helpers.addSubscription(username, subscription, function(err, user) {
    if (err) {
      console.log('The error is: ', err);
    }
    res.end();
  });
};


// routes for user data
const getUser = (req, res) => {
  // returns a user's data
  var username = req.user.username;
  //I'm not sure how we want this to be different from getSubscriptions
};

const addUser = (req, res) => {
  // creates a new user with username (do we want email address too?)
  var user = {username: req.body.username, subscriptions: []};
  helpers.addOne(user, function(err, user) {
    if (err) {
      console.log('error is: ', err)
    }
    res.end();
  });
};

// routes for channel data
const getEpisodes = (req, res) => {
  // grabs rss data, scrapes it, and returns array of episodes
  const channel = req.params.channelId;

  res.json({id: channel});
};

module.exports = {
  root: root, 
  addUser: addUser,
  getUser: getUser,
  getSubscriptions: getSubscriptions,
  addSubscription: addSubscription,
  getEpisodes: getEpisodes,
};
