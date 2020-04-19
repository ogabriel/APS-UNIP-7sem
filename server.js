'use strict';

// Config envs
require('dotenv').config();


const path = require('path');
const routes = require('./config/routes');
const express = require('express');
const app = express();

// Config static files
app.use(express.static(path.join(__dirname, 'public')));

// Config api routes
app.use('/api/v1', routes);

// Config server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
