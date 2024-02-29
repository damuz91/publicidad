const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

// Define your routes
router.post('/crear_legal', homeController.create_legal);
// Add more routes as needed

module.exports = router;