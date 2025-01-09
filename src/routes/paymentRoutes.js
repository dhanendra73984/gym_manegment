const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authenticateToken = require('../middlewares/authMiddleware');
// Define routes for payments
router.get('/payments', authenticateToken,paymentController.getAllPayments);
router.get('/payments/:id',authenticateToken, paymentController.getPaymentById);
router.post('/payments', authenticateToken,paymentController.addPayment);
router.put('/payments/:id', authenticateToken,paymentController.updatePayment);
router.delete('/payments/:id',authenticateToken, paymentController.deletePayment);

module.exports = router;
