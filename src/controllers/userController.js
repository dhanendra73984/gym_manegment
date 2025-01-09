const User = require('../models/users');

// Get all users
const getAllUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get a user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    User.getUserById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Add a new user
const addUser = (req, res) => {
    const newUser = req.body;
    User.addUser(newUser, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User added successfully', userId: results.insertId });
    });
};

// Update a user by ID
const updateUser = (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

// Delete a user by ID
const deleteUser = (req, res) => {
    const { id } = req.params;
    User.deleteUser(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
