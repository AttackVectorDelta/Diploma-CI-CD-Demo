const express = require('express');
const Matrix4f = require('../js/Matrix4f');
const router = express.Router();

router.post('/negate', (req, res) => {
    if(!req.body.matrix || 
        req.body.matrix.x1 == undefined || req.body.matrix.x2 == undefined || req.body.matrix.x3 == undefined || req.body.matrix.x4 == undefined ||
        req.body.matrix.y1 == undefined || req.body.matrix.y2 == undefined || req.body.matrix.y3 == undefined || req.body.matrix.y4 == undefined ||
        req.body.matrix.z1 == undefined || req.body.matrix.z2 == undefined || req.body.matrix.z3 == undefined || req.body.matrix.z4 == undefined ||
        req.body.matrix.h1 == undefined || req.body.matrix.h2 == undefined || req.body.matrix.h3 == undefined || req.body.matrix.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let matrix = new Matrix4f(
        req.body.matrix.x1, req.body.matrix.x2, req.body.matrix.x3, req.body.matrix.x4,
        req.body.matrix.y1, req.body.matrix.y2, req.body.matrix.y3, req.body.matrix.y4,
        req.body.matrix.z1, req.body.matrix.z2, req.body.matrix.z3, req.body.matrix.z4,
        req.body.matrix.h1, req.body.matrix.h2, req.body.matrix.h3, req.body.matrix.h4
        );

    matrix = Matrix4f.negate(matrix);

    res.status(200).json({
        matrix
    });
});

router.post('/add', (req, res) => {
    if(!req.body.matrix1 || 
        req.body.matrix1.x1 == undefined || req.body.matrix1.x2 == undefined || req.body.matrix1.x3 == undefined || req.body.matrix1.x4 == undefined ||
        req.body.matrix1.y1 == undefined || req.body.matrix1.y2 == undefined || req.body.matrix1.y3 == undefined || req.body.matrix1.y4 == undefined ||
        req.body.matrix1.z1 == undefined || req.body.matrix1.z2 == undefined || req.body.matrix1.z3 == undefined || req.body.matrix1.z4 == undefined ||
        req.body.matrix1.h1 == undefined || req.body.matrix1.h2 == undefined || req.body.matrix1.h3 == undefined || req.body.matrix1.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.matrix2 || 
        req.body.matrix2.x1 == undefined || req.body.matrix2.x2 == undefined || req.body.matrix2.x3 == undefined || req.body.matrix2.x4 == undefined ||
        req.body.matrix2.y1 == undefined || req.body.matrix2.y2 == undefined || req.body.matrix2.y3 == undefined || req.body.matrix2.y4 == undefined ||
        req.body.matrix2.z1 == undefined || req.body.matrix2.z2 == undefined || req.body.matrix2.z3 == undefined || req.body.matrix2.z4 == undefined ||
        req.body.matrix2.h1 == undefined || req.body.matrix2.h2 == undefined || req.body.matrix2.h3 == undefined || req.body.matrix2.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let matrix1 = new Matrix4f(
        req.body.matrix1.x1, req.body.matrix1.x2, req.body.matrix1.x3, req.body.matrix1.x4,
        req.body.matrix1.y1, req.body.matrix1.y2, req.body.matrix1.y3, req.body.matrix1.y4,
        req.body.matrix1.z1, req.body.matrix1.z2, req.body.matrix1.z3, req.body.matrix1.z4,
        req.body.matrix1.h1, req.body.matrix1.h2, req.body.matrix1.h3, req.body.matrix1.h4
        );

    let matrix2 = new Matrix4f(
            req.body.matrix2.x1, req.body.matrix2.x2, req.body.matrix2.x3, req.body.matrix2.x4,
            req.body.matrix2.y1, req.body.matrix2.y2, req.body.matrix2.y3, req.body.matrix2.y4,
            req.body.matrix2.z1, req.body.matrix2.z2, req.body.matrix2.z3, req.body.matrix2.z4,
            req.body.matrix2.h1, req.body.matrix2.h2, req.body.matrix2.h3, req.body.matrix2.h4
        );

    let matrix = Matrix4f.add(matrix1, matrix2);

    res.status(200).json({
        matrix
    });
});

router.post('/transpose', (req, res) => {
    if(!req.body.matrix || 
        req.body.matrix.x1 == undefined || req.body.matrix.x2 == undefined || req.body.matrix.x3 == undefined || req.body.matrix.x4 == undefined ||
        req.body.matrix.y1 == undefined || req.body.matrix.y2 == undefined || req.body.matrix.y3 == undefined || req.body.matrix.y4 == undefined ||
        req.body.matrix.z1 == undefined || req.body.matrix.z2 == undefined || req.body.matrix.z3 == undefined || req.body.matrix.z4 == undefined ||
        req.body.matrix.h1 == undefined || req.body.matrix.h2 == undefined || req.body.matrix.h3 == undefined || req.body.matrix.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let matrix = new Matrix4f(
        req.body.matrix.x1, req.body.matrix.x2, req.body.matrix.x3, req.body.matrix.x4,
        req.body.matrix.y1, req.body.matrix.y2, req.body.matrix.y3, req.body.matrix.y4,
        req.body.matrix.z1, req.body.matrix.z2, req.body.matrix.z3, req.body.matrix.z4,
        req.body.matrix.h1, req.body.matrix.h2, req.body.matrix.h3, req.body.matrix.h4
        );

    matrix = Matrix4f.transpose(matrix);

    res.status(200).json({
        matrix
    });
});

router.post('/scalar', (req, res) => {
    if(!req.body.matrix || 
        req.body.matrix.x1 == undefined || req.body.matrix.x2 == undefined || req.body.matrix.x3 == undefined || req.body.matrix.x4 == undefined ||
        req.body.matrix.y1 == undefined || req.body.matrix.y2 == undefined || req.body.matrix.y3 == undefined || req.body.matrix.y4 == undefined ||
        req.body.matrix.z1 == undefined || req.body.matrix.z2 == undefined || req.body.matrix.z3 == undefined || req.body.matrix.z4 == undefined ||
        req.body.matrix.h1 == undefined || req.body.matrix.h2 == undefined || req.body.matrix.h3 == undefined || req.body.matrix.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(req.body.scalar == undefined || typeof req.body.scalar != "number"){
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    let scalar = req.body.scalar;
    
    let matrix = new Matrix4f(
        req.body.matrix.x1, req.body.matrix.x2, req.body.matrix.x3, req.body.matrix.x4,
        req.body.matrix.y1, req.body.matrix.y2, req.body.matrix.y3, req.body.matrix.y4,
        req.body.matrix.z1, req.body.matrix.z2, req.body.matrix.z3, req.body.matrix.z4,
        req.body.matrix.h1, req.body.matrix.h2, req.body.matrix.h3, req.body.matrix.h4
        );

    matrix = Matrix4f.multiplyScalar(scalar, matrix);

    res.status(200).json({
        matrix
    });
});

router.post('/multiply', (req, res) => {
    if(!req.body.matrix1 || 
        req.body.matrix1.x1 == undefined || req.body.matrix1.x2 == undefined || req.body.matrix1.x3 == undefined || req.body.matrix1.x4 == undefined ||
        req.body.matrix1.y1 == undefined || req.body.matrix1.y2 == undefined || req.body.matrix1.y3 == undefined || req.body.matrix1.y4 == undefined ||
        req.body.matrix1.z1 == undefined || req.body.matrix1.z2 == undefined || req.body.matrix1.z3 == undefined || req.body.matrix1.z4 == undefined ||
        req.body.matrix1.h1 == undefined || req.body.matrix1.h2 == undefined || req.body.matrix1.h3 == undefined || req.body.matrix1.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }

    if(!req.body.matrix2 || 
        req.body.matrix2.x1 == undefined || req.body.matrix2.x2 == undefined || req.body.matrix2.x3 == undefined || req.body.matrix2.x4 == undefined ||
        req.body.matrix2.y1 == undefined || req.body.matrix2.y2 == undefined || req.body.matrix2.y3 == undefined || req.body.matrix2.y4 == undefined ||
        req.body.matrix2.z1 == undefined || req.body.matrix2.z2 == undefined || req.body.matrix2.z3 == undefined || req.body.matrix2.z4 == undefined ||
        req.body.matrix2.h1 == undefined || req.body.matrix2.h2 == undefined || req.body.matrix2.h3 == undefined || req.body.matrix2.h4 == undefined)
    {
        res.status(400).json({message: "Invalid input params!"});
        return;
    }
    
    let matrix1 = new Matrix4f(
        req.body.matrix1.x1, req.body.matrix1.x2, req.body.matrix1.x3, req.body.matrix1.x4,
        req.body.matrix1.y1, req.body.matrix1.y2, req.body.matrix1.y3, req.body.matrix1.y4,
        req.body.matrix1.z1, req.body.matrix1.z2, req.body.matrix1.z3, req.body.matrix1.z4,
        req.body.matrix1.h1, req.body.matrix1.h2, req.body.matrix1.h3, req.body.matrix1.h4
        );

    let matrix2 = new Matrix4f(
            req.body.matrix2.x1, req.body.matrix2.x2, req.body.matrix2.x3, req.body.matrix2.x4,
            req.body.matrix2.y1, req.body.matrix2.y2, req.body.matrix2.y3, req.body.matrix2.y4,
            req.body.matrix2.z1, req.body.matrix2.z2, req.body.matrix2.z3, req.body.matrix2.z4,
            req.body.matrix2.h1, req.body.matrix2.h2, req.body.matrix2.h3, req.body.matrix2.h4
        );

    let matrix = Matrix4f.multiply(matrix1, matrix2);

    res.status(200).json({
        matrix
    });
});

module.exports = router;