const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        required: true,
        default: 'student',
    },
}, {

    timestamps: true
});

// Create a Mongoose Model from the schema
// The model name 'User' will correspond to a collection named 'users' in MongoDB
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other files (like controllers/routes)
module.exports = User;
