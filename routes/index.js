const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

router.get('/vectors', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'vectors.html'));
})

module.exports = router;