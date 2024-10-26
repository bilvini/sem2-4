const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createEvent);
router.get('/', getEvents);

module.exports = router;
