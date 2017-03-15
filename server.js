//should be abstracted into a server config file
require('dotenv').config({silent: true}); 

const path = require('path');
const express = require('express');
const pug = require('pug');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
// const betterErrors = require('better-express-errors');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const routes = require('./server/routes.js');
const app = express();

// passport.js sessions
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL:'https://obscure-forest-62580.herokuapp.com/'
  // callbackURL: 'http://localhost:3000/auth/github/callback'
}, routes.login));
passport.serializeUser((user, done) => done(null, user.username));
passport.deserializeUser((id, done) => done(null, id));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());

//basic router
app.get('/', routes.root);

app.param('username', function(req, res, next, username) {
  req.user = {username: username};
  next();
});

// returns a user's subscriptions
app.get('/user/:username/subscriptions', routes.getSubscriptions);

// adds a new channel to a user's subscriptions
app.post('/user/:username/subscriptions', routes.addSubscription);

// removes a new channel from a user's subscriptions
app.delete('/user/:username/subscriptions', routes.removeSubscription);

// returns an array of a channel's episodes
app.get('/channel/:channelId', routes.getEpisodes);

// returns the top 20 podcasts
app.get('/api/toppodcasts', routes.topPodcasts);

// sets the user's session to null redirects to /login
app.get('/logout', routes.logout);

// passport auth routes
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.

    console.log(req.isAuthenticated());
    res.redirect('/');
  });

app.listen($PORT || 3000, () => console.log('GreenCast listening'));

//run this after all routes and middleware
// app.use(betterErrors(app));

module.exports = app;


