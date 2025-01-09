const Payment = require('../models/payments');

// Get all payments
const getAllPayments = (req, res) => {
    Payment.getAllPayments((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get payment by ID
const getPaymentById = (req, res) => {
    const { id } = req.params;
    Payment.getPaymentById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Add a new payment
const addPayment = (req, res) => {
    const newPayment = req.body;
    Payment.addPayment(newPayment, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Payment added successfully', paymentId: results.insertId });
    });
};

// Update a payment
const updatePayment = (req, res) => {
    const { id } = req.params;
    const updatedPayment = req.body;
    Payment.updatePayment(id, updatedPayment, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment updated successfully' });
    });
};

// Delete a payment
const deletePayment = (req, res) => {
    const { id } = req.params;
    Payment.deletePayment(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment deleted successfully' });
    });
};

module.exports = { getAllPayments, getPaymentById, addPayment, updatePayment, deletePayment };
