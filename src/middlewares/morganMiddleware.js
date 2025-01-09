const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

// Ensure logs directory exists
const logDirectory = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });  // Create logs directory if it doesn't exist
}

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

// Setup morgan to log to the file and console
const morganLogger = morgan('combined', { stream: accessLogStream });

module.exports = morganLogger;
