// cursus-platform/server/src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Ensure JWT_SECRET is loaded from environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized. No token provided or invalid format.' });
    }

    const token = authHeader.split(' ')[1];

    if (!JWT_SECRET) {
        console.error('JWT_SECRET is not defined in environment variables.');
        return res.status(500).json({ message: 'Server configuration error: JWT secret missing.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT verification error:', err);
            // Specific messages for common JWT errors
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Unauthorized. Token expired.' });
            }
            if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
            }
            return res.sendStatus(403); // Forbidden for other errors
        }
        req.user = user; // Attach user payload (id, username, email, role) to request
        next();
    });
};

module.exports = authenticateJWT;
