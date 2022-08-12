var express = require('express');
var router = express.Router();
const seedController = require('../controllers/seedController');

router.post('/seedDB', seedController.seedDB);

module.exports = router;