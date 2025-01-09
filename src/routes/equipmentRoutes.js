const express = require('express');
const equipmentController = require('../controllers/equipmentController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/equipment', authenticateToken, equipmentController.getAllEquipment);
router.get('/equipment/:id', authenticateToken, equipmentController.getEquipmentById);
router.post('/equipment', authenticateToken, equipmentController.addEquipment);
router.put('/equipment/:id', authenticateToken, equipmentController.updateEquipment);
router.delete('/equipment/:id', authenticateToken, equipmentController.deleteEquipment);

module.exports = router;
