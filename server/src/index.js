const express = require('express');
const cors = require('cors');
const config = require('./../config/config');
const routes = require('./../routes/routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// Define your routes here
app.use('/', routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});