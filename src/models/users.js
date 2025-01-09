const db = require('./db');
const bcrypt = require('bcryptjs');

// Get all users
const getAllUsers = (callback) => {
    db.query('SELECT * FROM users', callback);
};

// Get user by ID
const getUserById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

// Get user by email
const getUserByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

// Add a new user
/*const addUser = (user, callback) => {
    db.query('INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)', 
        [user.name, user.email, user.password, user.phone, user.role], callback);
};*/

// Add a new user with hashed password
const addUser = async (user, callback) => {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Hash the password
    db.query(
        'INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
        [user.name, user.email, hashedPassword, user.phone, user.role],
        callback
    );
};

// Update user by ID
const updateUser = (id, user, callback) => {
    db.query('UPDATE users SET name = ?, email = ?, password = ?, phone = ?, role = ? WHERE id = ?', 
        [user.name, user.email, user.password, user.phone, user.role, id], callback);
};

// Delete user by ID
const deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser, getUserByEmail };
