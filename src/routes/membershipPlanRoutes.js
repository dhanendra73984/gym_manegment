const express = require('express');
const router = express.Router();
const membershipPlanController = require('../controllers/membershipPlanController');
const authenticateToken = require('../middlewares/authMiddleware');


// Define routes
router.get('/membership-plans',authenticateToken, membershipPlanController.getAllMembershipPlans);
router.get('/membership-plans/:id',authenticateToken, membershipPlanController.getMembershipPlanById);
router.post('/membership-plans',authenticateToken, membershipPlanController.addMembershipPlan);
router.put('/membership-plans/:id',authenticateToken, membershipPlanController.updateMembershipPlan);
router.delete('/membership-plans/:id',authenticateToken, membershipPlanController.deleteMembershipPlan);

module.exports = router;
