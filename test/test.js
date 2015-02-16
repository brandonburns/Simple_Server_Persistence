'use strict';

require('../lib/post');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('Successful add', function() {
  var server = 'localhost:3000';
  it('Show that the file was added', function(done) {
    chai.request(server)
      .post('/testing')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('added it');
        done();
      });
  });
});
