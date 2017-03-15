const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoURI = 'mongodb://localhost/greenCast';
mongoURI = 'mongodb://heroku_lfc1j23q:6bsqbirvce25gtufr4tj1sicsi@ds155737.mlab.com:55737/heroku_lfc1j23q';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db; 

//mongolab
//mongodb://<dbuser>:<dbpassword>@ds155737.mlab.com:55737/heroku_lfc1j23q
//
//heroku
//mongodb://heroku_lfc1j23q:6bsqbirvce25gtufr4tj1sicsi@ds155737.mlab.com:55737/heroku_lfc1j23q