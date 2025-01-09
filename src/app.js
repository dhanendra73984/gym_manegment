const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const membershipPlanRoutes = require('./routes/membershipPlanRoutes');
const classRoutes = require('./routes/classRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const authRoutes = require('./routes/authRoutes');
const logger = require('./models/logger');
const morganLogger = require('./middlewares/morganMiddleware');




const app = express();

// Middleware
app.use(bodyParser.json());
require('dotenv').config();

// Use Morgan middleware for logging HTTP requests
app.use(morganLogger);

// Log all requests with Winston
app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.originalUrl}`); // Logging the request method and URL
    next(); // Proceed to the next middleware/route handler
});



// Routes
app.use('/api', userRoutes);
app.use('/api', membershipPlanRoutes);
app.use('/api', classRoutes);
app.use('/api', paymentRoutes);
app.use('/api', equipmentRoutes);
app.use('/api/auth', authRoutes);


// Error handling middleware (for logging errors)
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);  // Log the error message with Winston
    res.status(500).send({ error: 'Something went wrong!' });  // Send a generic error response
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
