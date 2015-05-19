var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond hello jenkins CI!', function(done) {
    request(app).get('/').expect('hello jenkins CI!', done);
  });
});
