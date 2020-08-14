const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app');

describe('Server function tests', function() {
    it('Serving index page', function(done) {
        request(app)
         .get('/')
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.text).to.include("<h1>Welcome to the demo page!<\/h1>");
            done();
        })
    });

    it('Serving vectors page', function(done){
        request(app)
         .get('/vectors')
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.text).to.include("On this page you can see examples of all the API functions of the vector class!");
            done();
        })
    });

});