const express = require('express');
const router = express.Router();
const contoller = require('./contoller/index');

router.route('/').get(contoller.getSudo());


module.exports = router;