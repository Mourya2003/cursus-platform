// routes/course.routes.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course.model');

const AUTH_TOKEN = '123';
const authenticateAdmin = (req, res, next) => {
  if (req.headers.authorization === AUTH_TOKEN) next();
  else res.status(401).json({ message: 'Unauthorized' });
};

// POST /courses
router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const saved = await newCourse.save();
    res.status(201).json(saved);
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: 'Course ID already exists.' });
    res.status(500).json({ message: 'Failed to create course' });
  }
});

// GET /courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().lean();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve courses' });
  }
});

// GET /courses/:id
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: req.params.id }).lean();
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve course details' });
  }
});

// PUT /courses/:id
router.put('/:id', authenticateAdmin, async (req, res) => {
  try {
    const updated = await Course.findOneAndUpdate({ courseId: req.params.id }, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update course' });
  }
});

// DELETE /courses/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Course.findOneAndDelete({ courseId: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ message: 'Course deleted successfully', deleted });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete course' });
  }
});

module.exports = router;
