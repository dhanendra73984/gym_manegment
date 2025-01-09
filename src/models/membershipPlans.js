const db = require('./db');

// Get all membership plans
const getAllMembershipPlans = (callback) => {
    db.query('SELECT * FROM membership_plans', callback);
};

// Get a membership plan by ID
const getMembershipPlanById = (id, callback) => {
    db.query('SELECT * FROM membership_plans WHERE id = ?', [id], callback);
};

// Add a new membership plan
const addMembershipPlan = (plan, callback) => {
    db.query('INSERT INTO membership_plans (plan_name, price, duration_months, description) VALUES (?, ?, ?, ?)', 
        [plan.plan_name, plan.price, plan.duration_months, plan.description], callback);
};

// Update a membership plan by ID
const updateMembershipPlan = (id, plan, callback) => {
    db.query('UPDATE membership_plans SET plan_name = ?, price = ?, duration_months = ?, description = ? WHERE id = ?', 
        [plan.plan_name, plan.price, plan.duration_months, plan.description, id], callback);
};

// Delete a membership plan by ID
const deleteMembershipPlan = (id, callback) => {
    db.query('DELETE FROM membership_plans WHERE id = ?', [id], callback);
};

module.exports = { getAllMembershipPlans, getMembershipPlanById, addMembershipPlan, updateMembershipPlan, deleteMembershipPlan };
