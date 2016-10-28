const mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/greenCast';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db; 