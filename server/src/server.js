const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Course = require('./models/course.model'); // Import Course model correctly

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

// --- POST /courses: Add a new course ---
app.post('/courses', async (req, res) => {
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
app.put('/courses/:id', async (req, res) => {
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
});

// Note: Routes and other logic will be added later