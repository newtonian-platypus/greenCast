const User = require('./db/controllers/user.js');
const db = require('./db/config.js');
const Promise = require('bluebird');
const path = require('path');
const podcastData = require('./requestPodcastData.js');

const root = (req, res) => {
  const index = path.join(__dirname, '../public/index.pug');
  console.log(req.user, req.isAuthenticated());
  res.status(200).render(index, {username: req.user});
};

// routes for subscriptions
const getSubscriptions = (req, res) => {
  // returns a user's subscriptions
  var username = req.user.username;
  User.findOne(username, function(err, user) {
    if (err) {
      console.log('The find User error is: ', err);
    }
    res.json(user.subscriptions);
  });
};

const addSubscription = (req, res) => {
  // adds a channel to a user's subscriptions
  var username = req.user.username;
  var subscription = req.body.channel;
  User.addSubscription(username, subscription, function(err, user) {
    if (err) {
      console.log('The add Subscription error is: ', err);
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
  User.addOne(user, function(err, user) {
    if (err) {
      console.log('new user error is: ', err);
    }
    res.end();
  });
};


// routes for channel data
const getEpisodes = (req, res) => {
  // grabs rss data, scrapes it, and returns array of episodes
  const channel = req.params.channelId;
  const episodes = podcastData.feedGenerator(channel, function(err, result) {
    if (err) {
      res.sendStatus(400).end();
      console.log('nothing is being sent');
    }
    res.status(200).json(result);
  });
};

const login = (accessToken, refreshToken, profile, done) => {
  const username = profile.username;
  User.findOne(username, (err, user) => {
    if (err) {
      return done(err, null);
    }
    if (!user) {
      const userToSave = {
        username: username,
        subscriptions: []
      };

      User.addOne(userToSave, (err, user) => {
        if (err) {
          return done(err, null);
        }
        if (user) {
          console.log(username, 'saved');
        }
      });
    }
  });

  done(null, profile);
};

const logout = (req, res) => {
  req.session.passport = null;
  res.redirect('/');
};

module.exports = {
  root: root,
  addUser: addUser,
  getUser: getUser,
  getSubscriptions: getSubscriptions,
  addSubscription: addSubscription,
  getEpisodes: getEpisodes,
  login: login,
  logout: logout
};
