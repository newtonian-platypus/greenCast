const express = require('express');
const expect = require('chai').expect;
const app = require('../config.js');

describe('The Server runs', () => {

  it('replys when get is sent to root route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });

});