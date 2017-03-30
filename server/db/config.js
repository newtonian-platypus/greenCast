const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// forlocal dev
// mongoURI = 'mongodb://localhost/greenCast';
mongoURI = process.env.MONGOHEROKU;
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db; 