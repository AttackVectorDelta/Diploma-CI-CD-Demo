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

    it('Serving vector docs page', function(done){
        request(app)
         .get('/vector')
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.text).to.include("On this page you can see examples of all the API calls for the Vector class!");
            done();
        })
    });

    it('Serving matrix docs page', function(done){
        request(app)
         .get('/matrix')
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.text).to.include("On this page you can see examples of all the API calls for the Matrix class!");
            done();
        })
    });

});