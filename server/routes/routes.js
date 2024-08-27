const express = require('express');
const router = express.Router();
// Agrega la referencia al controlador
const homeController = require('../controllers/home_controller');
// Agrega el middleware para validar la autenticación
const basicAuth = require('express-basic-auth');

const auth = basicAuth({
  users: { 
    'admin': 'adminpassword', // Usuario para el administrador
    'Maria': 'password1', 
    'Jota': 'password2', 
    'Valen': 'password3',
    'Pao': 'password4',
    'Cami': 'password5',
    'Cata': 'password6', 
    
  }, // Aquí puedes cambiar username y password por las credenciales que desees
  
  unauthorizedResponse: 'Unauthorized',
  challenge: true
});

// Defino las rutas que tiene el servidor
router.post('/crear_legal', homeController.create_legal);
router.get('/admin_legal', auth, homeController.admin_legal);
router.get('/vista/:abogado', auth, homeController.vista_abogado); // Agrega el middleware para validar la autenticación
// Agregar aqui las rutas que necesites

module.exports = router;