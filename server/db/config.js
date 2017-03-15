const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoURI = 'mongodb://localhost/greenCast';
// mongoURI = 'mongodb://<dbuser>:<dbpassword>@ds017736.mlab.com:17736/heroku_b2pmb0gd';
// mongoose.connect(mongoURI);
mongoose.connect(MONGOLAB_MAUVE_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db; 
