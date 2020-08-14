const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app');

describe('Vector API function tests', function() {
    it('Negate API call', function(done) {
        request(app)
         .post('/api/vector/negate')
         .send({
             vector: {
                x: 1,
                y: 2.25,
                z: -3.125,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                vector: {
                    x: -1,
                    y: -2.25,
                    z: 3.125,
                    h: 2
                }
            });

            done();
        })
    });

    it('Add API call', function(done) {
        request(app)
         .post('/api/vector/add')
         .send({
             vector1: {
                x: 1,
                y: 2.25,
                z: -3.125,
                h: 2
             },
             vector2: {
                x: 2,
                y: 3.25,
                z: -5.125,
                h: 5
             },
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                vector: {
                    x: 3,
                    y: 5.5,
                    z: -8.25,
                    h: 2
                }
            });

            done();
        })
    });

    it('Scalar API call', function(done) {
        request(app)
         .post('/api/vector/scalar')
         .send({
             scalar: 1.5,
             vector: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                vector: {
                    x: 3,
                    y: 4.875,
                    z: -7.875,
                    h: 2
                }
            });

            done();
        })
    });

    it('Dot API call', function(done) {
        request(app)
         .post('/api/vector/dot')
         .send({
             vector1: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 5
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                result: 63.1875
            });

            done();
        })
    });

    it('Cross API call', function(done) {
        request(app)
         .post('/api/vector/cross')
         .send({
             vector1: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                vector: {
                    x: 0,
                    y: 0,
                    z: 0,
                    h: 2
                }
            });

            done();
        })
    });

    it('Length API call', function(done) {
        request(app)
         .post('/api/vector/length')
         .send({
             vector: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            let expected = Math.sqrt(Math.pow(2,2)+Math.pow(3.25,2)+Math.pow(-5.25,2));

            expect(res.body).to.deep.equal({
                length: expected
            });

            done();
        })
    });

    it('Normalize API call', function(done) {
        request(app)
         .post('/api/vector/normalize')
         .send({
             vector: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            let length = Math.sqrt(Math.pow(2,2)+Math.pow(3.25,2)+Math.pow(-5.25,2));

            expect(res.body).to.deep.equal({
                vector: {
                    x: 2/length,
                    y: 3.25/length,
                    z: -5.25/length,
                    h: 2,
                 }
            });

            done();
        })
    });

    it("Normalize fail test", function(done) {
        request(app)
         .post('/api/vector/normalize')
         .send({
             vector: {
                x: 0,
                y: 0,
                z: 0,
                h: 2
             },
         })
         .expect('Content-Type', /json/)
         .expect(500)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.body.message).to.equal("Vector length is equal to 0. Cannot divide!");

            done();
        })
    });

    it('Project API call', function(done) {
        request(app)
         .post('/api/vector/project')
         .send({
             vector1: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            let length = Math.sqrt(Math.pow(2,2)+Math.pow(3.25,2)+Math.pow(-5.25,2));            
            let dot = 2*3+3.25*4.875+(-5.25*-7.875);
            let scalar = dot/Math.pow(length,2);

            expect(res.body).to.deep.equal({
                vector: {
                    x: 2*scalar,
                    y: 3.25*scalar,
                    z: -5.25*scalar,
                    h: 2,
                 }
            });

            done();
        })
    });

    it("Project fail test", function(done) {
        request(app)
         .post('/api/vector/project')
         .send({
             vector1: {
                x: 0,
                y: 0,
                z: 0,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(500)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.body.message).to.equal("Vector 1 is 0 units long. Cannot divide!");

            done();
        })
    });

    it('Cosphi API call', function(done) {
        request(app)
         .post('/api/vector/cosphi')
         .send({
             vector1: {
                x: 2,
                y: 3.25,
                z: -5.25,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            let length1 = Math.sqrt(Math.pow(2,2)+Math.pow(3.25,2)+Math.pow(-5.25,2));
            let length2 = Math.sqrt(Math.pow(3,2)+Math.pow(4.875,2)+Math.pow(-7.875,2));            
            let dot = 2*3+3.25*4.875+(-5.25*-7.875);

            expect(res.body).to.deep.equal({
                result: dot/(length1*length2)
            });

            done();
        })
    });

    it("Cosphi fail test", function(done) {
        request(app)
         .post('/api/vector/cosphi')
         .send({
             vector1: {
                x: 0,
                y: 0,
                z: 0,
                h: 2
             },
             vector2: {
                x: 3,
                y: 4.875,
                z: -7.875,
                h: 2
            }
         })
         .expect('Content-Type', /json/)
         .expect(500)
         .end(function(err, res) {
            if(err){
                return done(err);
            }

            expect(res.body.message).to.equal("Sum of vector lengths equals 0. Cannot divide!");

            done();
        })
    });
});