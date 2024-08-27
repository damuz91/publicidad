const express = require('express');
const cors = require('cors');
const path = require('path'); 
const config = require('../config/config'); 
const routes = require('../routes/routes');  
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));  

// Define tus rutas aquí
app.use('/', routes);

// Inicia el servidor
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});