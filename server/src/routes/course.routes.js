// cursus-platform/server/src/routes/course.routes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Import mongoose for ObjectId comparison
const Course = require('../models/course.model'); // Import the Course model

// --- Course Management Routes ---

// POST /courses - Add a new course (Protected & Role-based: Only Instructors)
router.post('/', async (req, res) => {
    try {
        // req.user is populated by authenticateJWT middleware (from server.js)
        if (!req.user) {
            // This case should ideally be caught by authenticateJWT before reaching here,
            // but it's a good safeguard.
            return res.status(401).json({ message: 'Unauthorized. Please log in.' });
        }

        // --- NEW: Role-based access check ---
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can create courses.' });
        }
        // --- END NEW ---

        const { courseId, title, description, price, instructor, category } = req.body;

        // Basic validation
        if (!courseId || !title || !!description || !price || !instructor || !category) {
            return res.status(400).json({ message: 'All course fields are required.' });
        }

        // Add course to DB, including the instructor's ID from the JWT
        const newCourse = new Course({
            courseId,
            title,
            description,
            price,
            instructor, // This 'instructor' field is likely the instructor's name
            category,
            instructorId: req.user.id // Store the actual MongoDB _id of the instructor from JWT
        });
        await newCourse.save(); // Use .save() since we're using the Mongoose model

        res.status(201).json(newCourse); // Return the saved course object
    } catch (error) {
        console.error('Add course error:', error);
        // Handle duplicate courseId error specifically
        if (error.code === 11000) { // MongoDB duplicate key error code
            return res.status(409).json({ message: 'Course ID already exists.' });
        }
        res.status(500).json({ message: 'Failed to create course' });
    }
});

// GET /courses - Get all courses (Unprotected)
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find().lean(); // Use Course model to find
        res.status(200).json(courses);
    } catch (error) {
        console.error('Get all courses error:', error);
        res.status(500).json({ message: 'Failed to retrieve courses' });
    }
});

// --- NEW: GET /courses/my-courses - Fetch courses created by the logged-in instructor ---
router.get('/my-courses', async (req, res) => {
    try {
        // req.user is populated by authenticateJWT middleware
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized. Please log in.' });
        }

        // Ensure the user is an instructor
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can view their own courses.' });
        }

        // Find courses where instructorId matches the logged-in user's ID
        // Use mongoose.Types.ObjectId to ensure proper comparison with stored ObjectId
        const instructorCourses = await Course.find({
            instructorId: new mongoose.Types.ObjectId(req.user.id)
        }).lean();

        res.status(200).json(instructorCourses);
    } catch (error) {
        console.error('Get instructor courses error:', error);
        res.status(500).json({ message: 'Failed to retrieve instructor courses' });
    }
});
// --- END NEW ---


// GET /courses/:id - Get a specific course by ID (Unprotected)
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findOne({ courseId: req.params.id }).lean(); // Use Course model
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        console.error('Get specific course error:', error);
        res.status(500).json({ message: 'Failed to retrieve course details' });
    }
});

// PUT /courses/:id - Update course details by ID (Protected & Role-based: Only Instructor who owns the course)
router.put('/:id', async (req, res) => {
    try {
        // req.user is populated by authenticateJWT middleware
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized. Please log in.' });
        }

        // --- NEW: Role-based access and ownership check ---
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can update courses.' });
        }

        const { id } = req.params;
        const updateData = req.body;
        // Prevent changing _id or instructorId via update
        delete updateData._id;
        delete updateData.instructorId;

        // Find the course to ensure ownership
        const course = await Course.findOne({ courseId: id });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Compare instructorId (from DB) with logged-in user's ID (from JWT)
        if (course.instructorId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'Access denied. You can only update your own courses.' });
        }
        // --- END NEW ---

        const updated = await Course.findOneAndUpdate({ courseId: id }, updateData, { new: true }).lean();
        if (!updated) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updated);
    } catch (error) {
        console.error('Update course error:', error);
        res.status(500).json({ message: 'Failed to update course' });
    }
});

// DELETE /courses/:id - Delete a course by ID (Protected & Role-based: Only Instructor who owns the course)
router.delete('/:id', async (req, res) => {
    try {
        // req.user is populated by authenticateJWT middleware
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized. Please log in.' });
        }

        // --- NEW: Role-based access and ownership check ---
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can delete courses.' });
        }

        const { id } = req.params;

        // Find the course to ensure ownership
        const course = await Course.findOne({ courseId: id });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Compare instructorId (from DB) with logged-in user's ID (from JWT)
        if (course.instructorId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'Access denied. You can only delete your own courses.' });
        }
        // --- END NEW ---

        const deleted = await Course.findOneAndDelete({ courseId: id });
        if (!deleted) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully', deleted });
    } catch (error) {
        console.error('Delete course error:', error);
        res.status(500).json({ message: 'Failed to delete course' });
    }
});

module.exports = router;
