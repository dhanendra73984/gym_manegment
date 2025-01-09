const db = require('./db');

// Get all classes
const getAllClasses = (callback) => {
    db.query('SELECT * FROM classes', callback);
};

// Get a class by ID
const getClassById = (id, callback) => {
    db.query('SELECT * FROM classes WHERE id = ?', [id], callback);
};

// Add a new class
const addClass = (newClass, callback) => {
    db.query('INSERT INTO classes (class_name, schedule, trainer_id, description) VALUES (?, ?, ?, ?)', 
        [newClass.class_name, newClass.schedule, newClass.trainer_id, newClass.description], callback);
};

// Update a class by ID
const updateClass = (id, updatedClass, callback) => {
    db.query('UPDATE classes SET class_name = ?, schedule = ?, trainer_id = ?, description = ? WHERE id = ?', 
        [updatedClass.class_name, updatedClass.schedule, updatedClass.trainer_id, updatedClass.description, id], callback);
};

// Delete a class by ID
const deleteClass = (id, callback) => {
    db.query('DELETE FROM classes WHERE id = ?', [id], callback);
};

module.exports = { getAllClasses, getClassById, addClass, updateClass, deleteClass };
