const db = require('./db');

// Get all payments
const getAllPayments = (callback) => {
    db.query('SELECT * FROM payments', callback);
};

// Get payment by ID
const getPaymentById = (id, callback) => {
    db.query('SELECT * FROM payments WHERE id = ?', [id], callback);
};

// Add a new payment
const addPayment = (payment, callback) => {
    db.query(
        'INSERT INTO payments (user_id, amount, payment_date, status, payment_method, transaction_id) VALUES (?, ?, ?, ?, ?, ?)',
        [payment.user_id, payment.amount, payment.payment_date, payment.status, payment.payment_method, payment.transaction_id],
        callback
    );
};

// Update a payment
const updatePayment = (id, payment, callback) => {
    db.query(
        'UPDATE payments SET user_id = ?, amount = ?, payment_date = ?, status = ?, payment_method = ?, transaction_id = ? WHERE id = ?',
        [payment.user_id, payment.amount, payment.payment_date, payment.status, payment.payment_method, payment.transaction_id, id],
        callback
    );
};

// Delete a payment
const deletePayment = (id, callback) => {
    db.query('DELETE FROM payments WHERE id = ?', [id], callback);
};

module.exports = { getAllPayments, getPaymentById, addPayment, updatePayment, deletePayment };
