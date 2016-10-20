var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../server.js');

describe('', function() {


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