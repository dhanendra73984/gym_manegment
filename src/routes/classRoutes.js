const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const authenticateToken = require('../middlewares/authMiddleware');


// Define routes for classes
router.get('/classes',authenticateToken, classController.getAllClasses);
router.get('/classes/:id',authenticateToken, classController.getClassById);
router.post('/classes',authenticateToken, classController.addClass);
router.put('/classes/:id', authenticateToken,classController.updateClass);
router.delete('/classes/:id',authenticateToken, classController.deleteClass);

module.exports = router;
