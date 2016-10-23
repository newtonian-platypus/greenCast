const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  subscriptions: Array
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;