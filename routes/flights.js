const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightController = require('../controllers/flights');
	
// GET /flights
router.get('/', flightController.index);
// GET /flights/new
router.get('/new', flightController.new);
// POST /flights
router.post('/', flightController.create);
	
module.exports = router;
