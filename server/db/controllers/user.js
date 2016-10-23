const UserModel = require('../models/user.js');

function findOne(username, cb) {
  UserModel.findOne({username: username}, cb);
}

function addOne(user, cb) {
  UserModel.create(user, cb);
}

function removeOne(username, cb) {
  UserModel.findOneAndRemove({username: username}, cb);
}

function addSubscription(username, subscription, cb) {
  UserModel.findOne({username: username}, (err, user) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (!user) {
      cb(new Error(`username ${username} not found`), null);
      return;
    }
    user.subscriptions.push(subscription);
    user.markModified('subscriptions');
    user.save((err) => cb(err, user));
  });
}

function removeSubscription(username, subscription, cb) {
  UserModel.findOne({username: username}, (err, user) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (!user) {
      cb(new Error(`username ${username} not found`), null);
      return;
    }

    const subscriptions = user.subscriptions;
    const index = subscriptions.indexOf(subscription);
    if (index < 0) {
      cb(new Error(`subscription ${subscription} not found in ${username}'s subscriptions'`), null);
      return;
    }
    subscriptions.splice(index, 1);
    user.markModified('subscriptions');
    user.save((err) => cb(err, user));
  });
}

module.exports = {
  findOne: findOne,
  addOne: addOne,
  removeOne: removeOne,
  addSubscription: addSubscription,
  removeSubscription: removeSubscription
};