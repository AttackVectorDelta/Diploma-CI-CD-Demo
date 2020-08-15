const assert = require('chai').assert;
const Matrix4f = require('../../js/Matrix4f');

describe('Matrix class tests', function() {

    it('Matrix object creation test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        assert.instanceOf(matrixObj, Matrix4f);
        assert.equal(1, matrixObj.x1);
        assert.equal(2.5, matrixObj.x2);
        assert.equal(-3, matrixObj.x3);
        assert.equal(-4.25, matrixObj.x4);

        assert.equal(-5, matrixObj.y1);
        assert.equal(-6.5, matrixObj.y2);
        assert.equal(7, matrixObj.y3);
        assert.equal(8, matrixObj.y4);

        assert.equal(9, matrixObj.z1);
        assert.equal(-10, matrixObj.z2);
        assert.equal(11, matrixObj.z3);
        assert.equal(12.25, matrixObj.z4);

        assert.equal(13.125, matrixObj.h1);
        assert.equal(14, matrixObj.h2);
        assert.equal(-15.5, matrixObj.h3);
        assert.equal(16, matrixObj.h4);
    });

    //Stringify function test

    it('Matrix stringification test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let result = matrixObj.stringify();

        let correctString = 
        [1,2.5,-3,-4.25].join(" ")+"\n"+
        [-5,-6.5,7,8].join(" ")+"\n"+
        [9,-10,11,12.25].join(" ")+"\n"+
        [13.125,14,-15.5,16].join(" ");

        assert.equal(correctString, result);
    });

    //Negate function test

    it('Negate function test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let result = Matrix4f.negate(matrixObj);

        assert.instanceOf(result, Matrix4f);
        assert.equal(-1, result.x1);
        assert.equal(-2.5, result.x2);
        assert.equal(3, result.x3);
        assert.equal(4.25, result.x4);

        assert.equal(5, result.y1);
        assert.equal(6.5, result.y2);
        assert.equal(-7, result.y3);
        assert.equal(-8, result.y4);

        assert.equal(-9, result.z1);
        assert.equal(10, result.z2);
        assert.equal(-11, result.z3);
        assert.equal(-12.25, result.z4);

        assert.equal(-13.125, result.h1);
        assert.equal(-14, result.h2);
        assert.equal(15.5, result.h3);
        assert.equal(-16, result.h4);
    });

    //Add function tests

    it('Add function test', function() {
        let matrixObj1 = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let matrixObj2 = new Matrix4f(
            1, 2, -3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        );

        let result = Matrix4f.add(matrixObj1,matrixObj2);

        assert.instanceOf(result, Matrix4f);
        assert.equal(1+1, result.x1);
        assert.equal(2.5+2, result.x2);
        assert.equal(-3+-3, result.x3);
        assert.equal(-4.25+4, result.x4);

        assert.equal(-5+5, result.y1);
        assert.equal(-6.5+6, result.y2);
        assert.equal(7+7, result.y3);
        assert.equal(8+8, result.y4);

        assert.equal(9+9, result.z1);
        assert.equal(-10+10, result.z2);
        assert.equal(11+11, result.z3);
        assert.equal(12.25+12, result.z4);

        assert.equal(13.125+13, result.h1);
        assert.equal(14+14, result.h2);
        assert.equal(-15.5+15, result.h3);
        assert.equal(16+16, result.h4);
    });

    it('Add incorrect input test', function() {
        let matrixObj1 = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let matrixObj2 = new Matrix4f(
            1, 2, -3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        );
        
        assert.throws(function() {Matrix4f.add("This is a test", matrixObj1)},"Input parameters are not matrices!");
        assert.throws(function() {Matrix4f.add(matrixObj2, "If the function works")},"Input parameters are not matrices!");
    });

    //Transpose function tests

    it('Transpose function test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let result = Matrix4f.transpose(matrixObj);

        assert.instanceOf(result, Matrix4f);
        assert.equal(1, result.x1);
        assert.equal(-5, result.x2);
        assert.equal(9, result.x3);
        assert.equal(13.125, result.x4);

        assert.equal(2.5, result.y1);
        assert.equal(-6.5, result.y2);
        assert.equal(-10, result.y3);
        assert.equal(14, result.y4);

        assert.equal(-3, result.z1);
        assert.equal(7, result.z2);
        assert.equal(11, result.z3);
        assert.equal(-15.5, result.z4);

        assert.equal(-4.25, result.h1);
        assert.equal(8, result.h2);
        assert.equal(12.25, result.h3);
        assert.equal(16, result.h4);
    });

    it('Transpose incorrect input test', function() {
        assert.throws(function() {Matrix4f.transpose("This is a test")},"Input is not a matrix!");
    });

    //MultiplyScalar function tests

    it('MultiplyScalar function test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        let result = Matrix4f.multiplyScalar(2, matrixObj);

        assert.instanceOf(result, Matrix4f);
        assert.equal(1*2, result.x1);
        assert.equal(2.5*2, result.x2);
        assert.equal(-3*2, result.x3);
        assert.equal(-4.25*2, result.x4);

        assert.equal(-5*2, result.y1);
        assert.equal(-6.5*2, result.y2);
        assert.equal(7*2, result.y3);
        assert.equal(8*2, result.y4);

        assert.equal(9*2, result.z1);
        assert.equal(-10*2, result.z2);
        assert.equal(11*2, result.z3);
        assert.equal(12.25*2, result.z4);

        assert.equal(13.125*2, result.h1);
        assert.equal(14*2, result.h2);
        assert.equal(-15.5*2, result.h3);
        assert.equal(16*2, result.h4);
    });

    it('MultiplyScalar incorrect input test', function() {
        let matrixObj = new Matrix4f(
            1, 2.5, -3, -4.25,
            -5, -6.5, 7, 8,
            9, -10, 11, 12.25,
            13.125, 14, -15.5, 16
        );

        assert.throws(function() {Matrix4f.multiplyScalar("This is a test", matrixObj)},"Check input parameter types!");
        assert.throws(function() {Matrix4f.multiplyScalar(2, undefined)},"Check input parameter types!");
    });

    //Multiplyfunction tests

    it('Multiply function test', function() {
        let matrixObj1 = new Matrix4f(
            4, 6, 3, 4,
            5, 12, -7, 8,
            9, -15, 13, 1,
            16, 11, 5, 7
        );

        let matrixObj2 = new Matrix4f(
            1, 2, -3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        );

        let result = Matrix4f.multiply(matrixObj1, matrixObj2);

        assert.instanceOf(result, Matrix4f);
        assert.equal(4*1+6*5+3*9+4*13, result.x1);
        assert.equal(4*2+6*6+3*10+4*14, result.x2);
        assert.equal((4*-3)+6*7+3*11+4*15, result.x3);
        assert.equal(4*4+6*8+3*12+4*16, result.x4);

        assert.equal(5*1+12*5+(-7*9)+8*13, result.y1);
        assert.equal(5*2+12*6+(-7*10)+8*14, result.y2);
        assert.equal((5*-3)+12*7+(-7*11)+8*15, result.y3);
        assert.equal(5*4+12*8+(-7*12)+8*16, result.y4);

        assert.equal(9*1+(-15*5)+13*9+1*13, result.z1);
        assert.equal(9*2+(-15*6)+13*10+1*14, result.z2);
        assert.equal((9*-3)+(-15*7)+13*11+1*15, result.z3);
        assert.equal(9*4+(-15*8)+13*12+1*16, result.z4);

        assert.equal(16*1+11*5+5*9+7*13, result.h1);
        assert.equal(16*2+11*6+5*10+7*14, result.h2);
        assert.equal((16*-3)+11*7+5*11+7*15, result.h3);
        assert.equal(16*4+11*8+5*12+7*16, result.h4);
    });

    it('Multiply incorrect input test', function() {
        let matrixObj1 = new Matrix4f(
            4, 6, 3, 4,
            5, 12, -7, 8,
            9, -15, 13, 1,
            16, 11, 5, 7
        );

        let matrixObj2 = new Matrix4f(
            1, 2, -3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        );

        assert.throws(function() {Matrix4f.multiply("This is a test", matrixObj1)},"Input parameters are not matrices!");
        assert.throws(function() {Matrix4f.multiply(matrixObj2, undefined)},"Input parameters are not matrices!");
    });

});