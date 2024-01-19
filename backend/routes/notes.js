const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const obj = {  // Declare the obj variable here
        a: 'this',
        number: 34
    };
    res.json(obj); // Sending the JSON response
});

module.exports = router;
