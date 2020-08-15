const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app');

describe('Matrix API function tests', function() {
    it('Negate API call', function(done) {
        request(app)
         .post('/api/matrix/negate')
         .send({
            matrix: {
                x1: 1,
                x2: 2.5,
                x3: -3,
                x4: -4.25,
                y1: -5,
                y2: -6.5,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: -10,
                z3: 11,
                z4: 12.25,
                h1: 13.125,
                h2: 14,
                h3: -15.5,
                h4: 16
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                matrix: {
                    x1: -1,
                    x2: -2.5,
                    x3: 3,
                    x4: 4.25,
                    y1: 5,
                    y2: 6.5,
                    y3: -7,
                    y4: -8,
                    z1: -9,
                    z2: 10,
                    z3: -11,
                    z4: -12.25,
                    h1: -13.125,
                    h2: -14,
                    h3: 15.5,
                    h4: -16
                }
            });

            done();
        })
    });

    it('Add API call', function(done) {
        request(app)
         .post('/api/matrix/add')
         .send({
            matrix1: {
                x1: 1,
                x2: 2.5,
                x3: -3,
                x4: -4.25,
                y1: -5,
                y2: -6.5,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: -10,
                z3: 11,
                z4: 12.25,
                h1: 13.125,
                h2: 14,
                h3: -15.5,
                h4: 16
            },
            matrix2: {
                x1: 1,
                x2: 2,
                x3: -3,
                x4: 4,
                y1: 5,
                y2: 6,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: 10,
                z3: 11,
                z4: 12,
                h1: 13,
                h2: 14,
                h3: 15,
                h4: 16
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                matrix: {
                    x1: 1+1,
                    x2: 2.5+2,
                    x3: -3+-3,
                    x4: -4.25+4,
                    y1: -5+5,
                    y2: -6.5+6,
                    y3: 7+7,
                    y4: 8+8,
                    z1: 9+9,
                    z2: -10+10,
                    z3: 11+11,
                    z4: 12.25+12,
                    h1: 13.125+13,
                    h2: 14+14,
                    h3: -15.5+15,
                    h4: 16+16
                }
            });

            done();
        })
    });

    it('Transpose API call', function(done) {
        request(app)
         .post('/api/matrix/transpose')
         .send({
             matrix: {
                x1: 1,
                x2: 2.5,
                x3: -3,
                x4: -4.25,
                y1: -5,
                y2: -6.5,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: -10,
                z3: 11,
                z4: 12.25,
                h1: 13.125,
                h2: 14,
                h3: -15.5,
                h4: 16
            },
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                matrix: {
                    x1: 1,
                    x2: -5,
                    x3: 9,
                    x4: 13.125,
                    y1: 2.5,
                    y2: -6.5,
                    y3: -10,
                    y4: 14,
                    z1: -3,
                    z2: 7,
                    z3: 11,
                    z4: -15.5,
                    h1: -4.25,
                    h2: 8,
                    h3: 12.25,
                    h4: 16
                },
            });

            done();
        })
    });

    it('Scalar API call', function(done) {
        request(app)
         .post('/api/matrix/scalar')
         .send({
             matrix: {
                x1: 1,
                x2: 2.5,
                x3: -3,
                x4: -4.25,
                y1: -5,
                y2: -6.5,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: -10,
                z3: 11,
                z4: 12.25,
                h1: 13.125,
                h2: 14,
                h3: -15.5,
                h4: 16
            },
            scalar: 2
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                matrix: {
                    x1: 1*2,
                    x2: 2.5*2,
                    x3: -3*2,
                    x4: -4.25*2,
                    y1: -5*2,
                    y2: -6.5*2,
                    y3: 7*2,
                    y4: 8*2,
                    z1: 9*2,
                    z2: -10*2,
                    z3: 11*2,
                    z4: 12.25*2,
                    h1: 13.125*2,
                    h2: 14*2,
                    h3: -15.5*2,
                    h4: 16*2
                },
            });

            done();
        })
    });

    it('Multiply API call', function(done) {
        request(app)
         .post('/api/matrix/multiply')
         .send({
            matrix1: {
                x1: 4,
                x2: 6,
                x3: 3,
                x4: 4,
                y1: 5,
                y2: 12,
                y3: -7,
                y4: 8,
                z1: 9,
                z2: -15,
                z3: 13,
                z4: 1,
                h1: 16,
                h2: 11,
                h3: 5,
                h4: 7
            },
            matrix2: {
                x1: 1,
                x2: 2,
                x3: -3,
                x4: 4,
                y1: 5,
                y2: 6,
                y3: 7,
                y4: 8,
                z1: 9,
                z2: 10,
                z3: 11,
                z4: 12,
                h1: 13,
                h2: 14,
                h3: 15,
                h4: 16
            }
         })
         .expect('Content-Type', /json/)
         .expect(200)
         .end(function(err, res) {
            if(err){
                return done(err);
            }
            expect(res.body).to.deep.equal({
                matrix: {
                    x1: 4*1+6*5+3*9+4*13,
                    x2: 4*2+6*6+3*10+4*14,
                    x3: (4*-3)+6*7+3*11+4*15,
                    x4: 4*4+6*8+3*12+4*16,
                    y1: 5*1+12*5+(-7*9)+8*13,
                    y2: 5*2+12*6+(-7*10)+8*14,
                    y3: (5*-3)+12*7+(-7*11)+8*15,
                    y4: 5*4+12*8+(-7*12)+8*16,
                    z1: 9*1+(-15*5)+13*9+1*13,
                    z2: 9*2+(-15*6)+13*10+1*14,
                    z3: (9*-3)+(-15*7)+13*11+1*15,
                    z4: 9*4+(-15*8)+13*12+1*16,
                    h1: 16*1+11*5+5*9+7*13,
                    h2: 16*2+11*6+5*10+7*14,
                    h3: (16*-3)+11*7+5*11+7*15,
                    h4: 16*4+11*8+5*12+7*16
                }
            });

            done();
        })
    });
});