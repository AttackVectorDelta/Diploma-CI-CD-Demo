const assert = require('chai').assert;
const Vector4f = require('../../js/Vector4f');

describe('Vector4f class tests', function() {
    //Constructor test

    it('Vector object creation test', function() {
        let vectorObj = new Vector4f(1,-2,3.14159,-4.213123423);

        assert.instanceOf(vectorObj, Vector4f);
        assert.equal(1, vectorObj.x);
        assert.equal(-2, vectorObj.y);
        assert.equal(3.14159, vectorObj.z);
        assert.equal(-4.213123423, vectorObj.h);
    });

     //Negate function tests

    it('Negate function test', function() {
        let vectorObj = new Vector4f(4.2312, -2.12312, 5.744612, -14.2456452);
        vectorObj = Vector4f.negate(vectorObj);

        assert.instanceOf(vectorObj, Vector4f);
        assert.equal(-4.2312, vectorObj.x);
        assert.equal(2.12312, vectorObj.y);
        assert.equal(-5.744612, vectorObj.z);
        assert.equal(-14.2456452, vectorObj.h);
    });

    it('Negate incorrect input test', function() {
        assert.throws(function() {Vector4f.negate()},"Parameter is not a vector!");
    });

    //Add function tests

    it('Add function test', function() {

        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);

        let vectorObj = Vector4f.add(vectorObj1, vectorObj2);

        assert.instanceOf(vectorObj, Vector4f);
        assert.equal(5.2, vectorObj.x);
        assert.equal(-4, vectorObj.y);
        assert.equal(8.8, vectorObj.z);
        assert.equal(-14.2, vectorObj.h);
    });

    it('Add incorrect input test', function() {

        let vectorObj = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() {Vector4f.add("This is a test", vectorObj)},"Parameters are not vectors!");
        assert.throws(function() {Vector4f.add(vectorObj, "If the function works")},"Parameters are not vectors!");
    });

    //ScalarProduct function tests

    it('ScalarProduct function test', function() {

        let vectorObj = new Vector4f(4.2, -2, 5.7, -14.2);
        vectorObj = Vector4f.scalarProduct(2,vectorObj);

        assert.instanceOf(vectorObj, Vector4f);
        assert.equal(8.4, vectorObj.x);
        assert.equal(-4, vectorObj.y);
        assert.equal(11.4, vectorObj.z);
        assert.equal(-14.2, vectorObj.h);

        vectorObj = new Vector4f(1, 2, 3, 4);
        vectorObj = Vector4f.scalarProduct(1.5,vectorObj);

        assert.instanceOf(vectorObj, Vector4f);
        assert.equal(1.5, vectorObj.x);
        assert.equal(3, vectorObj.y);
        assert.equal(4.5, vectorObj.z);
        assert.equal(4, vectorObj.h);
    });

    it('ScalarProduct incorrect input test', function() {

        let vectorObj = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() {Vector4f.scalarProduct("This is a test", vectorObj)},"Check parameter types!");
        assert.throws(function() {Vector4f.scalarProduct(vectorObj, "See if it fails")},"Check parameter types!");
    });

    //DotProduct function tests

    it('DotProduct function test', function() {

        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);
        let result = Vector4f.dotProduct(vectorObj1,vectorObj2);

        assert.equal(25.87, result);
    });    

    it('DotProduct incorrect input test', function() {

        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() {Vector4f.dotProduct("This is a test", vectorObj2)},"Parameters are not vectors!");
        assert.throws(function() {Vector4f.dotProduct(vectorObj1, undefined)},"Parameters are not vectors!");
    });
    
  
    //CrossProduct function tests

    it('CrossProduct function test', function() {

        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);
        let result = Vector4f.crossProduct(vectorObj1,vectorObj2);

        assert.instanceOf(result, Vector4f);
        assert.equal(5.2, result.x);
        assert.closeTo(-7.32, result.y, 0.0001);
        assert.equal(-6.4, result.z);
        assert.equal(-14.2, result.h);
    });
    
    it('CrossProduct incorrect input test', function() {
        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() {Vector4f.crossProduct("This is a test", vectorObj2)},"Parameters are not vectors!");
        assert.throws(function() {Vector4f.crossProduct(vectorObj1, undefined)},"Parameters are not vectors!");
    });

    //Length function tests

    it('Length function test', function() {

        let vectorObj = new Vector4f(6.4, -23.2, 6.1, -2);

        let result = Vector4f.length(vectorObj);
        
        assert.equal(Math.sqrt((Math.pow(6.4,2)+Math.pow(-23.2,2)+Math.pow(6.1,2))), result);
    });

    it('Length incorrect input test', function() {
        assert.throws(function() { Vector4f.length("This is a test") },"Parameters are not vectors!");
    });


    //Normalize function tests

    it('Normalize function test', function() {

        let vectorObj1 = new Vector4f(6.4, -23.2, 6.1, -2);

        let result = Vector4f.normalize(vectorObj1);

        let vectorLength = Math.sqrt((Math.pow(6.4,2)+Math.pow(-23.2,2)+Math.pow(6.1,2)));
        
        assert.instanceOf(result, Vector4f);
        assert.equal(6.4/vectorLength, result.x);
        assert.equal(-23.2/vectorLength, result.y);
        assert.equal(6.1/vectorLength, result.z);

        let vectorObj2 = new Vector4f(0,0,0,0);

        assert.throws(function() { Vector4f.normalize(vectorObj2) },"Vector length is equal to 0. Cannot divide!");

    });

    it('Normalize incorrect input test', function() {
        assert.throws(function() { Vector4f.normalize("This is a test") },"Parameters are not vectors!");
    });

    //Project function tests

    it('Project function test', function() {

        let vectorObj1 = new Vector4f(6, -23, 6, -2);
        let vectorObj2 = new Vector4f(1, 4, 5, 3);

        let vector1Length = Math.sqrt((Math.pow(6,2)+Math.pow(-23,2)+Math.pow(6,2)));
        let dotProd = (6*1)+(-23*4)+(6*5);
        let scalar = dotProd/(Math.pow(vector1Length,2));
        
        let result = Vector4f.project(vectorObj1, vectorObj2);

        assert.instanceOf(result, Vector4f);
        assert.equal(6*scalar, result.x);
        assert.equal(-23*scalar, result.y);
        assert.equal(6*scalar, result.z);
        assert.equal(-2, result.h);

        let vectorObj3 = new Vector4f(0,0,0,0);
        assert.throws(function() { Vector4f.project(vectorObj3, vectorObj2) },"Vector 1 is 0 units long. Cannot divide!");

    });

    it('Project incorrect input test', function() {
        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() {Vector4f.project("This is a test", vectorObj2)},"Parameters are not vectors!");
        assert.throws(function() {Vector4f.project(vectorObj1, undefined)},"Parameters are not vectors!");
    });

    //CosPhi function tests

    it('CosPhi function test', function() {

        let vectorObj1 = new Vector4f(6, -23, 6, -2);
        let vectorObj2 = new Vector4f(1, 4, 5, 3);

        let vector1Length = Math.sqrt((Math.pow(6,2)+Math.pow(-23,2)+Math.pow(6,2)));
        let vector2Length = Math.sqrt((Math.pow(1,2)+Math.pow(4,2)+Math.pow(5,2)));

        let dotProd = (6*1)+(-23*4)+(6*5);
        let finalRes = dotProd/(vector1Length*vector2Length);
        
        let result = Vector4f.cosPhi(vectorObj1, vectorObj2);

        assert.equal(finalRes, result);

        let vectorObj3 = new Vector4f(0,0,0,0);
        assert.throws(function() { Vector4f.cosPhi(vectorObj3, vectorObj2) },"Sum of vector lengths equals 0. Cannot divide!");

    });

    it('CosPhi incorrect input test', function() {
        let vectorObj1 = new Vector4f(4.2, -2, 5.7, -14.2);
        let vectorObj2 = new Vector4f(1,-2,3.1,-4.2);

        assert.throws(function() { Vector4f.cosPhi("This is a test", vectorObj2) },"Parameters are not vectors!");
        assert.throws(function() { Vector4f.cosPhi(vectorObj1, undefined) },"Parameters are not vectors!");
    });
})