// cursus-platform/server/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// --- Import Route Files ---
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const razorpayRoutes = require("./routes/razorpay");
// --- END Import Route Files ---

dotenv.config(); // Load environment variables first

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/edtech_platform')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error:', err));

// Path for Payment
app.use("/api/payment", razorpayRoutes);

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
// --- IMPORTANT: No authenticateJWT here for /courses ---
// authenticateJWT is now applied directly to individual routes within course.routes.js
app.use('/courses', courseRoutes);
// --- END IMPORTANT ---

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
