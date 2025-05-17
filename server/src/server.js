const express = require('express');
const mongoose = require('mongoose'); // Mongoose is required
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// --- MongoDB Connection Code ---
// Use the MONGODB_URI from environment variables or a default local URI
const DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/edtech_platform';

// Connect to MongoDB using Mongoose
mongoose.connect(DB_URI)
  .then(() => console.log('MongoDB connected successfully')) // Success message
  .catch(err => console.error('MongoDB connection error:', err)); // Error message
// -------------------------------


// Define the /healthcheck route
//for postman helath check api:http://localhost:5000/healthcheck
app.get('/healthcheck', (req, res) => {
  // Optional: Include database connection status in healthcheck
  const dbStatus = mongoose.connection.readyState; // 0: disconnected, 1: connected, etc.
  res.status(200).json({
    message: 'Backend is healthy',
    database: dbStatus === 1 ? 'Connected' : `Disconnected (State: ${dbStatus})`,
  });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Note: Routes and other logic will be added later
