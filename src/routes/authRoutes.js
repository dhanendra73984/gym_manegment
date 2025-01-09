const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

// Register route
router.post(
    '/register',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('phone').isMobilePhone().withMessage('Invalid phone number'),
        body('role').isIn(['Admin', 'Trainer', 'Member']).withMessage('Invalid role')
    ],
    authController.register
);

// Login route
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    authController.login
);

module.exports = router;
