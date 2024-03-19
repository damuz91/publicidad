const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
// Agrega el middleware para validar la autenticación
const basicAuth = require('express-basic-auth');

const auth = basicAuth({
  users: { 'username': 'password' }, // Aquí puedes cambiar username y password por las credenciales que desees
  unauthorizedResponse: 'Unauthorized',
  challenge: true
});

// Define your routes
router.post('/crear_legal', homeController.create_legal);
router.get('/admin_legal', auth, homeController.admin_legal); // Agrega el middleware para validar la autenticación
// Add more routes as needed

module.exports = router;