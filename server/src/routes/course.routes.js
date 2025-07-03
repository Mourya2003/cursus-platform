// cursus-platform/server/src/routes/course.routes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Import mongoose for ObjectId comparison
const Course = require('../models/course.model'); // Import the Course model
const authenticateJWT = require('../middleware/authMiddleware'); // Import the middleware directly here

// --- Course Management Routes ---

// POST /courses - Add a new course (Protected & Role-based: Only Instructors)
router.post('/', authenticateJWT, async (req, res) => { // <-- authenticateJWT applied here
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can create courses.' });
        }

        const { courseId, title, description, price, instructor, category } = req.body;

        if (!courseId || !title || !price || !instructor || !category) {
            return res.status(400).json({ message: 'All required course fields are missing.' });
        }

        const newCourse = new Course({
            courseId,
            title,
            description,
            price,
            instructor,
            category,
            instructorId: req.user.id
        });
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Add course error:', error);
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Course ID already exists.' });
        }
        res.status(500).json({ message: 'Failed to create course' });
    }
});

// GET /courses - Get all courses (Publicly Accessible)
router.get('/', async (req, res) => { // <-- NO authenticateJWT here
    try {
        const courses = await Course.find().lean();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Get all courses error:', error);
        res.status(500).json({ message: 'Failed to retrieve courses' });
    }
});

// GET /courses/my-courses - Fetch courses created by the logged-in instructor (Protected)
router.get('/my-courses', authenticateJWT, async (req, res) => { // <-- authenticateJWT applied here
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can view their own courses.' });
        }

        const instructorCourses = await Course.find({
            instructorId: new mongoose.Types.ObjectId(req.user.id)
        }).lean();

        res.status(200).json(instructorCourses);
    } catch (error) {
        console.error('Get instructor courses error:', error);
        res.status(500).json({ message: 'Failed to retrieve instructor courses' });
    }
});


// GET /courses/:id - Get a specific course by ID (Publicly Accessible)
router.get('/:id', async (req, res) => { // <-- NO authenticateJWT here
    try {
        const course = await Course.findOne({ courseId: req.params.id }).lean();
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
router.put('/:id', authenticateJWT, async (req, res) => { // <-- authenticateJWT applied here
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can update courses.' });
        }

        const { id } = req.params;
        const updateData = req.body;
        delete updateData._id;
        delete updateData.instructorId;

        const course = await Course.findOne({ courseId: id });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        if (course.instructorId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'Access denied. You can only update your own courses.' });
        }

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
router.delete('/:id', authenticateJWT, async (req, res) => { // <-- authenticateJWT applied here
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can delete courses.' });
        }

        const { id } = req.params;

        const course = await Course.findOne({ courseId: id });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        if (course.instructorId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'Access denied. You can only delete your own courses.' });
        }

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
