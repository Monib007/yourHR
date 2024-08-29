
const express = require('express')
const { registerUser, upload } = require('../controllers/userController');

const router = express.Router();

// route for user sign up
router.post('/signup', upload.single('resume'), registerUser);

module.exports = router;
