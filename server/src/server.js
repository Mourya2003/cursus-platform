// cursus-platform/server/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// --- NEW: Import JWT Authentication Middleware ---
const authenticateJWT = require('./middleware/authMiddleware');
// --- END NEW ---

// --- Import Route Files ---
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const razorpayRoutes = require("./routes/razorpay"); // Assuming this is correct from your previous server.js
// --- END Import Route Files ---

dotenv.config();
console.log('Loaded JWT_SECRET:', process.env.JWT_SECRET ? 'YES (length ' + process.env.JWT_SECRET.length + ')' : 'NO');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/edtech_platform')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error:', err));

// Path for Payment
app.use("/api/payment", razorpayRoutes);
// Note: You had app.use("/api/payment", require("./routes/razorpay")); twice.
// I've kept one, assuming razorpayRoutes already imports it.

// Healthcheck
app.get('/healthcheck', (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  res.status(200).json({
    message: 'Backend is healthy',
    database: dbStatus === 1 ? 'Connected' : `Disconnected (State: ${dbStatus})`,
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);

// --- NEW: Apply authenticateJWT to course routes ---
// All routes defined in course.routes.js will now first pass through authenticateJWT
app.use('/courses', authenticateJWT, courseRoutes);
// --- END NEW ---

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
