const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');


// Define routes
router.get('/users',authenticateToken, userController.getAllUsers);
router.get('/users/:id',authenticateToken, userController.getUserById);
router.post('/users',authenticateToken, userController.addUser);
router.put('/users/:id',authenticateToken, userController.updateUser);
router.delete('/users/:id',authenticateToken, userController.deleteUser);

module.exports = router;
