const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../server.js');

const db = require('../server/db/config');
const User = require('../server/db/controllers/user');


describe('', function() {

  beforeEach(done => {
    User.removeOne('fred', (err, user) => {
      if (err) {
        console.log(err);
      }
      done();
    });
  });

  describe('Routing: ', function() {

    const testUser = {
      username: 'fred',
      subscriptions: [496893300, 447667314, 1066446588]
      // ['javascript jabber', 'NodeUp', 'Javascript Air']
    };

    it('The Server Runs - responds to get requests on /', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('The Server responds only to proper routes - to all other requests with a 404', function(done) {
      request(app)
        .get('/foo')
        .expect(404)
        .end(done);
    });

    it('The server returns user subscriptions - at GET /user/:username/subscriptions', done => {
      User.addOne(testUser, (e) => {
        if (e) {
          return done(e);
        }
        request(app)
          .get(`/user/${testUser.username}/subscriptions`)
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.body).to.deep.equal(testUser.subscriptions);
            done();
          });
      });
    });

    it('The server allows users to add subscriptions - id POST /user/:username/subscriptions', done => {
      const channelId = 917918570; // Serial ---> http://itunes.apple.com/lookup?id=917918570

      User.addOne(testUser, (e) => {
        if (e) {
          return done(e);
        }
        request(app)
          .post(`/user/${testUser.username}/subscriptions`)
          .send({channel: channelId})
          .set('Accept', 'application/json')
          .expect(201)
          //we know that the db side works for adding subs!
          .end(done);
      });
    });

    it('The server returns podcast feeds - return a channels episodes at /channel/:channelId', done => {
      const channelId = 917918570; // Serial ---> http://itunes.apple.com/lookup?id=917918570
      request(app)
        .get(`/channel/${channelId}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.isObject);
          done();
        });
    });
  });
});