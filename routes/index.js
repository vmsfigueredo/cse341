const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    const name = 'Vitor Figueredo';
    res.send(`Hello, ${name}!`);
});

module.exports = router;
