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

    it('should return a users subscriptions at GET /user/:username/subscriptions', done => {
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
            // expect(res.username).to.equal(testUser.username);
            // Taking the above line out.. not sure if we want to return the username with this endpoint?
            expect(res.body).to.deep.equal(testUser.subscriptions);
            done();
          });
      });
    });

    it('should add a channel id POST /user/:username/subscriptions and return the updated user', done => {
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
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            // expect(res.username).to.be(testUser.username);
            // Taking the above line out.. not sure if we want to return the username with this endpoint?

            const recentSubsription = res.subscriptions[res.subscriptions.length - 1];
            expect(recentSubsription).to.equal(channelId);
            done();
          });
      });
    });

    it('should return a users public information at GET /user/:username', done => {
      User.addOne(testUser, (e) => {
        if (e) {
          return done(e);
        }
        request(app)
          .get(`/user/${testUser.username}`)
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.username).to.equal(testUser.username);
            expect(res.subscriptions).to.equal(testUser.subscriptions);
            done();
          });
      });
    });

    it('should create a new user at POST /user', done => {
      request(app)
        .get('/user')
        .send(testUser)
        .set('Accept', 'application/json')
        .expect(201)
        .end((err, res) => {
          if (err) { 
            return done(err);
          }
          User.findOne({username: testUser.username}, (error, user) => {
            expect(user.username).to.equal(testUser.username);
            expect(user.subscriptions).to.equal(testUser.subscriptions);
            done();
          });
        });
    });

    it('should return a channels episodes at /channel/:channelId', done => {
      const channelId = 917918570; // Serial ---> http://itunes.apple.com/lookup?id=917918570

      request(app)
        .get(`/channel/${channelId}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.title).to.equal('Serial');
          expect(res.link).to.equal('https://serialpodcast.org');
          expect(res.description.short).to.equal('A podcast from the creators of This American Life');
          done();
        });
    });
  });
});