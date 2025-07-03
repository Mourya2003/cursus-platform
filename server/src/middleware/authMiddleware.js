// cursus-platform/server/src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// --- IMPORTANT FIX: Access JWT_SECRET inside the function ---
// This ensures process.env is fully loaded when the middleware is actually executed
const authenticateJWT = (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET; // <--- MOVED ACCESS HERE

    if (!JWT_SECRET) {
        console.error('JWT_SECRET is not defined in environment variables. (Checked inside middleware)');
        return res.status(500).json({ message: 'Server configuration error: JWT secret missing.' });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized. No token provided or invalid format.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT verification error:', err);
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
