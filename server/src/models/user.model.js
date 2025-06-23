const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Will use for password hashing

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
  role: { // To differentiate between users (e.g., student, instructor, admin)
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



// --- Pre-save hook for password hashing ---
// This middleware runs *before* a user document is saved to the database
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next(); // Move to the next middleware or save operation
  } catch (err) {
    next(err); // Pass error to the next middleware
  }
});

// --- Method to compare entered password with hashed password ---
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;