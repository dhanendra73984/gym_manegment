const db = require('./db');

// Get all equipment
const getAllEquipment = (callback) => {
    db.query('SELECT * FROM equipment_inventory', callback);
};

// Get equipment by ID
const getEquipmentById = (id, callback) => {
    db.query('SELECT * FROM equipment_inventory WHERE id = ?', [id], callback);
};

// Add a new equipment
const addEquipment = (equipment, callback) => {
    db.query(
        'INSERT INTO equipment_inventory (name, description, category, quantity, availability, added_date) VALUES (?, ?, ?, ?, ?, ?)',
        [equipment.name, equipment.description, equipment.category, equipment.quantity, equipment.availability, equipment.added_date],
        callback
    );
};

// Update equipment details
const updateEquipment = (id, equipment, callback) => {
    db.query(
        'UPDATE equipment_inventory SET name = ?, description = ?, category = ?, quantity = ?, availability = ?, added_date = ? WHERE id = ?',
        [equipment.name, equipment.description, equipment.category, equipment.quantity, equipment.availability, equipment.added_date, id],
        callback
    );
};

// Delete equipment
const deleteEquipment = (id, callback) => {
    db.query('DELETE FROM equipment_inventory WHERE id = ?', [id], callback);
};

module.exports = { getAllEquipment, getEquipmentById, addEquipment, updateEquipment, deleteEquipment };
