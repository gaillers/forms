const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth');

// Register
router.post('/register', register)

// Login 
router.post('/login', login)

// Get Me
router.get('/me', getMe)

module.exports = router;
