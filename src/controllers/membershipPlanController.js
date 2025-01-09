const MembershipPlan = require('../models/membershipPlans');

// Get all membership plans
const getAllMembershipPlans = (req, res) => {
    MembershipPlan.getAllMembershipPlans((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get a membership plan by ID
const getMembershipPlanById = (req, res) => {
    const { id } = req.params;
    MembershipPlan.getMembershipPlanById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Membership plan not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Add a new membership plan
const addMembershipPlan = (req, res) => {
    const newPlan = req.body;
    MembershipPlan.addMembershipPlan(newPlan, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Membership plan added successfully', planId: results.insertId });
    });
};

// Update a membership plan by ID
const updateMembershipPlan = (req, res) => {
    const { id } = req.params;
    const updatedPlan = req.body;
    MembershipPlan.updateMembershipPlan(id, updatedPlan, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Membership plan not found' });
        }
        res.status(200).json({ message: 'Membership plan updated successfully' });
    });
};

// Delete a membership plan by ID
const deleteMembershipPlan = (req, res) => {
    const { id } = req.params;
    MembershipPlan.deleteMembershipPlan(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Membership plan not found' });
        }
        res.status(200).json({ message: 'Membership plan deleted successfully' });
    });
};

module.exports = { getAllMembershipPlans, getMembershipPlanById, addMembershipPlan, updateMembershipPlan, deleteMembershipPlan };
