const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users');

// Login a user
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Query user by email
        User.getUserByEmail(email, async (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Database error.' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found.' });
            }

            const user = results[0];

            // Compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials.' });
            }

            // Validate JWT_SECRET
            if (!process.env.JWT_SECRET) {
                console.error('JWT_SECRET is not defined.');
                return res.status(500).json({ error: 'Server configuration error.' });
            }

            // Generate JWT Token
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' } // Token expires in 1 hour
            );

            // Respond with token
            res.status(200).json({ message: 'Login successful.', token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

// Register a user
const register = async (req, res) => {
    const { name, email, password, phone, role } = req.body;

    // Check if user already exists
    User.getAllUsers((err, users) => {
        if (err) return res.status(500).json({ error: err.message });

        if (users.some(u => u.email === email)) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Add the new user
        User.addUser({ name, email, password, phone, role }, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};

module.exports = { login, register };
