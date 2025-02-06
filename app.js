const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dreamRoutes = require('./routes/dreamRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', dreamRoutes);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found. Please use /api/interpret for dream interpretation.' });
});

module.exports = app;