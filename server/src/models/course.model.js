// cursus-platform/server/src/models/course.model.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, min: 0 },
    instructor: { type: String, required: true }, // This is likely the instructor's name
    category: { type: String, required: true },
    // --- NEW FIELD ADDED ---
    // This will store the MongoDB ObjectId of the user who created the course
    instructorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    // --- END NEW FIELD ---
    createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
