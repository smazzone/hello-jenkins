var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond hello jenkins!', function(done) {
    request(app).get('/').expect('hello jenkinsi!', done);
  });
});
