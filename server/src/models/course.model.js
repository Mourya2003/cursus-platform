// cursus-platform/server/src/models/course.model.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, min: 0 },
    instructor: { type: String, required: true }, // This is likely the instructor's name
    category: { type: String, required: true },
    instructorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    // --- NEW FIELD ADDED: tags array ---
    tags: { type: [String], default: [] }, // Array of strings for tags, defaults to empty array
    // --- END NEW FIELD ---
    createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
