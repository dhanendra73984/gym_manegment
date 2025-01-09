const Equipment = require('../models/equipment');

// Get all equipment
const getAllEquipment = (req, res) => {
    Equipment.getAllEquipment((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get equipment by ID
const getEquipmentById = (req, res) => {
    const { id } = req.params;
    Equipment.getEquipmentById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Add new equipment
const addEquipment = (req, res) => {
    const newEquipment = req.body;
    Equipment.addEquipment(newEquipment, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Equipment added successfully', equipmentId: results.insertId });
    });
};

// Update equipment details
const updateEquipment = (req, res) => {
    const { id } = req.params;
    const updatedEquipment = req.body;
    Equipment.updateEquipment(id, updatedEquipment, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.status(200).json({ message: 'Equipment updated successfully' });
    });
};

// Delete equipment
const deleteEquipment = (req, res) => {
    const { id } = req.params;
    Equipment.deleteEquipment(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.status(200).json({ message: 'Equipment deleted successfully' });
    });
};

module.exports = { getAllEquipment, getEquipmentById, addEquipment, updateEquipment, deleteEquipment };
