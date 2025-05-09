const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/papal-archive')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Papal Archive API',
    version: '1.0.0',
    status: 'active'
  });
});

// Papal timeline routes
app.get('/api/popes', async (req, res) => {
  try {
    // TODO: Implement pope listing with pagination
    res.json({
      message: 'List of popes endpoint',
      status: 'under development'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/popes/:id', async (req, res) => {
  try {
    // TODO: Implement single pope details
    res.json({
      message: 'Single pope details endpoint',
      status: 'under development'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Historical events routes
app.get('/api/events', async (req, res) => {
  try {
    // TODO: Implement historical events listing
    res.json({
      message: 'Historical events endpoint',
      status: 'under development'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 