// cursus-platform/server/src/routes/course.routes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/course.model');
const authenticateJWT = require('../middleware/authMiddleware');

// --- Course Management Routes ---

// POST /courses - Add a new course (Protected & Role-based: Only Instructors)
router.post('/', authenticateJWT, async (req, res) => {
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can create courses.' });
        }

        const { courseId, title, description, price, instructor, category, tags } = req.body; // <-- Added 'tags' here

        if (!courseId || !title || !price || !instructor || !category) {
            return res.status(400).json({ message: 'All required course fields are missing.' });
        }

        // Validate tags if provided
        if (tags && (!Array.isArray(tags) || !tags.every(tag => typeof tag === 'string'))) {
            return res.status(400).json({ message: 'Tags must be an array of strings.' });
        }

        const newCourse = new Course({
            courseId,
            title,
            description,
            price,
            instructor,
            category,
            instructorId: req.user.id,
            tags: tags || [] // <-- Assign tags, default to empty array if not provided
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

// GET /courses - Get all courses with Search and Filter capabilities (Publicly Accessible)
router.get('/', async (req, res) => {
    try {
        const { search, category, instructor, minPrice, maxPrice, tags } = req.query; // Get query parameters
        const query = {}; // Initialize an empty query object for MongoDB

        // Search by title, description, or instructor (case-insensitive regex)
        if (search) {
            const searchRegex = new RegExp(search, 'i'); // 'i' for case-insensitive
            query.$or = [ // Use $or to search across multiple fields
                { title: searchRegex },
                { description: searchRegex },
                { instructor: searchRegex }
            ];
        }

        // Filter by category (exact match, case-insensitive)
        if (category) {
            query.category = new RegExp(`^${category}$`, 'i'); // Exact match for category
        }

        // Filter by specific instructor name (exact match, case-insensitive)
        if (instructor) {
            query.instructor = new RegExp(`^${instructor}$`, 'i'); // Exact match for instructor name
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) {
                query.price.$gte = parseFloat(minPrice); // $gte: greater than or equal to
            }
            if (maxPrice) {
                query.price.$lte = parseFloat(maxPrice); // $lte: less than or equal to
            }
            // Basic validation for price range
            if (isNaN(query.price.$gte) || isNaN(query.price.$lte)) {
                return res.status(400).json({ message: 'Invalid price range provided.' });
            }
        }

        // Filter by tags (match any of the provided tags)
        if (tags) {
            // If tags is a comma-separated string, split it into an array
            const tagsArray = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagsArray.map(tag => new RegExp(tag, 'i')) }; // Match any tag, case-insensitive
        }

        const courses = await Course.find(query).lean(); // Apply the constructed query
        res.status(200).json(courses);
    } catch (error) {
        console.error('Get all courses with search/filter error:', error);
        res.status(500).json({ message: 'Failed to retrieve courses with applied filters' });
    }
});

// GET /courses/my-courses - Fetch courses created by the logged-in instructor (Protected)
router.get('/my-courses', authenticateJWT, async (req, res) => {
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can view their own courses.' });
        }

        // --- NEW: Add search/filter to my-courses as well (optional, but useful) ---
        const { search, category, minPrice, maxPrice, tags } = req.query;
        const query = { instructorId: new mongoose.Types.ObjectId(req.user.id) }; // Start with instructor filter

        if (search) {
            const searchRegex = new RegExp(search, 'i');
            query.$or = [
                { title: searchRegex },
                { description: searchRegex },
                { instructor: searchRegex }
            ];
        }
        if (category) {
            query.category = new RegExp(`^${category}$`, 'i');
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseFloat(minPrice);
            if (maxPrice) query.price.$lte = parseFloat(maxPrice);
            if (isNaN(query.price.$gte) || isNaN(query.price.$lte)) {
                return res.status(400).json({ message: 'Invalid price range provided.' });
            }
        }
        if (tags) {
            const tagsArray = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagsArray.map(tag => new RegExp(tag, 'i')) };
        }
        // --- END NEW ---

        const instructorCourses = await Course.find(query).lean(); // Apply the constructed query

        res.status(200).json(instructorCourses);
    } catch (error) {
        console.error('Get instructor courses error:', error);
        res.status(500).json({ message: 'Failed to retrieve instructor courses' });
    }
});


// GET /courses/:id - Get a specific course by ID (Publicly Accessible)
router.get('/:id', async (req, res) => {
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
router.put('/:id', authenticateJWT, async (req, res) => {
    try {
        if (req.user.role !== 'instructor') {
            return res.status(403).json({ message: 'Access denied. Only instructors can update courses.' });
        }

        const { id } = req.params;
        const updateData = req.body;
        delete updateData._id;
        delete updateData.instructorId;

        // Validate tags if provided in update
        if (updateData.tags && (!Array.isArray(updateData.tags) || !updateData.tags.every(tag => typeof tag === 'string'))) {
            return res.status(400).json({ message: 'Tags must be an array of strings.' });
        }

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
router.delete('/:id', authenticateJWT, async (req, res) => {
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
