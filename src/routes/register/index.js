const express = require('express');
const router = express.Router();

router.post('/', require('./register'));

module.exports = router;
