const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  subscriptions: Array
}); 

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel; 