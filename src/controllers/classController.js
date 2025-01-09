const Class = require('../models/classes');

// Get all classes
const getAllClasses = (req, res) => {
    Class.getAllClasses((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get a class by ID
const getClassById = (req, res) => {
    const { id } = req.params;
    Class.getClassById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Add a new class
const addClass = (req, res) => {
    const newClass = req.body;
    Class.addClass(newClass, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Class added successfully', classId: results.insertId });
    });
};

// Update a class by ID
const updateClass = (req, res) => {
    const { id } = req.params;
    const updatedClass = req.body;
    Class.updateClass(id, updatedClass, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class updated successfully' });
    });
};

// Delete a class by ID
const deleteClass = (req, res) => {
    const { id } = req.params;
    Class.deleteClass(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class deleted successfully' });
    });
};

module.exports = { getAllClasses, getClassById, addClass, updateClass, deleteClass };
