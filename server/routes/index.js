const express = require('express');
const router = express.Router();

router.use('/', require('./account'));
router.use('/', require('./payment'));

module.exports = router;
