const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../server.js');

const db = require('../server/db/config');
const User = require('../server/db/controllers/user');


describe('', function() {

  beforeEach(done => {
    User.removeOne('fred', (err, user) => {
      if (err) console.log(err);
      done();
    });
  });

  describe('database user methods', () => {
    const testUser = {
      username: 'fred',
      subscriptions: [496893300, 447667314, 1066446588]
      // ['javascript jabber', 'NodeUp', 'Javascript Air']
    };

    it('should add a user to the db', done => {
      User.addOne(testUser, (e, u) => {
        expect(e).to.not.exist;
        expect(u).to.exist;

        User.findOne('fred', (err, user) => {
          expect(err).to.not.exist;
          expect(user.username).to.equal(testUser.username);
          done();
        });
      });
    });

    it('should remove a user from the db', done => {
      User.addOne(testUser, (e) => {
        if (e) console.log(e);

        User.removeOne('fred', (err, user) => {
          expect(err).to.not.exist;
          expect(user).to.exist;

          User.findOne('fred', (error, response) => {
            expect(error).to.not.exist;
            expect(response).to.not.exist;
            done();
          });
        });
      });
    });

    it('should add a subscription to a user document', done => {
      const channelId = 917918570; // Serial ---> http://itunes.apple.com/lookup?id=917918570
      User.addOne(testUser, (e) => {
        if (e) console.log(e);

        User.addSubscription('fred', channelId, (err) => {
          if (err) console.log(err);

          User.findOne('fred', (error, user) => {
            const lastAdded = user.subscriptions[user.subscriptions.length -1];
            expect(lastAdded).to.equal(channelId);
            done();
          });
        });
      });
    });

    it('should remove a subscription from a user document', done => {
      const channelId = 917918570; // Serial ---> http://itunes.apple.com/lookup?id=917918570
      User.addOne(testUser, (e) => {
        if (e) console.log(e);

        User.addSubscription('fred', channelId, (err) => {
          if (err) console.log(err);

          User.removeSubscription('fred', channelId, (err) => {
            User.findOne('fred', (error, user) => {
              expect(user.subscriptions.length).to.equal(3);
              done();
            });
          });
        });
      });
    });
  });
});