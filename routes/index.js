const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

router.get('/vector', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'vector.html'));
})

router.get('/matrix', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'matrix.html'));
})

module.exports = router;