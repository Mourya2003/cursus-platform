const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Course = require('./models/course.model'); // Import Course model correctly
const User = require('./models/user.model');     // Import User model
const jwt = require('jsonwebtoken');        // Import jsonwebtoken

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
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
// -------------------------------

// --- Authentication Middleware ---
// This AUTH_TOKEN is for the basic admin authentication for courses,
// and will be replaced by JWT logic for user authentication later.
const AUTH_TOKEN = '123'; // This will be replaced by JWT later for course protection

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader === AUTH_TOKEN) {
    next(); // Allow the request to proceed
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
// --- End of Authentication Middleware ---

// Define the /healthcheck route
// For Postman health check API: http://localhost:5000/healthcheck
app.get('/healthcheck', (req, res) => {
  // Optional: Include database connection status in healthcheck
  const dbStatus = mongoose.connection.readyState; // 0: disconnected, 1: connected, etc.
  res.status(200).json({
    message: 'Backend is healthy',
    database: dbStatus === 1 ? 'Connected' : `Disconnected (State: ${dbStatus})`,
  });
});

// --- Auth Routes ---
// POST /api/auth/signup - User Registration
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password, // Password will be hashed by the pre-save hook in user.model.js
      role: role || 'student', // Default role to 'student' if not provided
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with success message (don't send password back)
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
        createdAt: savedUser.createdAt,
      },
    });

  } catch (error) {
    // Handle specific errors like duplicate username or email
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({ message: `${field} already exists.`, error: error.message });
    }
    // Handle validation errors (e.g., password too short, invalid email)
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message, error: error.errors });
    }
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
});

// POST /api/auth/login - User Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 2. Compare provided password with hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role }, // Payload for the token
      process.env.JWT_SECRET,           // Secret key from .env
      { expiresIn: '1h' }               // Token expiration time
    );

    // 4. Send token and user info (excluding password)
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Failed to log in', error: error.message });
  }
});
// --- End of Auth Routes ---


// --- POST /courses: Add a new course ---
app.post('/courses', authenticateAdmin, async (req, res) => { // Apply middleware here
  try {
    const { courseId, title, description, price, instructor, category } = req.body;

    const newCourse = new Course({
      courseId,
      title,
      description,
      price,
      instructor,
      category,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.courseId) {
      return res.status(409).json({ message: 'Course ID already exists.' }); // 409 Conflict
    }
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Failed to create course', error: error.message });
  }
});
// --- End of POST /courses ---

// --- DELETE /courses/:id: Remove a course ---
app.delete('/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    const deletedCourse = await Course.findOneAndDelete({ courseId: courseId });

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully', deletedCourse });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ message: 'Failed to delete course', error: error.message });
  }
});
// --- End of DELETE /courses/:id ---

// --- GET /courses: Get all courses ---
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Failed to retrieve courses', error: error.message });
  }
});
// --- End of GET /courses ---

// --- GET /courses/:id: Get details of a specific course ---
app.get('/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findOne({ courseId: courseId }); // Find by courseId

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error('Error fetching course details:', error);
    res.status(500).json({ message: 'Failed to retrieve course details', error: error.message });
  }
});
// --- End of GET /courses/:id ---

// --- PUT /courses/:id: Update course details ---
app.put('/courses/:id', authenticateAdmin, async (req, res) => { // Apply middleware here
  try {
    const courseId = req.params.id;
    const updateData = req.body;

    const updatedCourse = await Course.findOneAndUpdate({ courseId: courseId }, updateData, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ message: 'Failed to update course', error: error.message });
  }
});
// --- End of PUT /courses/:id ---

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});// Note: Routes and other logic will be added later

