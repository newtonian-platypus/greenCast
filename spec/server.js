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
      subscriptions: []
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
      User.addOne(testUser, (e, u) => {
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
      done();
    });

    it('should remove a subscription from a user document', done => {
      done();
    });
  });

  describe('Routing: ', function() {
    it('responds to get requests on /', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('responds to all other requests with a 404', function(done) {
      request(app)
        .get('/foo')
        .expect(404)
        .end(done);
    });
  });
});