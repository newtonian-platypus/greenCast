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

    it('should add a user to the db', done => {
      const testUser = {
        username: 'fred',
        subscriptions: []
      }
      User.addOne(testUser, (err, user) => {
        expect(err).to.not.exist;
        expect(user).to.exist;
        done();
      });
    });

    it('should remove a user from the db', () => {

    });

    it('should add a subscription to a user document', () => {

    });

    it('should remove a subscription from a user document', () => {

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