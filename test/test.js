'use strict';

require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('Find data', function() {
  var server = 'localhost:3000';
  it('Should tell user where to find data', function(done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Check jsonData/storage.json');
        done();
      });
  });
});