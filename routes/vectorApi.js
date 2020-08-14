const path = require('path');
const express = require('express');
const Vector4f = require('../js/Vector4f');
const router = express.Router();

router.post('/negate', (req, res) => {
    if(!req.body.vector || req.body.vector.x == undefined || req.body.vector.y  == undefined || req.body.vector.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector = new Vector4f(req.body.vector.x, req.body.vector.y, req.body.vector.z, req.body.vector.h || 1);
    vector = Vector4f.negate(vector);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/add', (req, res) => {
    if(!req.body.vector1 || req.body.vector1.x == undefined || req.body.vector1.y  == undefined || req.body.vector1.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.vector2 || req.body.vector2.x == undefined || req.body.vector2.y  == undefined || req.body.vector2.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector1 = new Vector4f(req.body.vector1.x, req.body.vector1.y, req.body.vector1.z, req.body.vector1.h || 1);
    let vector2= new Vector4f(req.body.vector2.x, req.body.vector2.y, req.body.vector2.z, req.body.vector2.h || 1);
    
    let vector = Vector4f.add(vector1, vector2);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/scalar', (req, res) => {
    if(!req.body.vector || req.body.vector.x == undefined || req.body.vector.y  == undefined || req.body.vector.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(req.body.scalar == undefined || typeof req.body.scalar != "number"){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector = new Vector4f(req.body.vector.x, req.body.vector.y, req.body.vector.z, req.body.vector.h || 1);
    vector = Vector4f.scalarProduct(req.body.scalar, vector);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/dot', (req, res) => {
    if(!req.body.vector1 || req.body.vector1.x == undefined || req.body.vector1.y  == undefined || req.body.vector1.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.vector2 || req.body.vector2.x == undefined || req.body.vector2.y  == undefined || req.body.vector2.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector1 = new Vector4f(req.body.vector1.x, req.body.vector1.y, req.body.vector1.z, req.body.vector1.h || 1);
    let vector2= new Vector4f(req.body.vector2.x, req.body.vector2.y, req.body.vector2.z, req.body.vector2.h || 1);
    
    result = Vector4f.dotProduct(vector1, vector2);

    res.status(200).json({
        result: result
    });
});

router.post('/cross', (req, res) => {
    if(!req.body.vector1 || req.body.vector1.x == undefined || req.body.vector1.y  == undefined || req.body.vector1.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.vector2 || req.body.vector2.x == undefined || req.body.vector2.y  == undefined || req.body.vector2.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector1 = new Vector4f(req.body.vector1.x, req.body.vector1.y, req.body.vector1.z, req.body.vector1.h || 1);
    let vector2= new Vector4f(req.body.vector2.x, req.body.vector2.y, req.body.vector2.z, req.body.vector2.h || 1);
    
    vector = Vector4f.crossProduct(vector1, vector2);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/length', (req, res) => {
    if(!req.body.vector || req.body.vector.x == undefined || req.body.vector.y  == undefined || req.body.vector.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    let vector = new Vector4f(req.body.vector.x, req.body.vector.y, req.body.vector.z, req.body.vector.h || 1);    
    let length = Vector4f.length(vector);

    res.status(200).json({
        length: length
    });
});

router.post('/normalize', (req, res) => {
    if(!req.body.vector || req.body.vector.x == undefined || req.body.vector.y  == undefined || req.body.vector.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    let vector = new Vector4f(req.body.vector.x, req.body.vector.y, req.body.vector.z, req.body.vector.h || 1);    
    vector = Vector4f.normalize(vector);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/project', (req, res) => {
    if(!req.body.vector1 || req.body.vector1.x == undefined || req.body.vector1.y  == undefined || req.body.vector1.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.vector2 || req.body.vector2.x == undefined || req.body.vector2.y  == undefined || req.body.vector2.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector1 = new Vector4f(req.body.vector1.x, req.body.vector1.y, req.body.vector1.z, req.body.vector1.h || 1);
    let vector2= new Vector4f(req.body.vector2.x, req.body.vector2.y, req.body.vector2.z, req.body.vector2.h || 1);
    
    vector = Vector4f.project(vector1, vector2);

    res.status(200).json({
        vector: {
            x: vector.x,
            y: vector.y,
            z: vector.z,
            h: vector.h
        }
    });
});

router.post('/cosphi', (req, res) => {
    if(!req.body.vector1 || req.body.vector1.x == undefined || req.body.vector1.y  == undefined || req.body.vector1.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.vector2 || req.body.vector2.x == undefined || req.body.vector2.y  == undefined || req.body.vector2.z  == undefined){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let vector1 = new Vector4f(req.body.vector1.x, req.body.vector1.y, req.body.vector1.z, req.body.vector1.h || 1);
    let vector2= new Vector4f(req.body.vector2.x, req.body.vector2.y, req.body.vector2.z, req.body.vector2.h || 1);
    
    result = Vector4f.cosPhi(vector1, vector2);

    res.status(200).json({
        result: result
    });
});

module.exports = router;